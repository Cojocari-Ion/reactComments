import React from 'react';
import faker from 'faker';


const CommentDetail = props => {
    
    return (
        <div className="comment">
        <a href="#" className="avatar">
          <img alt="avatar" src={faker.image.avatar()}></img>
        </a>
        <div className="content">
          <a href="#" className="author">
            {props.author}
          </a>
          <div className="metadata">
            <span className="">Today at 6 am</span>
          </div>
          <div className="text">Very nice!</div>
        </div>
      </div>
    );
}

export default CommentDetail;