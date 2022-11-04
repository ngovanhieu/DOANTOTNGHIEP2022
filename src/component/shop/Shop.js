import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from 'react-bootstrap/Pagination';

export const Shop = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    axios
      .get(`http://localhost:5000/phone?page=${page}`)
      .then(function (response) {
        // handle success
        setTotalPage(response.data.total)
        setData(response.data.Product);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const moveToDetail = (item) => {
    navigate(`/detail/${item._id}`);
  };


  let items = [];
  for (let number = 1; number <= totalPage; number++) {
    items.push(
      <Pagination.Item key={number} active={number === page} onClick={() => setPage(number)}>
        {number}
      </Pagination.Item>,
    );
  }
  useEffect(() => {
    axios.get("http://localhost:3000/Shop")
      .then((res) => {
        console.log(res)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="h2 pb-4">Categories</h1>
            <ul className="list-unstyled templatemo-accordion">
              <li className="">
                <a className="collapsed p-3 d-flex justify-content-between h3 text-decoration-none">
                  Iphone
                </a>
              </li>
              <li className="">
                <a className="collapsed p-3 d-flex justify-content-between h3 text-decoration-none">
                  Samsung
                </a>
              </li>
              <li className="">
                <a className="collapsed p-3 d-flex justify-content-between h3 text-decoration-none">
                  Product
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-9">
            <div className="row">
              <div className="col-md-6">
                <ul className="list-inline shop-top-menu pb-3 pt-1">
                  <li className="list-inline-item">
                    <a className="h3 text-dark text-decoration-none mr-3">
                      ALOPHONE
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="h3 text-dark text-decoration-none mr-3">
                      |
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="h3 text-dark text-decoration-none">Shop</a>
                  </li>

                </ul>
              </div>
              <div className="col-md-6 pb-4">
                <div className="d-flex">

                  <input type="text" className="form-control" placeholder="Nhập Sản Phẩm Tìm Kiếm" />

                </div>
              </div>
            </div>
            <div className="row">
              {data.map((item, index) => (
                <div
                  className="col-md-3 cardShop"
                  key={index}
                  onClick={(e) => moveToDetail(item)}
                >
                  <div className="card mb-4 product-wap rounded-0">
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
                              href="shop-single.html"
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
                        <li>hãng: {item?.productBrand}</li>
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
                      <p className="text-center mb-0"> Giá: {item?.price}VND</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div div="row">
              <ul className="pagination pagination-lg justify-content-end">
                <Pagination>{items}</Pagination>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
