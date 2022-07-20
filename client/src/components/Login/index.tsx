import Modal from "../Modal";
import "./style.scss";
import useModal from "../../hooks/useModal";
import useAuth from "../../hooks/useAuth";

export default function Login() {
  const { authenticate } = useAuth();
  return (
    <Modal>
      <div className="username-content">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fillRule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>
        <label htmlFor="user-input">
          Email
          <input id="user-input" type="text" name="username" maxLength={26} />
        </label>
        <label htmlFor="password-input">
          Senha
          <input id="password-input" type="text" name="password" maxLength={26} />
        </label>

        <button
          type="button"
          onClick={() => {
            authenticate();
          }}
        >
          CONFIRMAR
        </button>
      </div>
    </Modal>
  );
}
