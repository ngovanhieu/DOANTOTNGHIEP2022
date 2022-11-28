import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";
import { useDispatch } from "react-redux";
import { setDisplayAlert, setItemPropAlert } from "../../redux";

export const Shop = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [defaultTotalData, setDefaultTotalData] = useState([]);
  const [defaultData, setDefaultData] = useState([]);
  const [dataSearch, setDataSearch] = useState("");
  const userId = localStorage.getItem("userId");
  const cusstomerName = localStorage.getItem("customerName");
  const phone = localStorage.getItem("phone");
  const dispatch = useDispatch()
  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    axios
      .get(`http://localhost:5000/api/Products?page=${page}`)
      .then(function (response) {
        // handle success
        setTotalPage(response.data.total);
        setData(response.data.Product);
        setDefaultData(response.data.Product);
        setDefaultTotalData(response.data.totalProduct);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const addProductToCart = async (item) => {
    if(cusstomerName){

    axios
      .post(`http://localhost:5000/api/addOrder`, {
        userId: userId,
        customerName: cusstomerName,
        phone: phone,
        image: item.images,
        price: item.price,
        Brand: item.productName,
        Color: item.price,
        Amount: 1,
        Total: item.price,
      })
      .then(function (response) {
        dispatch(setDisplayAlert(true))
        dispatch(setItemPropAlert("Thêm giỏ hàng thành công"))
        console.log(response);
      })
      .catch(function (error) {
        dispatch(setDisplayAlert(true))
        dispatch(setItemPropAlert("Thêm giỏ hàng thất bại"))
        // handle error
        console.log(error);
      });
    }else{
      dispatch(setDisplayAlert(true))
      dispatch(setItemPropAlert("Đăng nhập để tiếp tục!"))
    }

  };

  const moveToDetail = (item) => {
    navigate(`/detail/${item._id}`);
  };
  const findBrand = (brand) => {
    if (brand === "All") {
      setData(defaultData);
    } else {
      setData(
        defaultTotalData?.filter((item) =>
          item?.productName?.toLowerCase()?.includes(brand?.toLowerCase())
        )
      );
    }
  };

  let items = [];
  for (let number = 1; number <= totalPage; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === page}
        onClick={() => setPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  const handleSearch = (e) => {
    if (e.key === "Enter" && dataSearch !== "") {
      findBrand(dataSearch);
    }
  };


  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="h2 pb-4">Brand </h1>
            <ul className="list-unstyled templatemo-accordion">
              <li
                className="collapsed p-3 d-flex justify-content-between h3 text-decoration-none"
                onClick={(e) => findBrand("All")}
              >
                All
              </li>
              <li
                className="collapsed p-3 d-flex justify-content-between h3 text-decoration-none"
                onClick={(e) => findBrand("Iphone")}
              >
                Iphone
              </li>
              <li
                className="collapsed p-3 d-flex justify-content-between h3 text-decoration-none"
                onClick={(e) => findBrand("Samsung")}
              >
                Samsung
              </li>
              <li
                className="collapsed p-3 d-flex justify-content-between h3 text-decoration-none"
                onClick={(e) => findBrand("Oppo")}
              >
                Oppo
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
                    <a className="h3 text-dark text-decoration-none mr-3">|</a>
                  </li>
                  <li className="list-inline-item">
                    <a className="h3 text-dark text-decoration-none">Shop</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 pb-4">
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập Sản Phẩm Tìm Kiếm"
                    value={dataSearch}
                    onChange={(e) => setDataSearch(e.target.value)}
                    onKeyDown={(e) => handleSearch(e)}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              {data?.length === 0 && <h3>Không có sản phẩm</h3>}
              {data?.map((item, index) => (
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
                            <div className="btn btn-success text-white" >
                              <i className="far fa-heart"></i>
                            </div>
                          </li>
                          <li>
                            <div
                              className="btn btn-success text-white mt-2"
                              onClick={(e) => moveToDetail(item)}
                            >
                              <i className="far fa-eye"></i>
                            </div>
                          </li>
                          <li>
                            <div
                              className="btn btn-success text-white mt-2"
                              onClick={(e) => {
                                e.stopPropagation()
                                addProductToCart(item);
                              }}
                            >
                              <i className="fas fa-cart-plus"></i>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      <p className="h3 text-decoration-none productName">
                        {item?.productName}
                      </p>
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
                {data?.length !== 0 && <Pagination>{items}</Pagination>}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
