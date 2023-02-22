import clsx from "clsx";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { StackContext } from "./stack-context";

type StackProps = {
  children: React.ReactNode;
};
type StackItemType = { id: number; element: HTMLElement };
export const Stack: FC<StackProps> = ({ children }) => {
  const [stackItems, setStactItems] = useState<StackItemType[]>([]);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const setPosition = () => {
    if (isCollapsed && stackItems.length > 0) {
      const { element: firstCard } = stackItems[0];
      firstCard.style.position = "relative";

      const { height, width } = firstCard.getBoundingClientRect();
      console.log(stackItems);
      stackItems.slice(1).forEach(({ element: item }, index) => {
        // item.style.transform = `translateY(${index * 20}px)`;
        item.style.position = "absolute";
        item.style.top = `${(index + 1) * 5}px`;
        item.style.height = `${height}px`;
        item.style.transform = `scaleX(${1 - (index + 1) * 0.05})`;
      });

      stackItems.forEach(({ element: item }, index) => {
        item.style.zIndex = `${stackItems.length + 1 - index}`;
      });
    } else {
      stackItems.forEach(({ element: item }) => {
        item.style.position = "relative";
        item.style.top = "0px";
        item.style.height = "";
        item.style.transform = "none";
      });
    }
  };

  useEffect(() => {
    setPosition();
  }, [isCollapsed, stackItems]);

  const setStyles = () => {
    stackItems.forEach(({ element: item }) => {
      item.style.transition = "all 0.2s ease-in-out";
      item.style.width = `100%`;
    });
  };

  useEffect(() => {
    setStyles();
  }, [stackItems]);

  const registerStackItem = useCallback((element: HTMLElement) => {
    const id = Math.floor(Math.random() * 1000) + Date.now();
    setStactItems((prevStackItems) => [...prevStackItems, { id, element }]);
    return id;
  }, []);

  const unregisterStackItem = useCallback((id: number) => {
    setStactItems((prevStackItems) =>
      prevStackItems.filter((item) => item.id !== id)
    );
  }, []);

  const handleCardClick = useCallback(() => {
    setIsCollapsed(false);
  }, []);

  const handleCollapseItems = useCallback(() => {
    setIsCollapsed(true);
  }, []);

  return (
    <StackContext.Provider
      value={{
        onCardMount: registerStackItem,
        onCardUnmount: unregisterStackItem,
        onCardClick: handleCardClick,
      }}
    >
      <div className={clsx(!isCollapsed && "flex-1 flex-col", "w-full")}>
        <div className="flex justify-end">
          <button
            className={clsx(isCollapsed && "invisible")}
            onClick={handleCollapseItems}
          >
            Collapse All
          </button>
        </div>
        <div className="relative w-full flex-1 flex-col">{children}</div>
      </div>
    </StackContext.Provider>
  );
};
