import { useContext } from "react";
import { AddDialogContext } from "../contexts/AddDialog/Provider";

export function useAddDialog() {
  return useContext(AddDialogContext);
}