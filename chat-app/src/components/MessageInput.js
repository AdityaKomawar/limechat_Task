import React, { useState } from "react";
import axios from "axios";

const MessageInput = (props) => {
  const [content, setContent] = useState("");
  const [createdAt, setCreatedAt] = useState(new Date().toISOString());
  const [updatedAt, setUpdatedAt] = useState(new Date().toISOString());

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("https://retoolapi.dev/m89lfD/limechat", {
      Content: content,
      "Created At": createdAt,
      "Updated AT": updatedAt,
    });
    // console.log("sent", response);
  };
  return (
    <div className="field">
      <form
        className="ui form"
        style={{ width: "100%" }}
        onSubmit={handleSubmit}
      >
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Type here..."
            onChange={(e) => {
              setContent(e.target.value);
              setCreatedAt(new Date().toISOString());
              setUpdatedAt(new Date().toISOString());
            }}
            value={content}
          />
          <button type="submit">
            <i className="inverted circular location arrow link icon"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
