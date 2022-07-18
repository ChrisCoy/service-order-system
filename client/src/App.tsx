import AsideMenu from "./components/AsideMenu";
import Navbar from "./components/Navbar";
import OrderItem from "./components/OrderItem";
import "./styles/global.scss";
import "./styles/app.scss";
import Login from "./components/Login";
import NewOrder from "./components/NewOrder";
import UserManager from "./components/UserManager";
import { ModalProvider } from "./providers/ModalProvider";
import Footer from "./components/Footer";

function App() {
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
    <ModalProvider>
      {/* <Login /> */}
      <UserManager />
      <NewOrder />
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
    </ModalProvider>
  );
}

export default App;
