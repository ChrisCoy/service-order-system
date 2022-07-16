import "./style.scss";

interface AsideMenuProps {
  setNewOrderOpen: (option: boolean) => void;
}

export default function AsideMenu({ setNewOrderOpen }: AsideMenuProps) {
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
          setNewOrderOpen(true);
        }}
      >
        NOVO CHAMADO
      </button>
      <button id="remove-order" onClick={() => {}}>
        REMOVER TODAS OS
      </button>
      <button className="add-user-button" onClick={() => {}}>GERENCIAR USUÁRIOS</button>
    </div>
  );
}
