import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { IoArrowBack as BackIcon } from "react-icons/io5";
import useToast from "../../hooks/useToast";
import type { IRole, IUserComplete } from "../../types/UserTypes";
import useAxios from "../../hooks/useAxios";

interface ICreateRoleProps {
  role: IRole;
  setCrudState: (option: "CREATE" | "VIEW" | "UPDATE" | "LIST") => void;
}

export default function UpdateRole({ setCrudState, role }: ICreateRoleProps) {
  const [name, setName] = useState(role.name);
  const { AxiosQuery } = useAxios();
  const Toast = useToast();

  async function handleSaveSubmit(evt: SyntheticEvent) {
    evt.preventDefault();
    if (name.length === 0) {
      Toast.error("Campo vazio!");
      return;
    }
    const { status } = await AxiosQuery("role/update", { name: name, _id: role._id });

    if (status !== 200) {
      Toast.error("Error!");
      return;
    }
    setCrudState("LIST");
    Toast.info("Success!");
  }

  return (
    <>
      <button className="back-button" onClick={() => setCrudState("LIST")}>
        <BackIcon size={38} />
      </button>
      <h2 className="title-create">Editando Usuário</h2>
      <form onSubmit={handleSaveSubmit} className="create-user-container">
        <div className="inputs-container-user">
          <label htmlFor="name">
          Nome do Setor
            <input
              type="text"
              id="name"
              value={name}
              defaultValue={role.name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" className="save-user-button">
          SALVAR
        </button>
      </form>
    </>
  );
}
