import { BsFileEarmarkPerson as PersonIcon } from "react-icons/bs";
import { FiEdit as EditIcon } from "react-icons/fi";
import { AiOutlineDelete as DeleteIcon, AiOutlineMail as EmailIcon } from "react-icons/ai";
import { IoPersonAddOutline as AddUserIcon } from "react-icons/io5";
import useModal from "../../hooks/useModal";

export default function ListUsers({ setState }: any) {
  const { closeAll } = useModal();
  let contZebra = 0;

  return (
    <>
      <div className="userslist-title">
        <button className="create-new-user" onClick={() => setState("CREATE")}>
          <p>Criar Novo Usuário</p>
          <span>
            <AddUserIcon />
          </span>
        </button>
        <h2>Usuários Registrados</h2>
      </div>
      <div className="user-item-title">
        <div className="user-name">
          <PersonIcon />
          <strong>Nome</strong>
        </div>

        <div className="user-email">
          <EmailIcon />
          <strong>Email/usuário</strong>
        </div>
        <span className="item-buttons">
          <strong>Ações</strong>
        </span>
      </div>

      {Array(20)
        .fill({})
        .map((item) => {
          contZebra++;
          return (
            <div
              className={`user-item ${contZebra % 2 && "zebra-item"}`}
              key={contZebra}
              onClick={() => {
                setState("VIEW");
              }}
            >
              <div className="user-name">
                <p>Christopher Lee</p>
              </div>
              <div className="user-email">
                <p>Chriscoy@outlook.com</p>
              </div>
              <span className="item-buttons">
                <EditIcon />
                <DeleteIcon />
              </span>
            </div>
          );
        })}
    </>
  );
}
