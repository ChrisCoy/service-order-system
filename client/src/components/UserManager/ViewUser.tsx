import { IoArrowBack as BackIcon } from "react-icons/io5";

export default function ViewUser({ setState }: any) {
  return (
    <>
      <button className="back-button" onClick={() => setState("LIST")}>
        <BackIcon size={38} />
      </button>
      <h2 className="title-create">Informações do Usuário</h2>
      <div className="create-user-container">
        <div className="inputs-container-user">
          <label htmlFor="name">
            Nome
            <input type="text" value={"Christopher Lee"} id="name" disabled />
          </label>
          <label htmlFor="eml">
            Usuário/Email
            <input type="text" id="eml" value={"ChrisCoy@gmail.com"} disabled />
          </label>
          <label htmlFor="psw">
            Senha
            <input type="text" id="psw" value={"senhabemforte"} disabled />
          </label>
          <label htmlFor="role">
            <input type="text" id="role" value={"Financeiro"} disabled />
          </label>
        </div>
      </div>
    </>
  );
}
