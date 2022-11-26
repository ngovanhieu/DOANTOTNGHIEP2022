import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { dataPaymentSelector, setDisplayAlert, setItemPropAlert } from "../../redux";
import "./payment.css";

const Payment = () => {
  const data = useSelector(dataPaymentSelector);
  console.log(data);
  const dispatch = useDispatch();

  const [name, setName] = useState(data?.values?.customerName || "");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState(data?.values?.phone || "");

  const submitInfo = () => {
    if (name && address && phone) {
      document.getElementById("tablePayment").style.height = "570px";
    } else {
      dispatch(setDisplayAlert(true));
      dispatch(setItemPropAlert("Yêu cầu nhập đủ thông tin!"));
    }
  };
  return (
    <div>
      <div className="container_payment_body">
        <div className="container_Cart_payment">
          <div className="container_Cart_Payment_information">
            <Form>
              <Form.Group className="payment_form">
                <Form.Label>Tên Khách Hàng </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="payment_form"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              >
                <Form.Label>Địa Chỉ </Form.Label>
                <Form.Control type="email" placeholder="Địa chỉ" />
              </Form.Group>
              <Form.Group
                className="payment_form"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              >
                <Form.Label>Số điện thoại</Form.Label>
                <Form.Control type="email" placeholder="0787314023" />
              </Form.Group>

              <Button
                className="payment_button"
                variant="primary"
                onClick={submitInfo}
              >
                SUBMIT
              </Button>
            </Form>
          </div>
          <div className="container_payment_body_order">
            <div className="container_payment_body_order_information">
              <div className="container_payment_body_order_information_text">
                <span>Đơn Hàng của bạn</span>
              </div>
              <div
                id="tablePayment"
                className="container_payment_body_order_information_table"
              >
                <table>
                  <tr>
                    <th>THÔNG TIN</th>
                    <th>CHI TIẾT</th>
                  </tr>
                  <tr>
                    <td>Tên Khách hàng</td>
                    <td>{name}</td>
                  </tr>
                  <tr>
                    <td>Địa chỉ</td>
                    <td>{address}</td>
                  </tr>
                  <tr>
                    <td>Số điện thoại</td>
                    <td>{phone}</td>
                  </tr>
                  <tr>
                    <td>Tên Sản phẩm</td>
                    <td>{data?.values?.productName}</td>
                  </tr>
                  <tr>
                    <td>Số lượng </td>
                    <td>{data?.values?.quantity}</td>
                  </tr>
                  <tr>
                    <td>giá sản phẩm</td>
                    <td style={{ color: "#d63031", fontWeight: "500" }}>
                      {data?.values?.Total}₫
                    </td>
                  </tr>
                  <tr>
                    <td>Tiền vận chuyển</td>
                    <td style={{ color: "#d63031", fontWeight: "500" }}>
                      30.000₫
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "700" }}>Tổng Tiền thanh toán</td>
                    <td style={{ color: "#e84118", fontWeight: "600" }}>
                      {data?.values?.Total + 30000}₫
                    </td>
                  </tr>
                  {/* <tr>
                    <td style={{ fontSize: "15px" }}>
                      <input type="radio" name="pay" /> Thanh toán khi nhận hàng
                    </td>
                    <td>
                      <input type="radio" name="pay" accept=""></input>
                      Thanh toán qua ngân hàng
                    </td>
                  </tr> */}
                </table>
                <div className="container_payment_body_order_btn my-4">
                  <Button
                    className="payment_button_order"
                    variant="primary"
                    type="submit"
                  >
                    Đặt Hàng
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
