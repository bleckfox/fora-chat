import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Join.css';

function Join() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className='login'>
      <h1>Join to chat</h1>
      <form>
        <input type='text' name='name' placeholder='Name' required='required' onChange={ (event) => setName(event.target.value) } />
        <input type='text' name='room' placeholder='Chat Room' required='required' onChange={ (event) => setRoom(event.target.value) } />
        <Link onClick={ (event) => (!name || !room) ? event.preventDefault : null } to={`/chat?name=${name}&room=${room}`}>
          <button type='submit' className='btn btn-primary btn-block btn-large'>Join</button>
        </Link>
      </form>
    </div>
  );
}

export default Join;
