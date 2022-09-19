import { IoArrowBack as BackIcon } from "react-icons/io5";
import type { IRole, IUserComplete } from "../../types/UserTypes";

interface IViewRoleProps {
  setCrudState: (option: "CREATE" | "VIEW" | "UPDATE" | "LIST") => void;
  role: IRole;
}

export default function ViewUser({ setCrudState, role }: IViewRoleProps) {
  return (
    <>
      <button className="back-button" onClick={() => setCrudState("LIST")}>
        <BackIcon size={38} />
      </button>
      <h2 className="title-create">Informações do Usuário</h2>
      <div className="create-user-container">
        <div className="inputs-container-user">
          <label htmlFor="name">
            Nome do Setor
            <input type="text" value={role.name} id="name" disabled />
          </label>
        </div>
      </div>
    </>
  );
}
