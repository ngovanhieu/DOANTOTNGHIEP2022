import { Link } from "react-router-dom";
import Rate from "../Rate";

function Blog() {
    return (
        <>
            <div className="container py-5">
                <div className="row col-md-12" style={{ margin: "0 auto" }}>
                    <div className="col-md-9 blog-list">
                        <div className="container ">
                            <h1 className="h2 text-center py-2" >Blog list</h1>
                            <div className="col-md-12 my-sm-4">
                                <div className="blog-items row">
                                    <div className="col-md-4 blog-items-img">
                                        <img src="https://image.anhducdigital.vn/di-dong/dien-thoai/samsung/samsung-galaxy-z-fold4/samsung-galaxy-z-fold4-03-500x500.jpg" className="card-img-top" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <a href="shop-single.html" className="h2 text-decoration-none text-dark">Samsung Galaxy Z Fold4</a>
                                        <p className="card-text">
                                            Samsung Galaxy Z Fold4 vẫn sở hữu màn hình ngoài có kích thước 6.2 inch cùng thiết kế Infinity-O tràn viền, sử dụng tấm nền Dynamic AMOLED 2X, độ phân giải HD+ (2316x904 pixel) và có tần số quét linh hoạt 48-120Hz, cho trải nghiệm chạm vuốt mượt mà hơn tùy theo nội dung hiển thị.
                                            Ngoài ra, do có sự thay đổi về kích thước máy nên tỷ lệ màn hình cũng thay đổi thành 23.1:9.
                                        </p>
                                        {<Rate />}
                                        <p className=""> Giá: {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(25000000)}</p>
                                        <div className="blog-cmt row">
                                            <p className="col-md-8">Máy thiếu một vài màu đang trend, phụ kiện đi kèm còn ít, ít option để lựa chọn</p>
                                            <div className="col-md-4">
                                                {<Rate />}
                                            </div>
                                        </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Blog;