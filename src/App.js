import { useSelector } from "react-redux";
import { AlertMessage } from "./component/alert/alert";
import Icon from "./component/icon/icon";
import Footer from "./component/layout/Footer";
import Header from "./component/layout/Header";
import { alertSelector } from "./redux";

function App(props) {
  const alert = useSelector(alertSelector);
  const customerName = localStorage.getItem("customerName");
  console.log(customerName);
  return (
    <>
      {customerName && <Icon />}
      {alert.displayAlert && <AlertMessage chilren={alert.itemPropAlert} />}
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </>
  );
}

export default App;
