import { useCallback, useEffect, useRef } from "react";
import useModal from "../../hooks/useModal";
import "./style.scss";

interface ModalProps {
  children?: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const { closeAll } = useModal();
  const closeRef = useRef<HTMLDivElement>(null);

  const closeModal = (evt: any) => {
    if (evt.target === closeRef.current) {
      closeAll();
    }
  };

  const keyPress = useCallback(
    (evt: KeyboardEvent) => {
      if (evt.key === "Escape") {
        closeAll();
      }
    },
    [closeAll]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  });

  return (
    <>
      <div className="close-modal" onMouseDown={closeModal} ref={closeRef}>
        {children}
      </div>
    </>
  );
}
