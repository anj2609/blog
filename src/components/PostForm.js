import React, { useState } from 'react';

const PostForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // const [image, setImage] = useState(null);
  // const [imagePreview, setImagePreview] = useState(null);

  // const handleImageUpload = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setImage(file); 
  //       setImagePreview(reader.result); 
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      // addPost({ title, description});
      setTitle('');
      setDescription('');
      const getItem = localStorage.getItem('posts');
      // if(getItem){
        const posts = JSON.parse(getItem) || [];
        posts.push({title , description});
        localStorage.setItem('posts', JSON.stringify(posts));
      // }
      addPost({title , description});
      // setImage(null);
      // setImagePreview(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />

      {/* {} */}
      {/* <label className="file-upload-label">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="file-input"
        />

      </label> */}

      {/* {} */}
      {/* {imagePreview && (
        <div className="image-preview">
          <img src={imagePreview} alt="Preview" />
        </div>
      )} */}

      <button type="submit" className="submit">
        Create Post
      </button>
    </form>
  );
};

export default PostForm;