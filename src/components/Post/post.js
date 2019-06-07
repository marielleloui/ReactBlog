import React from "react";
import axios from "axios";

function Post() {
  axios.get("https://jsonplaceholder.typicode.com/users").then(user => {
    console.log(user.data);
  });

  return <div className="Post">Hello</div>;
}

export default Post;
