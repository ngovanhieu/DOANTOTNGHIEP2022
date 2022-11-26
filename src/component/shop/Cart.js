import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { setDisplayAlert, setItemPropAlert } from "../../redux";
import { Quanlity } from "./quanlity";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

function Cart() {
  const [message, setMessage] = useState("");
  const [checkAlert, setCheckAlert] = useState(false);
  const [checkUpdate, setCheckUpdate] = useState(false);
  const [data, setData] = useState([]);
  const [checkRemove, setCheckRemove] = useState(false);
  const [quantity, setQuantity] = useState(1);
  let customerName = localStorage.getItem("customerName");
  let phone = localStorage.getItem("phone");
  // const ref = useRef([])
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, [checkRemove, checkUpdate]);
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

  // const handleQuantity = (check, indexOption) => {
  //   ref.current.forEach((element, index) => {
  //     if(index === indexOption){
  //       // ref.current[index].value
  //       console.log(ref.current[indexOption], indexOption);
  //     }
  //   });
  //   if (check === "plus") {
  //     setQuantity(quantity + 1);
  //   } else if (quantity === 1) {
  //     setQuantity(1);
  //   } else {
  //     setQuantity(quantity - 1);
  //   }
  // };
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
                      <tr
                        className="my-5"
                        key={index}
                        // ref={(element) => {
                        //   ref.current[index] = element;
                        // }}
                      >
                        <td
                          className="col-md-1"
                          style={{ color: "#379237", fontWeight: "600" }}
                        >
                          <p style={{ textAlign: "center", margin: "auto 0" }}>
                           {index + 1}
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
                          <Quanlity
                            item={item}
                            setCheckUpdate={setCheckUpdate}
                            checkUpdate={checkUpdate}
                          />
                        </td>
                        <td className="col-md-2 total-price ">
                          {item.price * item.Amount} vnđ
                        </td>
                        <td className="col-md-1 other ">
                          <button
                            style={{
                              border: "1.5px solid #BCEAD5",
                              // margin: "30%",
                            }}
                            onClick={(e) => removeOrder(item)}
                          >
                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                          </button>
                          <button
                            style={{
                              border: "1.5px solid #BCEAD5",
                              // margin: "0 30%",
                            }}
                            onClick={(e) => removeOrder(item)}
                          >
                            <ShoppingCartCheckoutIcon fontSize="small" />
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
