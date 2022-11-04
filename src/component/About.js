function About() {
    return (
        <>
            <section className="bg-success py-5">
                <div className="container">
                    <div className="row align-items-center py-5">
                        <div className="col-md-8 text-white">
                            <h1>ALo Shop có gì ? 👀</h1>
                            <p>
                            luôn hoạt động dựa trên tôn chỉ đặt khách hàng là trung tâm, mọi nỗ lực để đạt được mục tiêu cao nhất là làm hài lòng người dùng thông qua các sản phẩm được cung cấp và dịch vụ khách hàng. Hoàng Hà Mobile đang từng bước xây dựng dịch vụ khách hàng vượt trội, 
                            xứng đáng là đơn vị bán lẻ hàng đầu tại Việt Nam. Sự tin tưởng và ủng hộ nhiệt tình của quý khách hàng tại chuỗi chi nhánh đã phần nào khẳng định hiệu quả hoạt động của đội ngũ nhân viên Alo Shop.
                            </p>
                        </div>
                        <div className="col-md-4">
                            {/* <img className="about hero" src="./fe/assets/img/pngwing.com.png" alt="About Hero" />' */}
                            <h1 className="col-md-16 text-white">iPhone 12 | 128GB | Green (Chính hãng)</h1>
                            <img  className="img-fluid" src="./fe/assets/img/pngwing.com.png" />
                        </div>
                    </div>
                </div>
            </section>
            {/*  */}
            <section className="container py-5">
                <div className="row text-center pt-5 pb-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Our Services</h1>
                        <p>
                        “Chúng tôi luôn coi khách hàng là khách mời tham dự một bữa tiệc mà chúng tôi là chủ nhà. 
                        Mỗi ngày chúng tôi làm việc để mọi khía cạnh quan trọng của trải nghiệm khách hàng tốt hơn một chút”
                        </p>
                    </div>
                </div>
                <div className="row">

                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 services-icon-wap shadow">
                            <div className="h1 text-success text-center"><i className="fa fa-truck fa-lg"></i></div>
                            <h2 className="h5 mt-4 text-center">Delivery Services</h2>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 services-icon-wap shadow">
                            <div className="h1 text-success text-center"><i className="fas fa-exchange-alt"></i></div>
                            <h2 className="h5 mt-4 text-center">Shipping &amp; Return</h2>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 services-icon-wap shadow">
                            <div className="h1 text-success text-center"><i className="fa fa-percent"></i></div>
                            <h2 className="h5 mt-4 text-center">Promotion</h2>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 services-icon-wap shadow">
                            <div className="h1 text-success text-center"><i className="fa fa-user"></i></div>
                            <h2 className="h5 mt-4 text-center">24 Hours Service</h2>
                        </div>
                    </div>
                </div>
            </section>
            {/*  */}
            <section className="bg-light py-5">
                <div className="container my-4">
                    <div className="row text-center py-3">
                        <div className="col-lg-6 m-auto">
                            <h1 className="h1">Our Brands</h1>
                            <p>
                            “Chúng tôi nghĩ khách hàng của chúng tôi là người, không phải cái ví”
                            </p>
                        </div>
                        <div className="col-lg-9 m-auto tempaltemo-carousel">
                            <div className="row d-flex flex-row">
                                <div className="col">
                                    <div className="carousel slide carousel-multi-item pt-2 pt-md-0" id="templatemo-slide-brand" data-bs-ride="carousel">
                                        <div className="carousel-inner product-links-wap" role="listbox">
                                            <div className="carousel-item active">
                                                <div className="row">
                                                    <div className="col-3 p-md-5">
                                                        <a href="google.com"><img className="img-fluid brand-img" src="./apple.png" alt="img" /></a>
                                                    </div>
                                                    <div className="col-3 p-md-5">
                                                        <a href="google.com"><img className="img-fluid brand-img" src="./samsung.png" alt="img" /></a>
                                                    </div>
                                                    <div className="col-3 p-md-5">
                                                        <a href="google.com"><img className="img-fluid brand-img" src="./microsoft.png" alt="img" /></a>
                                                    </div>
                                                    <div className="col-3 p-md-5">
                                                        <a href="google.com"><img className="img-fluid brand-img" src="./oppo.png" alt="img" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;