import React, { useEffect, useState } from "react";
import SingleMessage from "./SingleMessage";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const ChatBody = () => {
  const [messages, setMessages] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState("Loading...");

  const getMessages = async () => {
    const response = await axios.get("https://retoolapi.dev/m89lfD/limechat", {
      params: { _page: pageNo, _limit: 100 },
    });
    setMessages(response.data);
    setPageNo(pageNo + 1);
    // console.log("10: ", response.data);
  };

  const fetchMoreData = async () => {
    const response = await axios.get("https://retoolapi.dev/m89lfD/limechat", {
      params: { _page: pageNo, _limit: 100 },
    });
    if (typeof response.data !== "undefined")
      setMessages([...messages, ...response.data]);
    else {
      setLoading("All Messages Fetched!");
    }
    setPageNo(pageNo + 1);
    // console.log([...messages, ...response.data]);
  };

  useEffect(() => {
    getMessages(setMessages);
  }, []);

  return (
    <div
      className="ui list"
      style={{
        paddingTop: "8%",
        paddingBottom: "8%",
      }}
    >
      <div
        id="scrollableDiv"
        style={{
          height: "500px",
          overflow: "auto",
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        {/*Put the scroll bar always on the bottom*/}
        <InfiniteScroll
          dataLength={messages.length}
          next={fetchMoreData}
          style={{ display: "flex", flexDirection: "column-reverse" }} //To put endMessage and loader to the top.
          inverse={true} //
          hasMore={true}
          loader={<h4>{loading}</h4>}
          scrollableTarget="scrollableDiv"
        >
          {messages.length
            ? messages.map((message) => (
                <div
                  key={message.ID}
                  style={{ padding: "5px" }}
                  className="ui item"
                >
                  <SingleMessage
                    content={message.Content}
                    type={message["Message Type"]}
                  />
                </div>
              ))
            : ""}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default ChatBody;
