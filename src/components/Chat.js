import React, { useState, useEffect } from 'react';
import QueryString from 'query-string';
import SocketIO from 'socket.io-client';

// components
import Users from './Users';
import InfoBar from './InfoBar'
import Messages from './Messages';
import SendArea from './SendArea';

// style
import '../style/Chat.css';

let socket;

function Chat ( { location } ) {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState( [] );
  const localhost = 'localhost:5000';


  useEffect( () => {
    const { name, room } = QueryString.parse(location.search);
    setName(name);
    setRoom(room);

    socket = SocketIO(localhost);
    socket.emit('join', { name, room }, () => {

    });

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
    
  }, [localhost, location.search]);

  useEffect( () => {
    socket.on('message', (message) => {
      setMessages( [...messages, message] );
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, [messages]);

  function sendMessage(event) {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div className='container clearfix'>
      <div className='people-list' id='people-list'>
            <ul className='list'>
              <Users users={ users }/>
            </ul>
        </div>
      

      <div className='chat'>
        <InfoBar room={ room }/>
        <div className='chat-history'>
          <Messages messages={messages} name={name} />
        </div>
        <SendArea message={ message } setMessage={ setMessage } sendMessage={ sendMessage }/>
      </div>
    </div>
  );
}

export default Chat;
