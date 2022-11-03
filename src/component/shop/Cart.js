import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Cart() {
    return (
        <>
            <div className="container py-5" style={{ backgroundColor: "#E8F9FD" }}>
                <div className="row col-md-12">
                    <div className="col-lg-2">
                        <div className="category">
                            <h1 className="h2 text-center py-2">Categories</h1>
                            <ul className="list-unstyled templatemo-accordion">
                                <li className="">
                                    <a className="collapsed p-3 d-flex justify-content-between text-decoration-none">
                                        Iphone
                                    </a>
                                </li>
                                <li className="">
                                    <a className="collapsed p-3 d-flex justify-content-between text-decoration-none">
                                        Samsung
                                    </a>
                                </li>
                                <li className="">
                                    <a className="collapsed p-3 d-flex justify-content-between text-decoration-none">
                                        Product
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="cart">
                            <h1 className="h2 text-center py-2" >Cart</h1>
                            <table className="col-md-12">
                                <thead className="col-md-12">
                                    <tr>
                                        <td className="col-md-1 text-center" style={{ color: "#FD841F", fontWeight: "600" }}>STT</td>
                                        <td className="col-md-1 text-center" style={{ color: "#FD841F", fontWeight: "600" }}>Image</td>
                                        <td className="col-md-2 text-center" style={{ color: "#FD841F", fontWeight: "600" }}>Name product</td>
                                        <td className="col-md-2 text-center" style={{ color: "#FD841F", fontWeight: "600" }}>Price</td>
                                        <td className="col-md-3 text-center" style={{ color: "#FD841F", fontWeight: "600" }}>Quantum</td>
                                        <td className="col-md-2 text-center" style={{ color: "#FD841F", fontWeight: "600" }}>Total price</td>
                                        <td className="col-md-1 text-center" style={{ color: "#FD841F", fontWeight: "600" }}>Other</td>
                                    </tr>
                                </thead>
                                <tbody className="col-md-12">
                                    <tr>
                                        <td className="col-md-1" style={{ color: "#379237", fontWeight: "600" }}>
                                            <p style={{ textAlign: "center", margin: "auto 0" }}>1</p>
                                        </td>
                                        <td className="col-md-1">
                                            <div className="img-product">
                                                <img alt="img" src="https://stcv4.hnammobile.com/uploads/products/colors/6/apple-iphone-14-pro-max-256gb-ll-01663680113.jpg" style={{ maxWidth: "100%" }}></img>
                                            </div>
                                        </td>
                                        <td className="col-md-2">
                                            <p style={{ textAlign: "center", margin: "auto 0", color: "#379237" }}>IP 14 pro max</p>
                                        </td>
                                        <td className="col-md-2">
                                            <p style={{ textAlign: " center", margin: "auto 0", color: "#379237" }}>{Math.floor(Math.random() * (40000000 - 10000000 + 10000000) + 10000000)} vnđ</p>
                                        </td>
                                        <td className="col-md-3">
                                            <div className="qty row col-md-12">
                                                <button>
                                                    <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                                                    {/* <i className="">-</i> */}
                                                </button>
                                                <input type="text" value={1} style={{ color: "#379237" }} />
                                                <button>
                                                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                                                    {/* <i className="">+</i> */}
                                                </button>
                                            </div>
                                        </td>
                                        <td className="col-md-2 total-price">
                                            <input style={{}} />
                                        </td>
                                        <td className=" col-md-1 other">
                                            <button style={{ maxWidth: "40%", border: "1.5px solid #BCEAD5", margin: "0 30%" }}>
                                                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className="col-md-12">
                                <thead className="col-md-12">
                                    <tr>
                                        <td className="col-md-1 text-center" style={{ color: "#FD841F", fontWeight: "600" }}>STT</td>
                                        <td className="col-md-1 text-center" style={{ color: "#FD841F", fontWeight: "600" }}>Image</td>
                                        <td className="col-md-2 text-center" style={{ color: "#FD841F", fontWeight: "600" }}>Name product</td>
                                        <td className="col-md-2 text-center" style={{ color: "#FD841F", fontWeight: "600" }}>Price</td>
                                        <td className="col-md-3 text-center" style={{ color: "#FD841F", fontWeight: "600" }}>Quantum</td>
                                        <td className="col-md-2 text-center" style={{ color: "#FD841F", fontWeight: "600" }}>Total price</td>
                                        <td className="col-md-1 text-center" style={{ color: "#FD841F", fontWeight: "600" }}>Other</td>
                                    </tr>
                                </thead>
                                <tbody className="col-md-12">
                                    <tr>
                                        <td className="col-md-1" style={{ color: "#379237", fontWeight: "600" }}>
                                            <p style={{ textAlign: "center", margin: "auto 0" }}>1</p>
                                        </td>
                                        <td className="col-md-1">
                                            <div className="img-product">
                                                <img alt="img" src="https://stcv4.hnammobile.com/uploads/products/colors/6/apple-iphone-14-pro-max-256gb-ll-01663680113.jpg" style={{ maxWidth: "100%" }}></img>
                                            </div>
                                        </td>
                                        <td className="col-md-2">
                                            <p style={{ textAlign: "center", margin: "auto 0", color: "#379237" }}>IP 14 pro max</p>
                                        </td>
                                        <td className="col-md-2">
                                            <p style={{ textAlign: " center", margin: "auto 0", color: "#379237" }}>{Math.floor(Math.random() * (40000000 - 10000000 + 10000000) + 10000000)} vnđ</p>
                                        </td>
                                        <td className="col-md-3">
                                            <div className="qty row col-md-12">
                                                <button>
                                                    <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                                                    {/* <i className="">-</i> */}
                                                </button>
                                                <input type="text" value={1} style={{ color: "#379237" }} />
                                                <button>
                                                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                                                    {/* <i className="">+</i> */}
                                                </button>
                                            </div>
                                        </td>
                                        <td className="col-md-2 total-price">
                                            <input style={{}} />
                                        </td>
                                        <td className=" col-md-1 other">
                                            <button style={{ maxWidth: "40%", border: "1.5px solid #BCEAD5", margin: "0 30%" }}>
                                                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className="col-md-12">
                                <thead className="col-md-12">
                                    <tr>
                                        <td className="col-md-1 text-center" style={{ color: "#FD841F", fontWeight: "600" }}>STT</td>
                                        <td className="col-md-1 text-center" style={{ color: "#FD841F", fontWeight: "600" }}>Image</td>
                                        <td className="col-md-2 text-center" style={{ color: "#FD841F", fontWeight: "600" }}>Name product</td>
                                        <td className="col-md-2 text-center" style={{ color: "#FD841F", fontWeight: "600" }}>Price</td>
                                        <td className="col-md-3 text-center" style={{ color: "#FD841F", fontWeight: "600" }}>Quantum</td>
                                        <td className="col-md-2 text-center" style={{ color: "#FD841F", fontWeight: "600" }}>Total price</td>
                                        <td className="col-md-1 text-center" style={{ color: "#FD841F", fontWeight: "600" }}>Other</td>
                                    </tr>
                                </thead>
                                <tbody className="col-md-12">
                                    <tr>
                                        <td className="col-md-1" style={{ color: "#379237", fontWeight: "600" }}>
                                            <p style={{ textAlign: "center", margin: "auto 0" }}>1</p>
                                        </td>
                                        <td className="col-md-1">
                                            <div className="img-product">
                                                <img alt="img" src="https://stcv4.hnammobile.com/uploads/products/colors/6/apple-iphone-14-pro-max-256gb-ll-01663680113.jpg" style={{ maxWidth: "100%" }}></img>
                                            </div>
                                        </td>
                                        <td className="col-md-2">
                                            <p style={{ textAlign: "center", margin: "auto 0", color: "#379237" }}>IP 14 pro max</p>
                                        </td>
                                        <td className="col-md-2">
                                            <p style={{ textAlign: " center", margin: "auto 0", color: "#379237" }}>{Math.floor(Math.random() * (40000000 - 10000000 + 10000000) + 10000000)} vnđ</p>
                                        </td>
                                        <td className="col-md-3">
                                            <div className="qty row col-md-12">
                                                <button>
                                                    <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                                                    {/* <i className="">-</i> */}
                                                </button>
                                                <input type="text" value={1} style={{ color: "#379237" }} />
                                                <button>
                                                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                                                    {/* <i className="">+</i> */}
                                                </button>
                                            </div>
                                        </td>
                                        <td className="col-md-2 total-price">
                                            <input style={{}} />
                                        </td>
                                        <td className=" col-md-1 other">
                                            <button style={{ maxWidth: "40%", border: "1.5px solid #BCEAD5", margin: "0 30%" }}>
                                                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="row py-3">
                            <div className="infor-ship col-md-3">
                                <h3>Shipment Details</h3>
                                <p>
                                    Fullname: <span>xxxxxxxxxx</span>
                                </p>
                                <p>
                                    Phone number: <span>01234567899</span>
                                </p>
                                <p>
                                    Address: xxxxxxxxxx
                                </p>
                                <p>
                                    Estimated delivery date: <span>dd/MM/yyyy</span>
                                </p>
                            </div>
                            <div className="total col-md-9">
                                <h3>Total</h3>
                                <div className="container" style={{ padding: "8px 0" }}>
                                    <div className="row total-qty col-sm-9">
                                        <p className="col-sm-4" style={{ textAlign: "right", margin: "auto 0" }}>Total quantum</p>
                                        <input type="text" className="col-sm-8 input-total" />
                                    </div>
                                    <div className="row total-price col-sm-9">
                                        <p className="col-sm-4" style={{ textAlign: "right", margin: "auto 0" }}>Total price</p>
                                        <input type="text" className="col-sm-8 input-total" />
                                    </div>
                                    <div className="row total-buy col-sm-9">
                                        <p className="col-sm-4" style={{ textAlign: "right", margin: "auto 0" }}>Total price</p>
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
    )
}

export default Cart;