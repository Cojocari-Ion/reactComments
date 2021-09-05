import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          author="Sam" 
          timeAgo="yesterday at 5pm"
          content="so nice!"
          avatar={faker.image.avatar()} />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="Samuel" 
          timeAgo="yesterday at 7pm"
          content="That is so crazy!"
          avatar={faker.image.avatar()} />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="Valera" 
          timeAgo="yesterday at 8pm"
          content="Iocălămănă!"
          avatar={faker.image.avatar()} />
      </ApprovalCard>    

      <ApprovalCard>             
        <CommentDetail 
          author="Verka" 
          timeAgo="yesterday at 10pm"
          content="LOL!"
          avatar={faker.image.avatar()} />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="Natasha" 
          timeAgo="yesterday at 11pm"
          content="Vând Toyota Yaris 1.4 disel!"
          avatar={faker.image.avatar()} />
      </ApprovalCard>
    </div>
  );
}


ReactDOM.render(
  
  <App />,
  
  document.getElementById('root')
);


