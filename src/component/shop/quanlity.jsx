import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setDisplayAlert, setItemPropAlert } from "../../redux";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";

export const Quanlity = ({ item, setCheckUpdate, checkUpdate }) => {
  const [check, setCheck] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();


  const handleQuantity = (check) => {
    if (check === "plus") {
      setQuantity(quantity + 1);
    } else if (quantity === 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    axios
      .get(`http://localhost:5000/api/getOrderById/${item._id}`)
      .then(function (response) {
        console.log(response);
        setQuantity(response.data.response.Amount);
      })
      .catch(function (error) {
        // handle error

        console.log(error);
      });
  };

  const updateProduct = () => {
    axios
      .patch(`http://localhost:5000/api/editOrder/${item._id}`, {
        Amount: quantity,
      })
      .then(function (response) {
        console.log(response);
        handleCheck();
        dispatch(setDisplayAlert(true));
        setCheckUpdate(!checkUpdate);
        dispatch(setItemPropAlert("Cập nhật thành công!"));
      })
      .catch(function (error) {
        // handle error
        dispatch(setDisplayAlert(true));
        dispatch(setItemPropAlert("Cập nhật thất bại!"));
        console.log(error);
      });
  };
  const handleCheck = () => {
    setCheck(!check);
  };
  return (
    <div className="qty row col-md-12">
      {!check ? (
        <div
          className="d-flex"
          style={{
            margin: "0 80px",
          }}
        >
          <p
            style={{
              textAlign: " center",
              margin: "auto 0",
              color: "#379237",
            }}
          >
            {quantity}
          </p>
          <div
            className="mx-3"
            style={{
              border: "1px solid rgb(220 220 220)",
              borderRadius: "100%",
              width: "30px",
              height: "30px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <EditIcon fontSize="small" onClick={handleCheck} />
          </div>
        </div>
      ) : (
        <div className="d-flex">
          <button className="col-md-2" onClick={(e) => handleQuantity("minus")}>
            <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
            {/* <i className="">-</i> */}
          </button>
          <input
            className="col-md-2"
            type="text"
            value={quantity}
            style={{ color: "#379237" }}
          />
          <button className="col-md-2" onClick={(e) => handleQuantity("plus")}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            {/* <i className="">+</i> */}
          </button>
          <div
            className="col-md-2 mx-2"
            style={{
              border: "1px solid rgb(220 220 220)",
              borderRadius: "100%",
              width: "30px",
              textAlign: "center",
              height: "30px",
              cursor: "pointer",
            }}
          >
            <DoneIcon fontSize="small" onClick={updateProduct} />

          </div>
        </div>
      )}
    </div>
  );
};
