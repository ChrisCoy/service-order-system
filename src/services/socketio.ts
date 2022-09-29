import io from "socket.io-client";

const socket = {
  io: io(process.env.REACT_APP_API_LINK as string, {
    extraHeaders: {
      token: localStorage.getItem("@SO-System:accessToken") || "",
    },
  }),
  reAuth: () => {
    socket.io.io.opts.extraHeaders = {
      token: localStorage.getItem("@SO-System:accessToken") || "",
    };
  },
};

export default socket;
