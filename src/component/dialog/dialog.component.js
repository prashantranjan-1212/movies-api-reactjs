import "./dialog.style.css";
import { createPortal } from "react-dom";

const Dialog = ({ title, content, handleCloseButton }) => {
  return (
    <div className="dialog-conatiner">
      {createPortal(<p>{content}</p>, document.body)}
    </div>
  );
};

export default Dialog;
