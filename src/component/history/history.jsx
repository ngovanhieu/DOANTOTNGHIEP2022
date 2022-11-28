import React, { useState } from "react";
import "./history.css";
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useEffect } from "react";
// import { setDisplayAlert, setItemPropAlert } from "../../redux";
import dateFormat from "dateformat";


const History = () => {
  let customerName = localStorage.getItem("customerName");
  let userId = localStorage.getItem("userId");
  let email = localStorage.getItem("email");
  let phone = localStorage.getItem("phone");
  const [data, setData] = useState([]);
  //   const dispatch = useDispatch()

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`http://localhost:5000/api/orders/getOrderByUserId/${userId}`)
      .then(function (response) {
        console.log(response);
        setData(response.data.orders);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md="4">
          <Card className="card-user">
            <div className="nameCart">Thông Tin cá Nhân</div>

            <img
              className="backgroup"
              alt="..."
              src="https://phunugioi.com/wp-content/uploads/2020/02/hinh-anh-dep-thien-nhien.jpg"
            ></img>
            <Card.Body className="author">
              <div>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="card-image"></div>
                  <h5 className="title">{customerName}</h5>
                </a>
              </div>
              <p className="description text-center my-1">
                Tên tài khoản: {customerName}
                <br />
              </p>
              <p className="description text-center my-1">
                Số điện Thoại: {phone}
                <br />
              </p>
              <p className="description text-center my-1">
                Email: {email}
                <br />
              </p>
            </Card.Body>
            <hr></hr>
            <div className="button-container mr-auto ml-auto">
              <Button
                className="btn-simple btn-icon"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                variant="link"
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <Button
                className="btn-simple btn-icon"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                variant="link"
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <Button
                className="btn-simple btn-icon"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                variant="link"
              >
                <i className="fab fa-google-plus-square"></i>
              </Button>
            </div>
          </Card>
        </Col>
        <Col md="8">
          <div className="name_payment">
            <p> Lịch Sử Mua Hàng Của Bạn </p>
          </div>
          <Table striped bordered hover md="8">
            <thead>
              <tr>
                <th>Hình Ảnh</th>
                <th>Tên Sản Phẩm</th>
                <th>Giá Tiền </th>
                <th>Số lượng </th>
                <th>Tổng tiền</th>
                <th>Ngày đặt</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr key={index}>
                  <td>Tên Sản Phẩm</td>
                  <td>{item?.productName}</td>
                  <td>{item?.price}</td>
                  <td>{item?.quantity}</td>
                  <td>{item?.price * item?.quantity}</td>
                  <td>{dateFormat(item?.createdAt, "dd/mm/yyyy")}</td>
                  <td>
                    {item?.orderStatus === "1"
                      ? "Hủy"
                      : item?.orderStatus === "2"
                      ? "Vừa đặt"
                      : "Đã nhận"}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default History;
