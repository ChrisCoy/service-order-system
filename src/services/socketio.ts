import io from "socket.io-client";

const socket = {
  io: io("http://localhost:3002", {
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
