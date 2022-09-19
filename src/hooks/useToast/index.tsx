import { renderToString } from "react-dom/server";
import { AiOutlineInfoCircle as InfoIcon } from "react-icons/ai";
import { IoWarningOutline as ErrorIcon } from "react-icons/io5";

import "./style.scss";

const toastContainer = document.createElement("div");
toastContainer.classList.add("toast-container");


//i know it is not something good to do, but it works well and i want to finish this project...
//so, well, sorry for you that had read this creppy code :D
function addAndRemoveNode(div: any) {
  const contDivToast = document.querySelectorAll(".toast").length;
  if (contDivToast === 0) {
    document.body.append(toastContainer);
  }
  toastContainer.append(div);
  setTimeout(() => {
    if (document.querySelectorAll(".toast").length === 0) {
      toastContainer.remove();
    }
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
