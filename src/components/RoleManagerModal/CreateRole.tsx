import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { IoArrowBack as BackIcon } from "react-icons/io5";
import useToast from "../../hooks/useToast";
import type { IRole, IUserComplete } from "../../types/UserTypes";
import useAxios from "../../hooks/useAxios";

interface ICreateRoleProps {
  setCrudState: (option: "CREATE" | "VIEW" | "UPDATE" | "LIST") => void;
}

export default function CreateUser({ setCrudState }: ICreateRoleProps) {
  const [name, setName] = useState("");
  const { AxiosQuery } = useAxios();
  const Toast = useToast();

  function handleSaveSubmit(evt: SyntheticEvent) {
    evt.preventDefault();
    if (name.length === 0) {
      Toast.error("Campo vazio!");
      return;
    }

    AxiosQuery("role/add", { name: name });
    setCrudState("LIST");
    Toast.info("Success!")
  }

  return (
    <>
      <button className="back-button" onClick={() => setCrudState("LIST")}>
        <BackIcon size={38} />
      </button>
      <h2 className="title-create">Criando Setor</h2>
      <form onSubmit={handleSaveSubmit} className="create-user-container">
        <div className="inputs-container-user">
          <label htmlFor="name">
          Nome do Setor
            <input
              type="text"
              id="name"
              value={name}
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
