import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';


const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="#" className="avatar">
          <img alt="avatar" src={faker.image.avatar()}></img>
        </a>
        <div className="content">
          <a href="#" className="author">
            {faker.name.firstName()}
          </a>
          <div className="metadata">
            <span className="">Today at 6 am</span>
          </div>
          <div className="text">Very nice!</div>
        </div>
      </div>
    </div>
  );
}


ReactDOM.render(
  
  <App />,
  
  document.getElementById('root')
);


