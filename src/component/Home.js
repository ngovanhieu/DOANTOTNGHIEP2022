// import { useState } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Rate from "./Rate";

function Home() {

 
    return (
        <>
            <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" className=""></li>
                    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1" className="active"></li>
                    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid" alt="img" src="https://www.viettablet.com/images/companies/1/0-hinh-moi/tin-tuc/2022/thang-8/26/iphone-14-pro-max-2022.jpg?1661508906414" />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left align-self-center">
                                        <h1 className="h1 text-success"><b>Alo...</b> Phone</h1>
                                        <h3 className="h2">Lấy khoa học và công nghệ làm động lực và phát triển bằng chất lượng</h3>
                                        <p>
                                            Chúng tôi cam kết mang đến những sản phẩm chính hãng chất lượng, giá cả hợp lý và chính sách hậu mãi tuyệt vời nhất.
                                            Cùng với đó là đội ngũ nhân viên trẻ,
                                            chuyên môn cao, hỗ trợ tận tâm, chắc chắn sẽ mang đến cho các bạn trải nghiệm mua hàng có 1-0-2 Tại:
                                            <a rel="sponsored" className="text-success" href="https://templatemo.com"> AloPhone </a> website.
                                            <br />
                                            Alo Phone hiện đang là đối tác của các thương hiệu Digital & Audio hàng đầu thế giới như
                                            <a rel="sponsored" className="text-success" href="https://stories.freepik.com/"> Apple </a>,
                                            <a rel="sponsored" className="text-success" href="https://unsplash.com/"> Samsung </a> and
                                            <a rel="sponsored" className="text-success" href="https://icons8.com/"> Oppo</a>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid" alt="img" src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/c/o/combo_product_-_reno8_5g_-_black.png" />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left">
                                        <h1 className="h1">OPPO Reno8 Z 5G</h1>
                                        <h3 className="h2">Ấn tượng với diện mạo thời trang và màn hình chất lượng</h3>
                                        <p>
                                            đã được giới thiệu tại thị trường Việt Nam vào tháng 8/2022.
                                            Cảm nhận đầu tiên của mình khi trên tay chiếc<strong > OPPO Reno8 Z 5G </strong>  là máy có thiết kế rất đẹp, từ màu sắc cho đến cách tạo hình đều làm mình hài lòng.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid" alt="img" src="https://tmmobile.vn/wp-content/uploads/2022/06/kha-nang-chup-hinh-samsung-galaxy-s22-ultra-128gb-denjpg.jpg" />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left">
                                        <h1 className="h1">Galaxy S22 Ultra 5G</h1>
                                        <h3 className="h2">chiếc smartphone cao cấp nhất trong bộ 3 Galaxy S22 series</h3>
                                        <p>
                                            Sở hữu một diện mạo đầy nổi bật.
                                            Galaxy S22 Ultra 5G được kế thừa form thiết kế từ những dòng Note trước đây của hãng đem đến cho bạn có cảm giác vừa mới lạ vừa hoài niệm.
                                            Trọng lượng của máy 228 g cho cảm giác cầm nắm đầm tay, khi cầm máy trần thì hơi có cảm giác dễ trượt.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
                    <i className="fas fa-chevron-left"></i>
                </a>
                <a className="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
                    <i className="fas fa-chevron-right"></i>
                </a>
            </div>
            <section className="container py-5">
                <div className="row text-center pt-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Categories of The Month</h1>
                        <p>
                            Thị trường là tiêu chuẩn duy nhất để kiểm tra chất lượng
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <a href="google.com">
                            <img alt="img" style={{ maxWidth: "100%", borderRadius: "50%", backgroundColor: "#ccc" }} src="https://image.anhducdigital.vn/apple/iphone/iphone-14-pro-pro-max/iphone-14-pro-max/iphone-14-pro-max-10-500x500.jpg" />
                        </a>
                        <h5 className="text-center mt-3 mb-3">iPhone 14 Pro Max </h5>
                        <p className="text-center">
                            <Link to="/Shop" className="btn btn-success">Go shop</Link>
                        </p>
                    </div>
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <a href="google.com">
                            <img alt="img" style={{ maxWidth: "100%", borderRadius: "50%", backgroundColor: "#ccc" }} src="https://image.anhducdigital.vn/di-dong/dien-thoai/samsung/samsung-galaxy-z/samsung-galaxy-z-flip4/samsung-galaxy-z-flip4-11-500x500.jpg" className="rounded-circle img-fluid border" /></a>
                        <h2 className="h5 text-center mt-3 mb-3">Galaxy Z Flip4</h2>
                        <p className="text-center">
                            <Link to="/Shop" className="btn btn-success">Go shop</Link>
                        </p>

                    </div>
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <a href="google.com">
                            <img alt="img" style={{ maxWidth: "100%", borderRadius: "50%", backgroundColor: "#ccc" }} src="https://image.anhducdigital.vn/apple/iphone/iphone-14/iphone-14-31-500x500.jpg" className="rounded-circle img-fluid border" /></a>
                        <h2 className="h5 text-center mt-3 mb-3">iPhone 14 | 512GB | Purple</h2>
                        <p className="text-center">
                            <Link to="/Shop" className="btn btn-success">Go shop</Link>
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-light">
                <div className="container py-5">
                    <div className="row text-center py-3">
                        <div className="col-lg-6 m-auto">
                            <h1 className="h1">Featured Product</h1>
                            <p>
                                Người tốt tạo ra chất lượng tốt, và chất lượng tốt tạo ra sản phẩm tốt.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-100">
                                <a href="0">
                                    <img src="https://image.anhducdigital.vn/apple/iphone/iphone-13/iphone-13-02-500x500.jpg" className="card-img-top" alt="..." />
                                </a>
                                <div className="card-body">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        <li>
                                            {<Rate />}

                                        </li>
                                        <li className="text-muted text-right">18.990.000 vnđ</li>
                                    </ul>
                                    <a href="shop-single.html" className="h2 text-decoration-none text-dark">iPhone 13 | 128GB | Pink</a>
                                    <p className="card-text">
                                        Apple vừa chính thức giới thiệu đến người dùng dòng iPhone 13 mới với hàng loạt tính năng được cải thiện, bổ sung.
                                        Tốc độ mạng 5G siêu tốc, chip xử lý A15 Bionic mạnh mẽ, cụm camera được cải tiến, tất cả đều có mặt trên iPhone 13 năm nay.
                                    </p>
                                    <p className="text-muted">Reviews (24)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-100">
                                <a href="0">
                                    <img src="https://image.anhducdigital.vn/di-dong/dien-thoai/samsung/samsung-galaxy-z-fold4/samsung-galaxy-z-fold4-03-500x500.jpg" className="card-img-top" alt="..." />
                                </a>
                                <div className="card-body">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        <li>
                                            {<Rate />}
                                        </li>
                                        <li className="text-muted text-right">49.990.000 vnđ</li>
                                    </ul>
                                    <a href="shop-single.html" className="h2 text-decoration-none text-dark">Samsung Galaxy Z Fold4</a>
                                    <p className="card-text">
                                        Samsung Galaxy Z Fold4 vẫn sở hữu màn hình ngoài có kích thước 6.2 inch cùng thiết kế Infinity-O tràn viền, sử dụng tấm nền Dynamic AMOLED 2X, độ phân giải HD+ (2316x904 pixel) và có tần số quét linh hoạt 48-120Hz, cho trải nghiệm chạm vuốt mượt mà hơn tùy theo nội dung hiển thị.
                                        Ngoài ra, do có sự thay đổi về kích thước máy nên tỷ lệ màn hình cũng thay đổi thành 23.1:9.
                                    </p>
                                    <p className="text-muted">Reviews (48)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-100">
                                <a href="0">
                                    <img src="https://image.anhducdigital.vn/di-dong/may-tinh/microsoft-surface/surface-duo-2/surface-duo-2-4-500x500.jpg" className="card-img-top" alt="..." />
                                </a>
                                <div className="card-body">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        <li>
                                            {<Rate />}
                                        </li>
                                        <li className="text-muted text-right">36.000.000 vnđ</li>
                                    </ul>
                                    <a href="shop-single.html" className="h2 text-decoration-none text-dark">Surface Duo 2</a>
                                    <p className="card-text">
                                        Surface Duo 2 không có quá nhiều sự thay đổi về thiết kế so với bản tiền nhiệm Surface Duo.
                                        Máy vẫn được trang bị một bản lề để kết nối hai màn hình, cho phép mở ra và gập lại 360 độ.
                                        <br />
                                        Microsoft đã thiết kế một đường cong nhẹ ở phần bản lề để lúc gập thiết bị người dùng vẫn có thể xem nhanh ngày giờ và các thông báo bị bỏ lỡ.
                                    </p>
                                    <p className="text-muted">Reviews (74)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;
