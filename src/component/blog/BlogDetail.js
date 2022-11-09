import Comment from "./Comment";
import ListComment from "./ListComment";

function BlogDetail() {
    return (
        <>
            <div className="container py-5">
                <div className="row col-md-12" style={{ margin: "0 auto" }}>
                    <div className="col-md-9 list-comment">
                        <div className="container">
                            <h1 className="h2 text-center py-2" >List comment</h1>
                            {<ListComment />}
                            {<ListComment />}
                        </div>
                    </div>
                    {<Comment />}
                </div>
            </div>
        </>
    )
}
export default BlogDetail;