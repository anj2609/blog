import React from 'react';

const PostDetails = ({ post, goBack }) => {
  return (
    <div className="post-details">
      <button onClick={goBack} className="back-button">Go Back</button>
      <h2>{post.title}</h2>
      <p>{post.description}</p>

      {}
      {post.image && (
        <div className="image-container">
          <img src={post.image} alt={post.title} className="blog-image" />
        </div>
      )}
    </div>
  );
};

export default PostDetails;