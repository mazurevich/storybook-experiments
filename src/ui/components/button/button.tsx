import { FC } from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const ButtonVariant = {
  primary: "primary",
  secondary: "secondary",
} as const;

type ButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant];

const ButtonSize = {
  small: "small",
  medium: "medium",
  large: "large",
} as const;

type ButtonSize = (typeof ButtonSize)[keyof typeof ButtonSize];

export const Button: FC<ButtonProps> = ({
  variant = ButtonVariant.primary,
  size = ButtonSize.medium,
  children,
  onClick,
}) => {
  const sizeClasses = clsx({
    "px-4 py-1.5": size === ButtonSize.medium,
    "px-2 py-1": size === ButtonSize.small,
    "px-6 py-2": size === ButtonSize.large,
  });

  const variantClasses = clsx({
    "bg-primary-n text-white hover:bg-primary-l active:bg-primary-d":
      variant === ButtonVariant.primary,
    "bg-secondary-n text-white hover:bg-secondary-l active:bg-secondary-d":
      variant === ButtonVariant.secondary,
  });
  return (
    <button
      className={clsx("rounded-lg", sizeClasses, variantClasses)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
