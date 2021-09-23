import React from "react";
import MessageInput from "./MessageInput";

const ChatFooter = (props) => {
  return (
    <div
      className="ui sticky container"
      style={{
        position: "relative",
      }}
    >
      <div
        className="ui segment"
        style={{ position: "fixed", width: "inherit", bottom: "0px" }}
      >
        <div className="ui form">
          <MessageInput />
        </div>
      </div>
    </div>
  );
};

export default ChatFooter;
