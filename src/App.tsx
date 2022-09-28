import "./styles/global.scss";
import "./styles/app.scss";

import NewOrder from "./components/NewOrderModal";
import UserManager from "./components/UserManagerModal";
import RoleManagerModal from "./components/RoleManagerModal";
import Login from "./components/LoginModal";
import Navbar from "./components/Navbar";
import AsideMenu from "./components/AsideMenu";
import CallContainer from "./components/CallContainer";
import Footer from "./components/Footer";

import { useCallback, useEffect } from "react";
import useModal from "./hooks/useModal";
import useAuth from "./hooks/useAuth";

export default function App() {
  const { newOrderModal, userManagerModal, roleManagerModal } = useModal();
  const { isAuth, validateSession } = useAuth();
  const vldSession = useCallback(() => {
    validateSession();
  }, [validateSession]);

  /*eslint-disable */
  useEffect(() => {
    vldSession();
  }, []);
  /*eslint-enable  */

  return (
    <>
      {!isAuth && <Login />}
      {userManagerModal && <UserManager />}
      {newOrderModal && <NewOrder />}
      {roleManagerModal && <RoleManagerModal />}
      <Navbar />
      <main className="main-content">
        <AsideMenu />
        <CallContainer />
        {/* container de chamados aqui */}
      </main>
      <Footer />
    </>
  );
}
