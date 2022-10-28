// import { useState } from "react";
import StarRatings from "react-star-ratings";

function Home() {
    // const rate = 3.7


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
                                        <h1 className="h1 text-success"><b>Zay</b> eCommerce</h1>
                                        <h3 className="h2">Tiny and Perfect eCommerce Template</h3>
                                        <p>
                                            Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1).
                                            This template is 100% free provided by
                                            <a rel="sponsored" className="text-success" href="https://templatemo.com">TemplateMo</a> website.
                                            Image credits go to
                                            <a rel="sponsored" className="text-success" href="https://stories.freepik.com/">Freepik Stories</a>,
                                            <a rel="sponsored" className="text-success" href="https://unsplash.com/">Unsplash</a> and
                                            <a rel="sponsored" className="text-success" href="https://icons8.com/">Icons 8</a>.
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
                                        <h1 className="h1">Proident occaecat</h1>
                                        <h3 className="h2">Aliquip ex ea commodo consequat</h3>
                                        <p>
                                            You are permitted to use this Zay CSS template for your commercial websites.
                                            You are <strong>not permitted</strong> to re-distribute the template ZIP file in any kind of template collection websites.
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
                                        <h1 className="h1">Repr in voluptate</h1>
                                        <h3 className="h2">Ullamco laboris nisi ut </h3>
                                        <p>
                                            We bring you 100% free CSS templates for your websites.
                                            If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.
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
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <a href="google.com">
                            <img alt="img" style={{ maxWidth: "100%", borderRadius: "50%", backgroundColor: "#ccc" }} src="https://cdn.tgdd.vn/Products/Images/7264/199553/edifice-casio-ef-539d-1avudf-bac-1-2-org.jpg" />
                        </a>
                        <h5 className="text-center mt-3 mb-3">Watches</h5>
                        <p className="text-center">
                            <a href="google.com" className="btn btn-success">Go Shop</a>
                        </p>
                    </div>
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <a href="google.com">
                            <img alt="img" style={{ maxWidth: "100%", borderRadius: "50%", backgroundColor: "#ccc" }} src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/229e884b9d1f41f082d9ab6f0123689a_9366/Giay_bong_dja_Predator_Mutator_20.3_Turf_trang_FW9220_01_standard.jpg" className="rounded-circle img-fluid border" /></a>
                        <h2 className="h5 text-center mt-3 mb-3">Shoes</h2>
                        <p className="text-center"><a href="google.com" className="btn btn-success">Go Shop</a></p>
                    </div>
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <a href="google.com">
                            <img alt="img" style={{ maxWidth: "100%", borderRadius: "50%", backgroundColor: "#ccc" }} src="https://cf.shopee.vn/file/e6592797553ee7d8fbf8ab1470ecc482" className="rounded-circle img-fluid border" /></a>
                        <h2 className="h5 text-center mt-3 mb-3">Accessories</h2>
                        <p className="text-center"><a href="google.com" className="btn btn-success">Go Shop</a></p>
                    </div>
                </div>
            </section>
            <section className="bg-light">
                <div className="container py-5">
                    <div className="row text-center py-3">
                        <div className="col-lg-6 m-auto">
                            <h1 className="h1">Featured Product</h1>
                            <p>
                                Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-100">
                                <a href="0">
                                    <img src="https://www.micromark.com/Web%20Store%20Images/90673_R-01.jpg" className="card-img-top" alt="..." />
                                </a>
                                <div className="card-body">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        <li>
                                            <StarRatings
                                                className="start-rating"
                                                rating={3.5}
                                                starRatedColor="red"
                                                // changeRating={changeRating}
                                                numberOfStars={5}
                                                name="rate"
                                            >
                                            </StarRatings>

                                        </li>
                                        <li className="text-muted text-right">$240.00</li>
                                    </ul>
                                    <a href="shop-single.html" className="h2 text-decoration-none text-dark">Gym Weight</a>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                                    </p>
                                    <p className="text-muted">Reviews (24)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-100">
                                <a href="0">
                                    <img src="https://cf.shopee.com.my/file/906f68a4d04b3cf712af440446ffcd2e" className="card-img-top" alt="..." />
                                </a>
                                <div className="card-body">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        <li>
                                            <StarRatings
                                                className="start-rating"
                                                rating={4.6}
                                                starRatedColor="red"
                                                // changeRating={changeRating}
                                                numberOfStars={5}
                                                name="rate"
                                            >
                                            </StarRatings>
                                        </li>
                                        <li className="text-muted text-right">$480.00</li>
                                    </ul>
                                    <a href="shop-single.html" className="h2 text-decoration-none text-dark">Cloud Nike Shoes</a>
                                    <p className="card-text">
                                        Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.
                                    </p>
                                    <p className="text-muted">Reviews (48)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-100">
                                <a href="0">
                                    <img src="https://media.composition.gallery/glossary/What-is-polaroid-composition1542528544.png" className="card-img-top" alt="..." />
                                </a>
                                <div className="card-body">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        <li>
                                            <StarRatings
                                                className="start-rating"
                                                rating={2.4}
                                                starRatedColor="red"
                                                // changeRating={changeRating}
                                                numberOfStars={5}
                                                name="rate"
                                            >
                                            </StarRatings>
                                        </li>
                                        <li className="text-muted text-right">$360.00</li>
                                    </ul>
                                    <a href="shop-single.html" className="h2 text-decoration-none text-dark">Summer Addides Shoes</a>
                                    <p className="card-text">
                                        Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.
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