import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setDisplayAlert, setItemPropAlert } from "../../redux";

function Login() {
  const [itemLogin, setItemLogin] = useState({
    email: "",
    pass: "",
  });
  const [itemErr, setItemErr] = useState({});
  const ktMail =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function hanldeIn(e) {
    const nameIn = e.target.name;
    const value = e.target.value;
    setItemLogin((state) => ({ ...state, [nameIn]: value }));
  }

  function hanldeSubmit(e) {
    e.preventDefault();
    let checkInput = true;
    const errSubmit = {};
    if (itemLogin.email == "") {
      checkInput = false;
      errSubmit.email = "Nhap dia chi email";
    } else {
      if (!ktMail.test(itemLogin.email)) {
        checkInput = false;
        errSubmit.email = "Dia chi mail khong dung dinh dang";
      } else {
        errSubmit.email = "";
      }
    }
    if (itemLogin.pass == "") {
      checkInput = false;
      errSubmit.pass = "Nhap mat khau";
    } else {
      errSubmit.pass = "";
    }
    if (!checkInput) {
      setItemErr(errSubmit);
    } else {
      axios
        .post("http://localhost:5000/api/login", {
          email: itemLogin.email,
          password: itemLogin.pass,
        })
        .then(function (response) {
          console.log(response);
          dispatch(setDisplayAlert(true));
          dispatch(setItemPropAlert("Đăng Nhập Thành Công"));
          navigate('/Home')
          localStorage.setItem("userId", response.data.userId);
          localStorage.setItem("customerName", response.data.userName);
          localStorage.setItem("phone", response.data.phone);
          localStorage.setItem("email", response.data.email);
          setItemErr("");
        })
        .catch(function (error) {
          dispatch(setDisplayAlert(true));
          dispatch(setItemPropAlert("Đăng Nhập Thất Bại"));
          console.log(error);
        });
    }
  }

  return (
    <>
      <div className="row py-5 img-backgrounf">
        <form
          className="col-md-3 css-form"
          method="post"
          onSubmit={hanldeSubmit}
        >
          <div className="row">
            <div className="form-group col-md-12 mb-3">
              <label for="inputname">Email address</label>
              <input
                onChange={hanldeIn}
                type="email"
                className="form-control mt-1"
                name="email"
                placeholder="Email address"
              />
            </div>
            <p style={{ color: "#FF3030" }}>{itemErr["email"]}</p>
            <div className="form-group col-md-12 mb-3">
              <label for="inputemail">Password</label>
              <input
                onChange={hanldeIn}
                type="Password"
                className="form-control mt-1"
                name="pass"
                placeholder="Password"
              />
            </div>
            <p style={{ color: "#FF3030" }}>{itemErr["pass"]}</p>
          </div>
          <div className="row">
            <div className=" mt-2">
              <span className="form-group">
                <input type="checkbox" /> Remember my account
              </span>
              <span className="form-group">
                <Link to="/">Forgot password</Link>
              </span>
            </div>
            <div className="col mt-2">
              <button type="submit" className="btn btn-success btn-lg px-3">
                Login
              </button>
              <Link to="/Register" className="btn btn-lg ">
                <i className="fas fa-user-check" style={{ color: "#59ab6e" }}>
                  {" "}
                  Register
                </i>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col m-auto mt-2">
              <button className="btn btn-other btn-primary px-3 col-md-12">
                Login with google{" "}
                <i className="fa fa-google-plus" style={{ color: "red" }}></i>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col m-auto mt-2">
              <button className="btn btn-other btn-primary px-3 col-md-12">
                Login with facebook{" "}
                <i className="fa fa-google-plus" style={{ color: "red" }}></i>
              </button>
            </div>
          </div>
        </form>
        <div className="col-md-6 img-login">
          <div
            id="template-mo-zay-hero-carousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-bs-target="#template-mo-zay-hero-carousel"
                data-bs-slide-to="0"
                className=""
              ></li>
              <li
                data-bs-target="#template-mo-zay-hero-carousel"
                data-bs-slide-to="1"
                className="active"
              ></li>
              <li
                data-bs-target="#template-mo-zay-hero-carousel"
                data-bs-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner" style={{ backgroundColor: "#fff" }}>
              <div className="carousel-item">
                <div className="container">
                  <div className="row p-5">
                    <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                      <img
                        className="img-fluid"
                        alt="img"
                        src="https://www.viettablet.com/images/companies/1/0-hinh-moi/tin-tuc/2022/thang-8/26/iphone-14-pro-max-2022.jpg?1661508906414"
                      />
                    </div>
                    <div className="col-lg-6 mb-0 d-flex align-items-center">
                      <div className="text-align-left align-self-center">
                        <h1 className="h1 text-success">Alo Phone</h1>
                        <h3 className="h2">
                          Lấy khoa học và công nghệ làm động lực và phát triển
                          bằng chất lượng
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item active">
                <div className="container">
                  <div className="row p-5">
                    <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                      <img
                        className="img-fluid"
                        alt="img"
                        src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/c/o/combo_product_-_reno8_5g_-_black.png"
                      />
                    </div>
                    <div className="col-lg-6 mb-0 d-flex align-items-center">
                      <div className="text-align-left">
                        <h1 className="h1 text-success">OPPO Reno8 Z 5G</h1>
                        <h3 className="h2">
                          Ấn tượng với diện mạo thời trang và màn hình chất
                          lượng
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row p-5">
                    <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                      <img
                        className="img-fluid"
                        alt="img"
                        src="https://tmmobile.vn/wp-content/uploads/2022/06/kha-nang-chup-hinh-samsung-galaxy-s22-ultra-128gb-denjpg.jpg"
                      />
                    </div>
                    <div className="col-lg-6 mb-0 d-flex align-items-center">
                      <div className="text-align-left">
                        <h1 className="h1 text-success">Galaxy S22 Ultra 5G</h1>
                        <h3 className="h2">
                          chiếc smartphone cao cấp nhất trong bộ 3 Galaxy S22
                          series
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev text-decoration-none w-auto ps-3"
              href="#template-mo-zay-hero-carousel"
              role="button"
              data-bs-slide="prev"
            >
              <i className="fas fa-chevron-left"></i>
            </a>
            <a
              className="carousel-control-next text-decoration-none w-auto pe-3"
              href="#template-mo-zay-hero-carousel"
              role="button"
              data-bs-slide="next"
            >
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
