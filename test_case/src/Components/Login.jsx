import React, { useState, useEffect } from "react";
import axios from "axios";

export const Login = () => {
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);
  const getPostList = async () => {
    const response = await axios.get(
      "http://my-json-server.typicode.com/shaikhjavedofficial/server_db/data"
    );

    const data = response.data.data;
    setPosts(data);
    setMessage(response.data.name);
  };
  useEffect(() => {
    getPostList();
    console.log(
      "post",
      posts.map((item) => item.name)
    );
  }, []);
  return (
    <div>
      <h1>Login</h1>
      <p data-testid="success">{message}</p>
      <ul>
        {posts.map((item) => {
          return (
            <li key={item.id} data-testid={item.name}>
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
