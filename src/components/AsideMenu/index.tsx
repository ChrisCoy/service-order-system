import useAuth from "../../hooks/useAuth";
import useModal from "../../hooks/useModal";
import "./style.scss";

export default function AsideMenu() {
  const { user } = useAuth();
  const { setNewOrderModal, setUserManagerModal } = useModal();

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
          <button className="button" onClick={() => setUserManagerModal(true)}>
            GERENCIAR USUÁRIOS
          </button>
          <button className="button" onClick={() => {}}>
            GERENCIAR SETORES
          </button>
        </>
      )}
    </div>
  );
}
