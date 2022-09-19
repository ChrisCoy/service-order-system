import Modal from "../ModalContainer";
import { useEffect, useState } from "react";
import ListRole from "./ListRole";
import useModal from "../../hooks/useModal";
import ViewRole from "./ViewRole";
import { IRole, IUserComplete } from "../../types/UserTypes";
import UpdateRole from "./UpdateRole";
import GeneralCrud from "../GeneralCrud";
import useAxios from "../../hooks/useAxios";
import CreateRole from "./CreateRole";

export default function RoleManagerModal() {
  const [roleList, setRoleList] = useState<IRole[]>([]);
  const { AxiosQuery } = useAxios();
  const [operation, setOperation] = useState<"CREATE" | "VIEW" | "UPDATE" | "LIST">("LIST");
  const [selectedRole, setSelectedRole] = useState<IRole>({} as IRole);

  useEffect(() => {
    AxiosQuery("role/list").then(({ data }) => {
      setRoleList(data.roleList);
    });
  }, []);

  const { closeAll } = useModal();

  return (
    <Modal>
      <div className="usermanager-container">
        <button className="close-usermanager" onClick={closeAll}></button>

        {operation === "LIST" && (
          <ListRole
            setSelectedRole={setSelectedRole}
            setCrudState={setOperation}
            setRoles={setRoleList}
            roles={roleList}
          />
        )}
        {operation === "CREATE" && <CreateRole setCrudState={setOperation} />}
        {operation === "UPDATE" && (
          <UpdateRole role={selectedRole} setCrudState={setOperation} />
        )}
        {operation === "VIEW" && <ViewRole role={selectedRole} setCrudState={setOperation} />}
      </div>
    </Modal>
  );
}
