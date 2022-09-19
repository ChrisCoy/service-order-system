import Axios from "../services/api";
// import useToast from "./useToast";
const loadingContainer = document.createElement("div");
loadingContainer.classList.add("loading-container");
loadingContainer.innerHTML = `<img src="loading.svg" />`;

async function addLoadIcon() {
  document.body.appendChild(loadingContainer);
  return;
}

async function removeLoadIcon() {
  loadingContainer.remove();
  return;
}

export default function useAxios() {
  // const Toast = useToast();
  const jwt = JSON.parse(localStorage.getItem("@SO-System:accessToken") as string);

  const AxiosQuery = async (query: string, params: any = null) => {
    await addLoadIcon();
    try {
      const { data, status } = await Axios.post(query, { accessToken: jwt, data: params });
      await removeLoadIcon();
      console.log(data);
      return { data, status };
    } catch (err) {
      await removeLoadIcon();
      console.error(err);

      return { data: null, status: 500 };
    }
  };

  return { AxiosQuery };
}
