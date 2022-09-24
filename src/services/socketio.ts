import io, { Socket } from "socket.io-client";

const token = localStorage.getItem("@SO-System:accessToken") || "";

const socket = io("http://localhost:3002", {
  extraHeaders: {
    token: token,
  },
});

export default socket;
