import { useSelector } from "react-redux";
import { AlertMessage } from "./component/alert/alert";
import Footer from "./component/layout/Footer";
import Header from "./component/layout/Header";
import { alertSelector } from "./redux";

function App(props) {
  const alert = useSelector(alertSelector);
  return (
    <>
      {alert.displayAlert && <AlertMessage chilren={alert.itemPropAlert} />}
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </>
  );
}

export default App;
