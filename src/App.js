import Footer from './component/layout/Footer';
import Header from './component/layout/Header';

function App(props) {
  return (
    <>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </>
  );
}

export default App;
