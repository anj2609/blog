import React, { useEffect, useState } from 'react';

const PostList = ({ posts, onDelete, onViewPost }) => {

const [fetchPosts, setFetchPosts] = useState([])

 useEffect(() => {
  const getItem = localStorage.getItem('posts');
  const val = JSON.parse(getItem) || [];
  setFetchPosts(val)
 },[posts])
 
  return (
    <div className="post-list">
      {fetchPosts.length === 0 ? (
        <p>No fetchPosts available</p>
      ) : (
        fetchPosts?.map((post, index) => (
          <div key={index} className="post-item">
            <h3>{post?.title}</h3>
            <p>{post?.description}</p>

            {}  
            {/* {post.image && (
              <div className="image-container">
                <img src={post.image} alt={post.title} className="blog-image" />
              </div>
            )} */}

            <div className="post-actions">
              <button onClick={() => onViewPost(index)}>Read More</button>
              <button className="delete" onClick={() => onDelete(index)}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PostList;