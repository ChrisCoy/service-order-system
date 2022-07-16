import { useEffect, useState } from "react";
import "./style.scss";

interface NewOrderProps {
  setNewOrderOpen: (option: boolean) => void;
}

export default function NewOrder({ setNewOrderOpen }: NewOrderProps) {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Selecione o setor");

  useEffect(() => {
    document.addEventListener(
      "keydown",
      (evt) => {
        if (evt.key === "Escape") {
          setNewOrderOpen(false);
        }
      },
      true
    );
  }, []);

  return (
    <div className="modal">
      <div className="modal-content">
        <div
          className="sectors-combobox"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span id="combobox-selected-item">{selectedOption}</span>
          <div className="combobox-options" style={{ display: open ? "block" : "none" }}>
            <div
              className="combo-box-option"
              onClick={() => {
                setSelectedOption("Almoxarifado");
              }}
            >
              Almoxarifado
            </div>
            <div
              className="combo-box-option"
              onClick={() => {
                setSelectedOption("Financeiro");
              }}
            >
              Financeiro
            </div>
            <div
              className="combo-box-option"
              onClick={() => {
                setSelectedOption("Suprimentos");
              }}
            >
              Suprimentos
            </div>
            <div
              className="combo-box-option"
              onClick={() => {
                setSelectedOption("Segurança");
              }}
            >
              Segurança
            </div>
          </div>
        </div>
        <textarea
          name="resume"
          id="os-resume"
          maxLength={400}
          placeholder="Relate em poucas palavras seu problema."
        ></textarea>
        <div className="modal-buttons">
          <button
            id="cancel-button"
            onClick={() => {
              setNewOrderOpen(false);
            }}
          >
            CANCELAR
          </button>
          <button id="send-button" onClick={() => {}}>
            SALVAR
          </button>
        </div>
      </div>
      <div id="exit-modal" onClick={() => {}}></div>
    </div>
  );
}
