import "./style.scss";



export default function AsideMenu() {
  return (
    <div className="aside-menu">
      <aside className="menu">
        <span>Filtrar</span>
        <button>Recentes</button>
        <button>Por setor</button>
        <button>Por data</button>
      </aside>
      <button id="new-order" onClick={() => {}}>
        NOVO CHAMADO
      </button>
      <button id="remove-order" onClick={() => {}}>
        REMOVER TODAS OS
      </button>
    </div>
  );
}
