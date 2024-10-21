import React from 'react';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="banner">
        <h1 className="banner-title">Ink&Ideas</h1>
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#create">Create Post</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
