import "./dialog.style.scss";
import { Portal } from "react-portal";

const Dialog = ({ title, content, handleCloseButton }) => {
  return (
    <Portal node={document && document.getElementById("movie-portal")}>
      <div className="dialog-conatiner">
        <div className="dialog-title">
          <p>{title}</p>
          <button className="dialog-button" onClick={handleCloseButton}>
            X
          </button>
        </div>
        <div className="dialog-content">{content}</div>
      </div>
    </Portal>
  );
};

export default Dialog;
