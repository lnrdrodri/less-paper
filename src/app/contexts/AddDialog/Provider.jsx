import { useCallback, useState } from "react";
import { createContext } from "react";

export const AddDialogContext = createContext({
  isOpen: false,
  open: () => {},
  close: () => {},
  isLoading: false,
  setIsLoading: () => {},
});

export function AddDialogProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <AddDialogContext.Provider value={{ isOpen, open, close, isLoading, setIsLoading }}>
      {children}
    </AddDialogContext.Provider>
  );
}