function Footer() {
    return (
        <>
            <footer className="bg-dark" id="tempaltemo_footer">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4 pt-5">
                            <h2 className="h2 text-success border-bottom pb-3 border-light ">Alo-phone</h2>
                            <ul className="list-unstyled text-light footer-link-list">
                                <li>
                                    <i className="fas fa-map-marker-alt fa-fw"></i>
                                    03 Quang Trung street, DaNang city.
                                </li>
                                <li>
                                    <i className="fa fa-phone fa-fw"></i>
                                    <a className="text-decoration-none" href="tel:078-731-4023">078-731-4023</a>
                                </li>
                                <li>
                                    <i className="fa fa-envelope fa-fw"></i>
                                    <a className="text-decoration-none" href="mailto:info@company.com">hieungo30092703@gmail.com</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4 pt-5">
                            <h2 className="h2 text-light border-bottom pb-3 border-light">Thông tin tài khoản </h2>
                            <ul className="list-unstyled text-light footer-link-list">
                                <li><a className="text-decoration-none" href="google.com">Giới thiệu</a></li>
                                <li><a className="text-decoration-none" href="google.com">Liên hệ</a></li>
                                <li><a className="text-decoration-none" href="google.com">Tuyển dụng</a></li>
                                <li><a className="text-decoration-none" href="google.com">Bản Đồ</a></li>
                                <li><a className="text-decoration-none" href="google.com">Chính sách bảo mật thông tin</a></li>
                                <li><a className="text-decoration-none" href="google.com">Tin tức công nghệ</a></li>
                                <li><a className="text-decoration-none" href="google.com">Hỗ trợ khách hàng</a></li>
                            </ul>
                        </div>

                        <div className="col-md-4 pt-5">
                            <h2 className="h2 text-light border-bottom pb-3 border-light">Chi tiết thông tin</h2>
                            <ul className="list-unstyled text-light footer-link-list">
                                <li><a className="text-decoration-none" href="http://localhost:3000/Home">Home</a></li>
                                <li><a className="text-decoration-none" href="http://localhost:3000/About">About Us</a></li>
                                <li><a className="text-decoration-none" href="http://localhost:3000/Shop">Shop Locations</a></li>
                                {/* <li><a className="text-decoration-none" href="google.com">FAQs</a></li> */}
                                <li><a className="text-decoration-none" href="http://localhost:3000/Contact">Contact</a></li>
                            </ul>
                        </div>

                    </div>

                    <div className="row text-light mb-4">
                        <div className="col-12 mb-3">
                            <div className="w-100 my-3 border-top border-light"></div>
                        </div>
                        <div className="col-auto me-auto">
                            <ul className="list-inline text-left footer-icons">
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <a className="text-light text-decoration-none" href="https://www.facebook.com/nhom.b.muoi/"><i className="fab fa-facebook-f fa-lg fa-fw"></i></a>
                                </li>
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <a className="text-light text-decoration-none" href="https://www.instagram.com/__ngvahiu.3009/"><i className="fab fa-instagram fa-lg fa-fw"></i></a>
                                </li>
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <a className="text-light text-decoration-none" href="https://twitter.com/"><i className="fab fa-twitter fa-lg fa-fw"></i></a>
                                </li>
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <a className="text-light text-decoration-none" href="https://www.linkedin.com/"><i className="fab fa-linkedin fa-lg fa-fw"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-auto">
                            <label className="sr-only" for="subscribeEmail">Email address</label>
                            <div className="input-group mb-2">
                                <input type="text" className="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address" />
                                <div className="input-group-text btn-success text-light">Subscribe</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-100 bg-black py-3">
                    <div className="container">
                        <div className="row pt-2">
                            <div className="col-12">
                                <p className="text-left text-light">
                                    Copyright © 2022 Company Phone
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer;