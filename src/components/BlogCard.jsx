import React from 'react';
import './BlogCard.css';

export default function BlogCard({ image, category, date, title, description, author }) {
  return (
    <article className="blog-card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      
      <div className="card-content">
        <span className="category-badge">{category}</span>
        
        <p className="publish-date">{date}</p>
        
        <h2 className="card-title">{title}</h2>
        
        <p className="card-description">{description}</p>
        
        <div className="author">
          <img src={author.avatar} alt={author.name} className="author-avatar" />
          <span className="author-name">{author.name}</span>
        </div>
      </div>
    </article>
  );
}