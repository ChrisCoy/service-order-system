import { renderToString } from "react-dom/server";
import { AiOutlineInfoCircle as InfoIcon } from "react-icons/ai";
import { IoWarningOutline as ErrorIcon } from "react-icons/io5";

import "./style.scss";

function addAndRemoveNode(div: any) {
  const cont = document.querySelectorAll(".toast").length * 70 + 16;
  div.style.top = `${cont}px`;
  document.body.append(div);
  setTimeout(() => {
    div.remove();
  }, 2900);
}

export default function useToast() {
  function error(message: string) {
    if (!message || message.length === 0) {
      return;
    }
    const divToAdd = document.createElement("div");
    divToAdd.classList.add("toast");

    divToAdd.style.background = "#ff6767";
    divToAdd.style.background = "#ff6767";
    divToAdd.innerHTML = `<h2>${renderToString(<ErrorIcon />)}</h2>` + message;
    addAndRemoveNode(divToAdd);
  }

  function info(message: string) {
    if (!message || message.length === 0) {
      return;
    }
    const divToAdd = document.createElement("div");
    divToAdd.classList.add("toast");
    divToAdd.style.background = "#67b6ff";
    divToAdd.innerHTML = `<h2>${renderToString(<InfoIcon />)}</h2>` + message;
    addAndRemoveNode(divToAdd);
  }

  return { error, info };
}
