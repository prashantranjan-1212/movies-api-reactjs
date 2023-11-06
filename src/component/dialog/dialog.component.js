import "./dialog.style.scss";
import { Portal } from "react-portal";
import PropTypes from "prop-types";

const Dialog = ({ title, content, handleCloseButton }) => {
  return (
    <Portal
      node={document && document.getElementById("movie-portal")}
      data-testid="dialog-portal"
    >
      <div className="dialog-conatiner" data-testid="dialog-container">
        <div className="dialog-title" data-testid="dialog-title">
          <p>{title}</p>
          <button
            className="dialog-button"
            data-testid="dialog-button"
            onClick={handleCloseButton}
          >
            X
          </button>
        </div>
        <div className="dialog-content" data-testid="dialog-content">
          {content}
        </div>
      </div>
    </Portal>
  );
};

export default Dialog;

Dialog.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  handleCloseButton: PropTypes.func.isRequired,
};

Dialog.defaultProps = {
  title: "Dialog Title",
  content: "Dialog Content",
  handleCloseButton: () => {},
};
