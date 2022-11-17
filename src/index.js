import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import Shop from "./component/shop/Shop";
import About from "./component/About";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Register from "./component/member/Register";
import Login from "./component/member/Login";
import Cart from "./component/shop/Cart";
import Blog from "./component/blog/Blog";
import BlogDetail from "./component/blog/BlogDetail";
import { Detail } from "./component/Detail";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Provider } from "react-redux";
import { store } from "./redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <App>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/blogdetail" element={<BlogDetail />}></Route>
        </Routes>
      </App>
    </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
