import { faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Rate from "../Rate";

function Reply() {
    return (
        <>
            <div className="blog-cmt-reply col-md-11">
                <div className="row blog-cmt-title col-md-12">
                    <img className="" src="/user.png" alt="img"></img>
                    <p className="">Name user</p>
                </div>
                <div className="blog-cmt-content col-md-12">
                    <p className="">Máy thiếu một vài màu đang trend, phụ kiện đi kèm còn ít, ít option để lựa chọn</p>
                    <div className="blog-cmt-rating row col-md-12">
                        <div className="col-md-6">
                            {<Rate />}
                        </div>
                        <div className="comment-reply col-md-6">
                            <Link to="/BlogDetail" className="btn button"><FontAwesomeIcon icon={faReply} /> Reply</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reply;