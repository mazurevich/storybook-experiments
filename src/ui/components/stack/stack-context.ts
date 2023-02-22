import { createContext, MouseEventHandler } from "react";

type StackContextType = {
  onCardMount: (ref: HTMLElement) => number;
  onCardUnmount: (id: number) => void;
  onCardClick: MouseEventHandler;
};

export const StackContext = createContext<StackContextType>({
  onCardMount: () => 0,
  onCardUnmount: () => {},
  onCardClick: () => {},
});
