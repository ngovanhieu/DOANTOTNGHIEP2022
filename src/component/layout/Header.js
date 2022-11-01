import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    // const [checkLogin, setCheckLogin] = useState();
    const navigate = useNavigate()

    function renderLogin() {
        let checkLogin = localStorage.getItem("checkLogin")
        if (!checkLogin) {
            return (
                <>
                    <Link to={"/Login"} className="nav-icon position-relative text-decoration-none">
                        <i className="fas fa-user-check text-dark mr-3"> Login</i>
                    </Link>
                </>
            )
        } else {
            return (
                <>
                    <a className="nav-icon position-relative text-decoration-none" href="google.com">
                        <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                        <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span>
                    </a>
                    <Link onClick={clickLogout} to="/Login" className="nav-icon position-relative text-decoration-none" style={{ color: "red" }}>
                        <i className="fas fa-user-check text-dark mr-3" style={{ color: "red" }}></i> Logout
                    </Link>
                </>
            )
        }
    }
    function clickLogout(e) {
        localStorage.removeItem("checkLogin")
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
                <div className="container text-light">
                    <div className="w-100 d-flex justify-content-between">
                        <div>
                            <i className="fa fa-envelope mx-2"></i>
                            <a className="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">hieungo30092703@gmail.com</a>
                            <i className="fa fa-phone mx-2"></i>
                            <a className="navbar-sm-brand text-light text-decoration-none" href="tel:010-020-0340">078-731-4023</a>
                        </div>
                        <div>
                            <a className="text-light" href="https://www.facebook.com/nhom.b.muoi/" rel="sponsored"><i className="fab fa-facebook-f fa-sm fa-fw me-2"></i></a>
                            <a className="text-light" href="https://www.instagram.com/__ngvahiu.3009/"><i className="fab fa-instagram fa-sm fa-fw me-2"></i></a>
                            <a className="text-light" href="https://twitter.com/"><i className="fab fa-twitter fa-sm fa-fw me-2"></i></a>
                            <a className="text-light" href="https://www.linkedin.com/"><i className="fab fa-linkedin fa-sm fa-fw"></i></a>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container d-flex justify-content-between align-items-center">

                    <a className="navbar-brand text-success logo h1 align-self-center" href="index.html">
                        <img alt="" href="http://localhost:3000/Shop" src="https://f7-zpcloud.zdn.vn/8694324151068249830/09111a48751eb340ea0f.jpg" ></img>
                    </a>

                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                        <div className="flex-fill">
                            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                                <li className="nav-item">
                                    <Link to="/Home" className="nav-link">Home</Link>
                                    {/* <a className="nav-link" href="index.html">Home</a> */}
                                </li>
                                <li className="nav-item">
                                    <Link to="/About" className="nav-link">About</Link>
                                    {/* <a className="nav-link" href="about.html">About</a> */}
                                </li>
                                <li className="nav-item">
                                    <Link to="/Shop" className="nav-link">Shop</Link>
                                    {/* <a className="nav-link" href="shop.html">Shop</a> */}
                                </li>
                                <li className="nav-item">
                                    <Link to="/Contact" className="nav-link">Contact</Link>
                                    {/* <a className="nav-link" href="contact.html">Contact</a> */}
                                </li>
                            </ul>
                        </div>
                        <div className="navbar align-self-center d-flex">
                            <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                                <div className="input-group">
                                    <input type="text" className="form-control" id="inputMobileSearch" placeholder="Search ..." />
                                    <div className="input-group-text">
                                        <i className="fa fa-fw fa-search"></i>
                                    </div>
                                </div>
                            </div>
                            <a className="nav-icon d-none d-lg-inline" href="google.com" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                                <i className="fa fa-fw fa-search text-dark mr-2"></i>
                            </a>
                            {renderLogin()}
                        </div>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Header;