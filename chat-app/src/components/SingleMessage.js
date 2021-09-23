import React from "react";

const SingleMessage = (props) => {
  const userType = props.type === "1" ? "purple" : "olive";
  const float = props.type === "1" ? " right" : "left";
  //   console.log(props);
  return (
    <div
      className={`ui icon ${userType} message`}
      style={{ maxWidth: "60%", float: float, display: "clear" }}
    >
      <i className="inbox icon"></i>
      <div className="content">
        <div className="header">
          {props.type === "1" ? "Agent" : "Customer"}
        </div>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default SingleMessage;
