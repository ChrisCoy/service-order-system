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

function App() {
  const { newOrderModal, userManagerModal } = useModal();
  const { isAuth, validateSession } = useAuth();
  const vldSession = useCallback(() => {
    validateSession();
  }, [validateSession]);

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

export default App;
