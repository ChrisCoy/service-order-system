import { IoArrowBack as BackIcon } from "react-icons/io5";
import type {  IUserComplete } from "../../types/UserTypes";

interface IViewUserProps {
  setCrudState: (option: "CREATE" | "VIEW" | "UPDATE" | "LIST") => void;
  user: IUserComplete;
}

export default function ViewUser({ setCrudState, user }: IViewUserProps) {
  console.log(user);
  return (
    <>
      <button className="back-button" onClick={() => setCrudState("LIST")}>
        <BackIcon size={38} />
      </button>
      <h2 className="title-create">Informações do Usuário</h2>
      <div className="create-user-container">
        <div className="inputs-container-user">
          <label htmlFor="name">
            Nome
            <input type="text" value={user.name} id="name" disabled />
          </label>
          <label htmlFor="eml">
            Usuário/Email
            <input type="text" id="eml" value={user.email} disabled />
          </label>
          <label htmlFor="role">
            Setor
            <input type="text" id="role" value={user.role?.name} disabled />
          </label>
        </div>
      </div>
    </>
  );
}
