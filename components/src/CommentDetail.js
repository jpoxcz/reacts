import React from 'react';
import faker from 'faker';

const CommentDetail = ({ author }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="date"> {new Date().toISOString()} </span>
        </div>
        <div className="text"> Nice blog post! </div>
      </div>
    </div>
  );
};

export default CommentDetail;
