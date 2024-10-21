import React from 'react';

const PostList = ({ posts, onDelete, onViewPost }) => {
  return (
    <div className="post-list">
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map((post, index) => (
          <div key={index} className="post-item">
            <h3>{post.title}</h3>
            <p>{post.description}</p>

            {}
            {post.image && (
              <div className="image-container">
                <img src={post.image} alt={post.title} className="blog-image" />
              </div>
            )}

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