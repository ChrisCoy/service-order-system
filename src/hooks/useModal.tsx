import { useContext } from "react";
import { ModalContext, ModalContextData } from "../providers/ModalProvider";

export default function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  return context;
}
