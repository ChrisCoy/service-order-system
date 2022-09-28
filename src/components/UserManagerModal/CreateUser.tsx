import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { IoArrowBack as BackIcon } from "react-icons/io5";
import useToast from "../../hooks/useToast";
import type { IRole, IUserComplete } from "../../types/UserTypes";
import useAxios from "../../hooks/useAxios";

interface ICreateUserProps {
  setCrudState: (option: "CREATE" | "VIEW" | "UPDATE" | "LIST") => void;
  setUsers: (value: IUserComplete[]) => void;
}

export default function CreateUser({ setCrudState, setUsers }: ICreateUserProps) {
  const [roleList, setRoleList] = useState<IRole[]>([]);
  const { AxiosQuery } = useAxios();
  const formRef = useRef(null);
  const Toast = useToast();

  useEffect(() => {
    AxiosQuery("role/list").then(({ data }) => {
      setRoleList(data.roleList);
    });
  }, []);

  function handleSaveSubmit(evt: SyntheticEvent) {
    evt.preventDefault();
    let contError = 0;
    const form: HTMLFormElement = formRef.current as unknown as HTMLFormElement;
    if (!form) {
      return;
    }

    form.querySelectorAll("input").forEach((item) => {
      if (item.value.length === 0) {
        contError++;
      }
    });

    if (
      (form.querySelector("#psw") as HTMLInputElement).value !==
      (form.querySelector("#psw_repeat") as HTMLInputElement).value
    ) {
      Toast.error("Password does not match!");
      return;
    }

    if ((form.querySelector("#psw") as HTMLInputElement).value.length < 6) {
      Toast.error("Password too short.");
      return;
    }

    if (contError > 0) {
      Toast.error("Blank field!");
      return;
    }
    if ((form.querySelector("#options") as HTMLSelectElement).value === "0") {
      Toast.error("Please select a role.");
      return;
    }

    const newUser = {
      email: (form.querySelector("#eml") as HTMLInputElement).value,
      name: (form.querySelector("#name") as HTMLInputElement).value,
      password: (form.querySelector("#psw") as HTMLInputElement).value,
      role: (form.querySelector("#options") as HTMLSelectElement).value,
    };


    AxiosQuery("/user/register", newUser).then(({ status }) => {
      if (status === 200) {
        AxiosQuery("/user/list").then(({ data }) => {
          setUsers(data.userList);
        });
        Toast.info("Success!");
        setCrudState("LIST");
      } else {
        Toast.error("Error!");
      }
    });
  }

  return (
    <>
      <button className="back-button" onClick={() => setCrudState("LIST")}>
        <BackIcon size={38} />
      </button>
      <h2 className="title-create">Criando Usuário</h2>
      <form ref={formRef} onSubmit={handleSaveSubmit} className="create-user-container">
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
          <label htmlFor="psw">
            Repita a senha
            <input type="text" id="psw_repeat" />
          </label>
          <label htmlFor="role">
            Setor
            <select name="options" id="options" defaultValue={0}>
              <option value={0} disabled>
                Selecione uma opção.
              </option>

              {roleList.map((role) => {
                return <option value={role._id}>{role.name}</option>;
              })}
            </select>
          </label>
        </div>
        <button type="submit" className="save-user-button">
          SALVAR
        </button>
      </form>
    </>
  );
}
