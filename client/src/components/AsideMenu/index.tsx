import useAuth from "../../hooks/useAuth";
import useModal from "../../hooks/useModal";
import useToast from "../../hooks/useToast";
import "./style.scss";

export default function AsideMenu() {
  const { user } = useAuth();
  const { setNewOrderModal, setUserManagerModal } = useModal();
  const Toast = useToast();

  return (
    <div className="aside-menu">
      <aside className="menu">
        <span>Filtrar</span>
        <button>Recentes</button>
        <button>Por setor</button>
        <button>Por data</button>
      </aside>
      <button
        id="new-order"
        onClick={() => {
          setNewOrderModal(true);
        }}
      >
        NOVO CHAMADO
      </button>
      {/* <button id="remove-order" onClick={() => {}}>
        REMOVER TODAS OS
      </button> */}
      {user.isAdmin && (
        <>
          <button
            className="button"
            onClick={() => {
              Toast.info("Testando com mensagem");
            }}
          >
            GERENCIAR USUÁRIOS
          </button>
          <button className="button" onClick={() => setUserManagerModal(true)}>
            GERENCIAR SETORES
          </button>
        </>
      )}
    </div>
  );
}
