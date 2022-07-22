import "./style.scss";
import Modal from "../ModalContainer";
import { useState } from "react";
import ListUsers from "./ListUsers";
import CreateUser from "./CreateUser";
import useModal from "../../hooks/useModal";
import ViewUser from "./ViewUser";
import { IUserComplete } from "../../types/UserTypes";
import UpdateUser from "./UpdateUser";

export default function UserManager() {
  const [operation, setOperation] = useState<"CREATE" | "VIEW" | "UPDATE" | "LIST">("LIST");
  const [selectedUser, setSelectedUser] = useState<IUserComplete>({} as IUserComplete);
  const { closeAll } = useModal();

  return (
    <Modal>
      <div className="usermanager-container">
        <button className="close-usermanager" onClick={closeAll}></button>

        {operation === "LIST" && (
          <ListUsers setSelectedUser={setSelectedUser} setCrudState={setOperation} />
        )}
        {operation === "CREATE" && <CreateUser setCrudState={setOperation} />}
        {operation === "UPDATE" && (
          <UpdateUser user={selectedUser} setCrudState={setOperation} />
        )}
        {operation === "VIEW" && <ViewUser user={selectedUser} setCrudState={setOperation} />}
      </div>
    </Modal>
  );
}
