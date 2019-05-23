import React from "react";
import { Link } from "react-router-dom";

const styles = {
  wrapperStyle: {
    backgroundColor: "#fff",
    boxShadow: '0 0 0 5000px rgba(0,0,0,0.66)',
    width: 400,
    minHeight: 400,
    margin: "0 auto",
    borderRadius: 8,
    position: "fixed",
    top: "50%",
    transform: "translateY(-60%) translateX(-50%)",
    left: "50%",
    fontFamily: '"Heebo", sans-serif',
  },
  exitBtnStyle: {
    color: "white",
    float: "right",
    margin: 10,
    fontSize: '1.3 em'
  }
};

class Modal extends React.Component {
  render() {
    return this.props.isopen ? (
      <div className="Login" style={styles.wrapperStyle}>
        <Link to={{}} style={styles.exitBtnStyle}>
          <i className="fas fa-times dim pointer" />
        </Link>
        {this.props.children}
      </div>
    ) : null;
  }
}

export default Modal;
