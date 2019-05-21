import React from "react";
import { Link } from "react-router-dom";

const wrapperStyle = {
  backgroundColor: "white",
  border: "2px blue solid",
  width: "400px",
  minHeight: "400px",
  margin: "0 auto",
  borderRadius: "10px",
  position: "fixed",
  top: "50%",
  transform: "translateY(-50%) translateX(-50%)",
  left: "50%"
};

const exitBtnStyle = {
  color: "grey",
  float: "right"
};

class Modal extends React.Component {
  render() {
    return this.props.isopen ? (
      <div className="Login" style={wrapperStyle}>
        <Link to={{}} style={exitBtnStyle}>
          <i class="far fa-times-circle" />
        </Link>
        {this.props.children}
      </div>
    ) : null;
  }
}

export default Modal;
