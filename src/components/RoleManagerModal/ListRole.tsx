import { BsFileEarmarkPerson as PersonIcon } from "react-icons/bs";
import { FiEdit as EditIcon } from "react-icons/fi";
import { AiOutlineDelete as DeleteIcon, AiOutlineMail as EmailIcon } from "react-icons/ai";
// import { IoPersonAddOutline as AddUserIcon } from "react-icons/io5";
import { MdOutlineDriveFileRenameOutline as NameIcon } from "react-icons/md";
import { useEffect, useState } from "react";
import type { IRole, IUser, IUserComplete } from "../../types/UserTypes";
import useAxios from "../../hooks/useAxios";
import useToast from "../../hooks/useToast";

interface IListRoleProps {
  roles: IRole[];
  setRoles: (value: IRole[]) => void;
  setCrudState: (option: "CREATE" | "VIEW" | "UPDATE" | "LIST") => void;
  setSelectedRole: (option: IRole) => void;
}

export default function ListUsers({
  setCrudState,
  setSelectedRole,
  roles,
  setRoles,
}: IListRoleProps) {
  let contZebra = 0;
  const { AxiosQuery } = useAxios();
  const Toast = useToast();

  useEffect(() => {
    AxiosQuery("/role/list").then(({ data }) => {
      setRoles(data.roleList);
    });
  }, []);

  function handleEditButton(_id?: string) {
    const selectedRole = roles.find((role) => role._id === _id) as IRole;
    setCrudState("UPDATE");
    setSelectedRole(selectedRole);
  }

  function handleViewButton(_id?: string) {
    const selectedRole = roles.find((role) => role._id === _id) as IRole;
    setCrudState("VIEW");
    setSelectedRole(selectedRole);
  }

  async function handleRemoveButton(_id?: string) {
    const { status } = await AxiosQuery(`role/remove/${_id}`);

    if (status !== 200) {
      Toast.info("Error!");
      return;
    }

    AxiosQuery("/role/list").then(({ data }) => {
      setRoles(data.roleList);
      Toast.info("Success!");
    });
  }

  return (
    <>
      <div className="userslist-title">
        <button className="create-new-user" onClick={() => setCrudState("CREATE")}>
          <p>Criar Novo Setor</p>
          <span>
            <NameIcon />
          </span>
        </button>
        <h2>Setores Registrados</h2>
      </div>
      <div className="user-item-title">
        <div className="user-name">
          <NameIcon />
          <strong>Nome do Setor</strong>
        </div>
        <span className="item-buttons">
          <strong>Ações</strong>
        </span>
      </div>

      {roles.map((role) => {
        contZebra++;
        return (
          <div className={`user-item ${contZebra % 2 && "zebra-item"}`} key={contZebra}>
            <div
              className="item-info"
              onClick={() => {
                handleViewButton(role._id);
              }}
            >
              <div className="user-name">
                <p>{role.name}</p>
              </div>
            </div>
            <span className="item-buttons">
              <EditIcon
                onClick={() => {
                  handleEditButton(role._id);
                }}
              />
              <DeleteIcon
                onClick={() => {
                  handleRemoveButton(role._id);
                }}
              />
            </span>
          </div>
        );
      })}
    </>
  );
}
