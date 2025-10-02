import React from "react";

function BlogCard({ post }) {
  return (
    <a href="/" className="blog-card">
      <div className="card-image-wrapper">
        <img src={post.imageUrl} alt={post.title} className="card-image" />
      </div>
      <div className="card-content">
        <p className="card-category">{post.category}</p>
        <h3 className="card-title">{post.title}</h3>
        <p className="card-excerpt">{post.excerpt}</p>
      </div>
    </a>
  );
}

export default BlogCard;
