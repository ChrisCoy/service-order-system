import io from "socket.io-client";

//i dont know how to type these params, lol
interface ISocket {
  _instance?: any;
  instance: () => any;
}

export const socketConnection: ISocket = {
  get instance() {
    if (!this._instance) {
      this._instance = io("http://192.168.0.11:1337");
    }
    return this._instance;
  },
};
