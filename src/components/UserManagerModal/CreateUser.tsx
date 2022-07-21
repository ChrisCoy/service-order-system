import { IoArrowBack as BackIcon } from "react-icons/io5";

export default function CreateUser({ setState }: any) {
  return (
    <>
      <button className="back-button" onClick={() => setState("LIST")}>
        <BackIcon size={38} />
      </button>
      <h2 className="title-create">Criando Usuário</h2>
      <div className="create-user-container">
        <div className="inputs-container-user">
          <label htmlFor="name">
            Nome
            <input type="text" id="name" />
          </label>
          <label htmlFor="eml">
            Usuário/Email
            <input type="text" id="eml" />
          </label>
          <label htmlFor="psw">
            Senha
            <input type="text" id="psw" />
          </label>
          <label htmlFor="role">
            <select name="options">
              <option disabled selected>
                Selecione uma opção.
              </option>
              <option value="1">Almoxarifado</option>
              <option value="1">Almoxarifado</option>
              <option value="1">Almoxarifado</option>
              <option value="1">Almoxarifado</option>
            </select>
          </label>
        </div>
        <button className="save-user-button">SALVAR</button>
      </div>
    </>
  );
}
