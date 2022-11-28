import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./icon.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import History from "../history/history";
const Icon = () => {
    const navigation = useNavigate();
  const user = JSON.parse(localStorage.getItem("dataUser"));


  return (
    <div>
      <div className="container_icon">
        <div
          className="container_icon_cart"
          onClick={() => {
              navigation("/cart");
          }}
        >
          <ShoppingCartIcon fontSize="large" />
        </div>

        <div
          className="container_icon_cart"
          onClick={() => {
              // navigation("/history");
          }}
        >
          {/* <HistoryIcon fontSize="large" /> */}
        </div>
      </div>
    </div>
  );
};

export default Icon;
