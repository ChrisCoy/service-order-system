import Axios from "../services/api";
// import useToast from "./useToast";

export default function useAxios() {
  // const Toast = useToast();
  const jwt = JSON.parse(localStorage.getItem("@SO-System:accessToken") as string);

  const AxiosQuery = async (query: string, params: any = null) => {
    try {
      const { data, status } = await Axios.post(query, { accessToken: jwt, data: params });
      return { data, status };
    } catch (err) {
      return { data: null, status: 500 };
    }
  };

  return { AxiosQuery };
}
