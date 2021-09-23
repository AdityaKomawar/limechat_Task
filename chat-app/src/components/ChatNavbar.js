import React from "react";
import faker from "faker";

const ChatNavbar = () => {
  return (
    <div
      className="ui inverted segment"
      style={{
        width: "inherit",
        position: "fixed",
        zIndex: "1000",
        top: "0px",
      }}
    >
      <div className="ui comments">
        <div className="comment">
          <a href="/" className="avatar">
            <img alt="avater" src={faker.image.avatar()} />
          </a>
          <div className="content">
            LimeChat
            <div className="text" style={{ color: "#ffffff99" }}>
              You, Aditya Komawar and 3 others
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatNavbar;
