import React from "react";
import ChatNavbar from "./ChatNavbar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

const HomePage = () => {
  return (
    <div className="ui container" style={{ marginTop: "0px" }}>
      <ChatNavbar />
      <ChatBody />
      <ChatFooter />
    </div>
  );
};

export default HomePage;
