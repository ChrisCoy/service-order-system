import "./style.scss";
import Modal from "../ModalContainer";
import { useState } from "react";
import ListUsers from "./ListUsers";
import CreateUser from "./CreateUser";
import useModal from "../../hooks/useModal";
import ViewUser from "./ViewUser";

export default function UserManager() {
  const [operation, setOperation] = useState<"CREATE" | "VIEW" | "UPDATE" | "LIST">("LIST");
  const { closeAll } = useModal();

  return (
    <Modal>
      <div className="usermanager-container">
        <button className="close-usermanager" onClick={closeAll}></button>

        {operation === "LIST" && <ListUsers setState={setOperation} />}
        {operation === "CREATE" && <CreateUser setState={setOperation} />}
        {operation === "VIEW" && <ViewUser setState={setOperation} />}
      </div>
    </Modal>
  );
}
