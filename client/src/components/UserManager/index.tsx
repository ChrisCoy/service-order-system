import "./style.scss";
import useModal from "../../hooks/useModal";
import Modal from "../Modal";
import { useState } from "react";
import ListUsers from "./ListUsers";

export default function UserManager() {
  const [operation, setOperation] = useState<"CREATE" | "READ" | "UPDATE" | "LIST">("LIST");
  const { userManagerModal, closeAll } = useModal();

  if (!userManagerModal) {
    return null;
  }
  return (
    <Modal>
      <div className="usermanager-container">
        {operation === "LIST" && <ListUsers setState={setOperation} />}
      </div>
    </Modal>
  );
}
