import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';

const ChatEntry = (props) => {
  const { id, sender, body, timeStamp, onLikeChange} = props;
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked((prevLiked) => !prevLiked);
    onLikeChange(id, !liked);
  }

  const isLocal = sender === 'Vladimir';
  return (
    <div className={`chat-entry ${isLocal ? 'local' : 'remote'}`} key={id}>
    {/* // <div className="chat-entry local" key={id}> */}
      <h2 className="sender">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}></TimeStamp></p>
        {/* <span>{props.sender}</span>
        <span>{props.body}</span> */}

        {/* <span>{props.chatTime}</span> */}
        
      </section>
      <button className="like" onClick={handleLikeClick}>
          {liked ? '❤️' : '🤍'}
      </button>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default ChatEntry;
