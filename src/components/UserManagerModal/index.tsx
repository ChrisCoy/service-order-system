import "./style.scss";
import Modal from "../ModalContainer";
import { useEffect, useState } from "react";
import ListUsers from "./ListUsers";
import CreateUser from "./CreateUser";
import useModal from "../../hooks/useModal";
import ViewUser from "./ViewUser";
import { IUserComplete } from "../../types/UserTypes";
import UpdateUser from "./UpdateUser";
import GeneralCrud from "../GeneralCrud";
import useAxios from "../../hooks/useAxios";

export default function UserManager() {
  const { AxiosQuery } = useAxios();
  const [operation, setOperation] = useState<"CREATE" | "VIEW" | "UPDATE" | "LIST">("LIST");
  const [selectedUser, setSelectedUser] = useState<IUserComplete>({} as IUserComplete);
  const [users, setUsers] = useState<IUserComplete[]>([]);

  useEffect(() => {
    AxiosQuery("/user/list").then(({ data }) => {
      setUsers(data.userList);
    });
  }, []);

  const { closeAll } = useModal();

  return (
    <Modal>
      <div className="usermanager-container">
        <button className="close-usermanager" onClick={closeAll}></button>

        {operation === "LIST" && (
          <ListUsers
            setSelectedUser={setSelectedUser}
            setCrudState={setOperation}
            setUsers={setUsers}
            users={users}
          />
        )}
        {operation === "CREATE" && (
          <CreateUser setCrudState={setOperation} setUsers={setUsers} />
        )}
        {operation === "UPDATE" && (
          <UpdateUser user={selectedUser} setCrudState={setOperation} setUsers={setUsers} />
        )}
        {operation === "VIEW" && <ViewUser user={selectedUser} setCrudState={setOperation} />}
      </div>
    </Modal>
  );
}
