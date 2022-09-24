import { useEffect, useState } from "react";
import Modal from "../ModalContainer";
import useModal from "../../hooks/useModal";
import "./style.scss";
import io from "../../services/socketio";
import { IRole } from "../../types/UserTypes";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";

export default function NewOrder() {
  const { closeAll } = useModal();
  const [open, setOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<IRole>({
    _id: "",
    name: "Selecione o setor",
  });
  const [roleList, setRoleList] = useState<IRole[]>([]);
  const [resume, setResume] = useState("");
  const { AxiosQuery } = useAxios();
  const { user } = useAuth();
  const Toast = useToast();

  useEffect(() => {
    AxiosQuery("role/list").then(({ data }) => {
      setRoleList(data.roleList);
    });
  }, []);

  function handleNewOrder() {
    const order = {
      sector: selectedRole._id,
      resume: resume,
      author: user._id,
    };

    if (!order.sector || !order.author || !order.resume) {
      Toast.error("Invalid data.");
      return;
    }

    io.emit("send-new-order", order);
    closeAll();
  }

  return (
    <Modal>
      <div className="modal-content">
        <div
          className="sectors-combobox"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span id="combobox-selected-item">{selectedRole.name}</span>
          <div className="combobox-options" style={{ display: open ? "block" : "none" }}>
            {roleList.map((role) => (
              <div
                className="combo-box-option"
                onClick={() => {
                  setSelectedRole(role);
                }}
              >
                {role.name}
              </div>
            ))}
          </div>
        </div>
        <textarea
          name="resume"
          id="os-resume"
          value={resume}
          onChange={(e) => setResume(e.target.value)}
          maxLength={400}
          placeholder="Relate em poucas palavras seu problema."
        ></textarea>
        <div className="modal-buttons">
          <button id="cancel-button" onClick={closeAll}>
            CANCELAR
          </button>
          <button id="send-button" onClick={handleNewOrder}>
            SALVAR
          </button>
        </div>
      </div>
    </Modal>
  );
}
