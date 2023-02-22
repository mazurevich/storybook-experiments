import clsx from "clsx";
import { FC, useContext, useEffect, useRef } from "react";
import { StackContext } from "./stack-context";

type StackCardProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const StackCard: FC<StackCardProps> = ({
  className,
  style,
  children,
}) => {
  const { onCardClick, onCardMount, onCardUnmount } = useContext(StackContext);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const idRef = useRef<number>(0);

  useEffect(() => {
    if (wrapperRef.current) {
      idRef.current = onCardMount(wrapperRef.current);
    }
    return () => {
      if (idRef.current) {
        onCardUnmount(idRef.current);
      }
    };
  }, [onCardMount, onCardUnmount]);

  return (
    <div
      className={clsx("stack-card", className)}
      style={style}
      ref={wrapperRef}
      onClick={onCardClick}
    >
      {children}
    </div>
  );
};
