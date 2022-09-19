interface IListProps {
  elements: any[];
  titles: string[];
  deleteFunc: (id: string) => void;
  setSelectedItem: (option: any) => void;
}

export default function List({ elements, titles, deleteFunc, setSelectedItem }: IListProps) {
  if (elements.length === 0) {
    return <h2>Nenhum item cadastrado.</h2>;
  }

  const items = [];

  for (let i = 0; i < elements.length; i++) {
    const arr = [];
    for (let key in elements[i]) {
      arr.push(elements[i][key]);
    }
    items.push(arr);
  }

  return (
    <table width={"100%"}>
      <thead>
        <tr>
          {titles.map((item) => (
            <th key={item} style={{ textAlign: "start" }}>
              {item}
            </th>
          ))}
          <th style={{ textAlign: "start" }}>Options</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr onClick={() => setSelectedItem(item)}>
            {item.map((subItem) => (
              <td>{subItem}</td>
            ))}
            <td>
              <button onClick={() => deleteFunc("teste")}>X</button>
              <button>E</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
