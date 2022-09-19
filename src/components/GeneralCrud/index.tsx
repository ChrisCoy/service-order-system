import { useState, useEffect } from "react";
import List from "./List";

interface IGeneralCrudProps<T> {
  saveFunc: (element: T) => void;
  deleteFunc: (id: string) => void;
  updateFunc: (id: string) => void;
  elemets: T[];
}

export default function GeneralCrud() {
  const [selectedItem, setSelectedItem] = useState({} as any);
  const [screenState, setScreenState] = useState<"FORM" | "LIST">("LIST");

  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem]);

  function test(id: any) {
    console.log(id);
  }

  return (
    <>
      {screenState === "LIST" && (
        <List
          elements={[
            { id: "1", name: "joao", maisum: "testando jjj" },
            { id: "2", name: "chris", maisum: "testando jjj" },
            { id: "2", name: "chris", maisum: "testando jjj" },
            { id: "2", name: "chris", maisum: "testando jjj" },
            { id: "2", name: "chris", maisum: "testando jjj" },
            { id: "2", name: "chris", maisum: "testando jjj" },
          ]}
          titles={["titulo1", "titulo2", "Mais1"]}
          deleteFunc={test}
          setSelectedItem={setSelectedItem}
        />
      )}
    </>
  );
}
