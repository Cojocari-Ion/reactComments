import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';


const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" />
      <CommentDetail author="Samuel" />
      <CommentDetail author="Valera" />
      <CommentDetail author="Verka" />
      <CommentDetail author="Natasha" />
    </div>
  );
}


ReactDOM.render(
  
  <App />,
  
  document.getElementById('root')
);


