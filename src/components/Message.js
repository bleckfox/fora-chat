import React from 'react';

import '../style/Message.css';


function Message ({ message: { text, user }, name }) {
  let isSentByCurrentUser = false;
  // when user send msg
  let sendTime = new Date()
  let sendHour = sendTime.getHours();
  let sendMinute = sendTime.getMinutes();
  let whenSend = `${sendHour}:${sendMinute}`;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (

    isSentByCurrentUser
      ? (
        <li>
            <div className='message-data'>
                <span className='message-data-name'>{ trimmedName }</span>
                <span className='message-data-time'>{ whenSend }</span>
            </div>
            <div className='message my-message'>
                { text }
            </div>
        </li>
        )
        : (
            <li className='clearfix'>
                <div className='message-data align-right'>
                    <span className='message-data-time'>{ whenSend }</span> &nbsp; &nbsp;
                    <span className='message-data-name'>{ user }</span>
                </div>
                <div className='message other-message float-right'>
                    { text }
                </div>
            </li>
        )
  );
}

export default Message;