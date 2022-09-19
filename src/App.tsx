import AsideMenu from "./components/AsideMenu";
import Navbar from "./components/Navbar";
import OrderItem from "./components/OrderItem";
import "./styles/global.scss";
import "./styles/app.scss";
import Login from "./components/LoginModal";
import NewOrder from "./components/NewOrderModal";
import UserManager from "./components/UserManagerModal";
import Footer from "./components/Footer";

import useModal from "./hooks/useModal";
import useAuth from "./hooks/useAuth";
import { useCallback, useEffect } from "react";
import RoleManagerModal from "./components/RoleManagerModal";

import { socketConnection } from "./services/socketio";

export default function App() {
  const { newOrderModal, userManagerModal, roleManagerModal } = useModal();
  const { isAuth, validateSession } = useAuth();
  const vldSession = useCallback(() => {
    validateSession();
  }, [validateSession]);

  const io = socketConnection.instance();

  io();

  /*eslint-disable */
  useEffect(() => {
    vldSession();
  }, []);
  /*eslint-enable  */

  const order = {
    sector: "ALMOXARIFADO",
    author: "Christopher Lee",
    createdAt: "20/05/2000",
    resume:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus" +
      "earum ullam dolor recusandae quisquam fugiat eaque sit, nulla odit excepturi" +
      "hic ea expedita itaque exercitationem. Aliquam perferendis architecto voluptate eius.",
  };
  return (
    <>
      {!isAuth && <Login />}
      {userManagerModal && <UserManager />}
      {newOrderModal && <NewOrder />}
      {roleManagerModal && <RoleManagerModal />}
      <Navbar />
      <main className="main-content">
        <AsideMenu />
        <section className="order" id="orders">
          <OrderItem order={order} />
          <OrderItem order={order} />
          <OrderItem order={order} />
          <OrderItem order={order} />
          <OrderItem order={order} />
        </section>
      </main>
      <Footer />
    </>
  );
}
