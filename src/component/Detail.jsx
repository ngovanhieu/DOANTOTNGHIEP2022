import { useEffect, useState } from "react";
import axios from "axios";

import Slider from "react-slick";
import { useLocation, useNavigate } from "react-router-dom";
import { Spinner } from "./spinner";
export const Detail = () => {
  const [data, setData] = useState([]);
  const [dataBrand, setDataBrand] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const id = location.pathname.split("detail/")[1];
  const navigate = useNavigate();

  const moveToDetail = (item) => {
    navigate(`/detail/${item._id}`);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  useEffect(() => {
    fetchData();
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, [location]);

  const fetchData = async () => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/phone/${id}`)
      .then(function (response) {
        // handle success
        setData(response.data);
        axios
          .get(`http://localhost:5000/phone/search/?q=${response.data.productBrand}`)
          .then(function (response) {
            setDataBrand(response.data);
            setLoading(false);
            console.log(response);
          })
          .catch(function (error) {
            setLoading(false);
            console.log(error);

          });
      })
      .catch(function (error) {
        // handle error
        setLoading(false);
      });
  };
  return (
    <>
      <section className="bg-light">
        <div className="container pb-5">
          <div className="row">
            <div className="col-lg-5 mt-5">
              <div className="card mb-3">
                <img
                  className="card-img img-fluid"
                  src={data?.images}
                  alt="Card image cap"
                  id="product-detail"
                />
              </div>
            </div>
            <div className="col-lg-7 mt-5 ">
              <div className="card">
                <div className="card-body">
                  <h1 className="h2">Sản Phẩm: {data?.productName}</h1>
                  <p className="h3 py-2">Giá: {data?.price} vnđ</p>
                  <p className="py-2">
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-secondary"></i>
                    <span className="list-inline-item text-dark">
                      Rating 4.8 | 36 Comments
                    </span>
                  </p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <h6>Brand: {data?.productBrand}</h6>
                    </li>
                  </ul>
                  <h6>Description:</h6>
                  <p>{data?.type}</p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <h6>Avaliable Color :</h6>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted">
                        <strong>White / Black / Blues</strong>
                      </p>
                    </li>
                  </ul>

                  <h6>Cấu hình :</h6>
                  <ul className="list-unstyled pb-3">
                    <li>Chip: {data?.chip}</li>
                    <li>ram: {data?.ram}</li>
                    <li>bộ nhớ: {data?.memory}</li>
                    <li>discount: {data?.discount} %</li>
                  </ul>

                  <form action="" method="GET">
                    <input
                      type="hidden"
                      name="product-title"
                      value="Activewear"
                    />
                    <div className="row">
                      <div className="col-auto">
                        <ul className="list-inline pb-3">
                          <li className="list-inline-item">
                            <input
                              type="hidden"
                              name="product-size"
                              id="product-size"
                              value="S"
                            />
                          </li>
                          
                        </ul>
                      </div>
                      <div className="col-auto">
                        <ul className="list-inline pb-3">
                          <li className="list-inline-item text-right">
                            Quantity
                            <input
                              type="hidden"
                              name="product-quanity"
                              id="product-quanity"
                              value="1"
                            />
                          </li>
                          <li className="list-inline-item">
                            <span className="btn btn-success" id="btn-minus">
                              -
                            </span>
                          </li>
                          <li className="list-inline-item">
                            <span className="badge bg-secondary" id="var-value">
                              1
                            </span>
                          </li>
                          <li className="list-inline-item">
                            <span className="btn btn-success" id="btn-plus">
                              +
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row pb-3">
                      <div className="col d-grid">
                        <button
                          type="submit"
                          className="btn btn-success btn-lg"
                          name="submit"
                          value="buy"
                        >
                          Buy
                        </button>
                      </div>
                      <div className="col d-grid">
                        <button
                          type="submit"
                          className="btn btn-success btn-lg"
                          name="submit"
                          value="addtocard"
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row text-left p-2 pb-3">
            <h4>Related Products</h4>
          </div>
          {loading ? (
            <Spinner />
          ) : (
            <div id="carousel-related-product">
              <Slider {...settings}>
                {dataBrand?.map((item, index) => (
                  <div className="col-md-4 cardShop" key={index}>
                    <div
                      className="card mb-4 product-wap rounded-0 mx-4"
                      onClick={(e) => moveToDetail(item)}
                    >
                      <div className="card rounded-0">
                        <div
                          className="card-imgage"
                          style={{ backgroundImage: `url(${item?.images})` }}
                        ></div>
                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                          <ul className="list-unstyled">
                            <li>
                              <a
                                className="btn btn-success text-white"
                                href="shop-single.html"
                              >
                                <i className="far fa-heart"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                className="btn btn-success text-white mt-2"
                                onClick={(e) => moveToDetail(item)}
                              >
                                <i className="far fa-eye"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                className="btn btn-success text-white mt-2"
                                href="shop-single.html"
                              >
                                <i className="fas fa-cart-plus"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body">
                        <a
                          href="shop-single.html"
                          className="h3 text-decoration-none"
                        >
                          {item?.productName}
                        </a>
                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                          <li> Hãng: {item?.productBrand}</li>
                          <li className="pt-2">
                            <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                          </li>
                        </ul>
                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                          <li>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-muted fa fa-star"></i>
                            <i className="text-muted fa fa-star"></i>
                          </li>
                        </ul>
                        <p className="text-center mb-0">
                          {" "}
                          Giá: {item?.price}VND
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
