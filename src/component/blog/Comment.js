import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Comment() {
  return (
    <>
      <div className="col-md-9 container py-5">
        <div className="comment">
          <FontAwesomeIcon icon={faCheck} /> Post comment
        </div>
      </div>
    </>
  );
}
export default Comment;
