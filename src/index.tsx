import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./providers/AuthProvider";
import { ModalProvider } from "./providers/ModalProvider";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <AuthProvider>
    <ModalProvider>
      <App />
    </ModalProvider>
  </AuthProvider>
);
