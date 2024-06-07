'use client'
import React, { useState } from 'react';
import './npage.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [newComment, setNewComment] = useState('');

  const handlePostChange = (e) => {
    setNewPost(e.target.value);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const timestamp = new Date().toLocaleTimeString();
    const newPostObject = {
      name: newPost,
      time: timestamp,
      comments: [],
    };
    setPosts([...posts, newPostObject]);
    setNewPost('');
  };

  const handleCommentSubmit = (index) => (e) => {
    e.preventDefault();
    const timestamp = new Date().toLocaleTimeString();
    const updatedPosts = [...posts];
    updatedPosts[index].comments.push({
      name: newComment,
      time: timestamp,
    });
    setPosts(updatedPosts);
    setNewComment('');
  };

  return (
    <div className="App">
      <h1>Create a Post</h1>
      <form onSubmit={handlePostSubmit}>
        <input
          type="text"
          value={newPost}
          onChange={handlePostChange}
          placeholder="Your name"
          required
        />
        <button type="submit">Post</button>
      </form>
      <div className="posts">
        {posts.map((post, index) => (
          <div key={index} className="post">
            <p>{post.name}</p>
            <p>{post.time}</p>
            <form onSubmit={handleCommentSubmit(index)}>
              <input
                type="text"
                value={newComment}
                onChange={handleCommentChange}
                placeholder="Your comment"
                required
              />
              <button type="submit">Comment</button>
            </form>
            <div className="comments">
              {post.comments.map((comment, commentIndex) => (
                <div key={commentIndex} className="comment">
                  <p>{comment.name}</p>
                  <p>{comment.time}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;