import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setDisplayAlert, setItemPropAlert } from "../../redux";

function Cart() {
  const [message, setMessage] = useState("");
  const [checkAlert, setCheckAlert] = useState(false);
  const [data, setData] = useState([]);
  const [checkRemove, setCheckRemove] = useState(false);
  const [quantity, setQuantity] = useState(1);
  let customerName = localStorage.getItem("customerName");
  let phone = localStorage.getItem("phone");
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, [checkRemove]);
  const fetchData = async () => {
    axios
      .get(`http://localhost:5000/api/getOrders`)
      .then(function (response) {
        console.log(response);
        setData(response.data.orders);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const handleQuantity = (check) => {
    if (check === "plus") {
      setQuantity(quantity + 1);
    } else if (quantity === 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };
  const removeOrder = (item) => {
    axios
      .delete(`http://localhost:5000/api/removeOrder/${item._id}`)
      .then(function (response) {
        console.log(response);
        dispatch(setDisplayAlert(true));
        dispatch(setItemPropAlert("Xóa thành công"));
        setCheckRemove(!checkRemove);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        dispatch(setDisplayAlert(true));
        dispatch(setItemPropAlert("Xóa thất bại"));
      });
  };
  return (
    <>
      {checkAlert && (
        <div className="alert">
          <Alert severity="info">{message}aaaa</Alert>
        </div>
      )}
      <div
        className="container py-5"
        style={{ backgroundColor: "#rgb(226, 226, 226)" }}
      >
        <div className="row col-md-12">
          <div className="col-md-12">
            <div className="cart">
              <h1 className="h2 text-center py-2">Cart</h1>
              <table className="col-md-12">
                <thead className="col-md-12">
                  <tr>
                    <td
                      className="col-md-1 text-center"
                      style={{ color: "rgb(105 105 105)", fontWeight: "600" }}
                    >
                      STT
                    </td>
                    <td
                      className="col-md-1 text-center"
                      style={{ color: "rgb(105 105 105)", fontWeight: "600" }}
                    >
                      Image
                    </td>
                    <td
                      className="col-md-2 text-center"
                      style={{ color: "rgb(105 105 105)", fontWeight: "600" }}
                    >
                      Name product
                    </td>
                    <td
                      className="col-md-2 text-center"
                      style={{ color: "rgb(105 105 105)", fontWeight: "600" }}
                    >
                      Price
                    </td>
                    <td
                      className="col-md-3 text-center"
                      style={{ color: "rgb(105 105 105)", fontWeight: "600" }}
                    >
                      Quantum
                    </td>
                    <td
                      className="col-md-2 text-center"
                      style={{ color: "rgb(105 105 105)", fontWeight: "600" }}
                    >
                      Total price
                    </td>
                    <td
                      className="col-md-1 text-center"
                      style={{ color: "rgb(105 105 105)", fontWeight: "600" }}
                    >
                      Other
                    </td>
                  </tr>
                </thead>
                <tbody className="col-md-12 ">
                  {data.length > 0 ? (
                    data?.map((item, index) => (
                      <tr className="my-5" key={index}>
                        <td
                          className="col-md-1"
                          style={{ color: "#379237", fontWeight: "600" }}
                        >
                          <p style={{ textAlign: "center", margin: "auto 0" }}>
                            1
                          </p>
                        </td>
                        <td className="col-md-1">
                          <div className="img-product">
                            <img
                              alt="img"
                              src={item.image}
                              style={{ maxWidth: "100%" }}
                            ></img>
                          </div>
                        </td>
                        <td className="col-md-2">
                          <p
                            style={{
                              textAlign: "center",
                              margin: "auto 0",
                              color: "#379237",
                            }}
                          >
                            {item.Brand}
                          </p>
                        </td>
                        <td className="col-md-2">
                          <p
                            style={{
                              textAlign: " center",
                              margin: "auto 0",
                              color: "#379237",
                            }}
                          >
                            {item.Total}
                            vnđ
                          </p>
                        </td>
                        <td className="col-md-3">
                          <div className="qty row col-md-12">
                            <button onClick={(e) => handleQuantity("minus")}>
                              <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                              {/* <i className="">-</i> */}
                            </button>
                            <input
                              type="text"
                              value={quantity}
                              style={{ color: "#379237" }}
                            />
                            <button onClick={(e) => handleQuantity("plus")}>
                              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                              {/* <i className="">+</i> */}
                            </button>
                          </div>
                        </td>
                        <td className="col-md-2 total-price ">
                          {item.price * item.Amount} vnđ
                        </td>
                        <td className=" col-md-1 other">
                          <button
                            style={{
                              maxWidth: "40%",
                              border: "1.5px solid #BCEAD5",
                              margin: "0 30%",
                            }}
                            onClick={(e) => removeOrder(item)}
                          >
                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td style={{ textAlign: "center" }} colspan="7">
                        Không có sản phẩm
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="row py-3">
              <div className="infor-ship col-md-3">
                <h3>Shipment Details</h3>
                <p>
                  Fullname: <span>{customerName}</span>
                </p>
                <p>
                  Phone number: <span>{phone}</span>
                </p>
              </div>
              <div className="total col-md-9">
                <h3>Total</h3>
                <div className="container" style={{ padding: "8px 0" }}>
                  <div className="row total-qty col-sm-9">
                    <p
                      className="col-sm-4"
                      style={{ textAlign: "right", margin: "auto 0" }}
                    >
                      Total quantum
                    </p>
                    <input type="text" className="col-sm-8 input-total" />
                  </div>
                  <div className="row total-price col-sm-9">
                    <p
                      className="col-sm-4"
                      style={{ textAlign: "right", margin: "auto 0" }}
                    >
                      Total price
                    </p>
                    <input type="text" className="col-sm-8 input-total" />
                  </div>
                  <div className="row total-buy col-sm-9">
                    <p
                      className="col-sm-4"
                      style={{ textAlign: "right", margin: "auto 0" }}
                    >
                      Total price
                    </p>
                    <select className="col-sm-8 input-total text-center">
                      <option>Money</option>
                      <option>Banking</option>
                    </select>
                  </div>
                  <button className="col-md-9">Comfirm</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
