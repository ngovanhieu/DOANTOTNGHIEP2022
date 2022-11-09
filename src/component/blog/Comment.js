import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Comment() {
    return (
        <>
            <div className="col-md-9 container py-5">
                <div className="comment">
                    <h1 className="h2">Comment</h1>
                    <div className="comment-content col-md-12">
                        <textarea className="col-md-11" placeholder="your comment" rows={6}></textarea>
                        <div className="button-post">
                            <button>
                                <FontAwesomeIcon icon={faCheck} /> Post comment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Comment;