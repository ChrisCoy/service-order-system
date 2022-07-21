import Modal from "../ModalContainer";
import "./style.scss";
// import useModal from "../../hooks/useModal";
import useAuth from "../../hooks/useAuth";
import { SyntheticEvent, useState } from "react";
import useToast from "../../hooks/useToast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginDelay, setLoginDelay] = useState(false);

  const { login } = useAuth();
  const Toast = useToast();

  setTimeout(() => {
    setLoginDelay(true);
  }, 50);

  function handleLogin(evt: SyntheticEvent) {
    evt.preventDefault();
    if (!email || !password) {
      Toast.error("Blank Inputs!");
      return;
    }

    if (email.length < 5 || password.length < 5) {
      Toast.error("Email or Password too Short!");
      return;
    }

    login(email, password);
  }

  if (!loginDelay) {
    return null;
  }

  return (
    <Modal>
      <form className="username-content" onSubmit={handleLogin}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fillRule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>
        <label htmlFor="user-input">
          Email
          <input
            id="user-input"
            type="text"
            name="username"
            maxLength={40}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            id="password-input"
            type="password"
            name="password"
            maxLength={26}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>

        <button type="submit">CONFIRMAR</button>
      </form>
    </Modal>
  );
}
