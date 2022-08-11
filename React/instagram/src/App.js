import React, { useState } from "react";
import Post from "./components/post/Post";
import "./App.css";
import Avatar from "@material-ui/core/Avatar";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Muhammad Shahzaib",
      caption: "I Love Cats! 🐈♥",
      imageUrl:
        "https://wallpaperaccess.com/full/224835.jpg",
    },
  ]);
  return (
    <div className="app">
      <div className="app__header">
        <div className="app__headerWrapper">
          <img
            src=" https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram original logo"
          />
          <button className="text__button">Logout</button>
          <div className="app__headerButtons">
            <Avatar
              className="post__avatar"
              alt='Muhammad Shahzaib'
              src="/static/images/avatar/1.jpg"
            />
            <button className="text__button">Muhammad Shahzaib</button>
          </div>
        </div>
      </div>
      <div className="timeline">
        {posts.map((post) => (
          <Post
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;