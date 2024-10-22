import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import PostDetails from './components/PostDetails';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts([storedPosts]);
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('posts', JSON.stringify(posts));
  // }, [posts]);

  const addPost = (post) => {
    console.log(post,"deege")
    setPosts([...posts, post]);
    console.log(posts)
  };

  const deletePost = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);

  };

  const viewPost = (index) => {
    setSelectedPost(posts[index]);
  };

  const goBack = () => {
    setSelectedPost(null);
  };

  return (
    <div className="app-container">
      <Navbar />
      {selectedPost ? (
        <PostDetails post={selectedPost} goBack={goBack} />
      ) : (
        <>
          <PostForm addPost={addPost} />
          <PostList posts={posts} onDelete={deletePost} onViewPost={viewPost} />
        </>
      )}
    </div>
  );
};

export default App;
