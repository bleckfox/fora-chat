import React from 'react'

// style
import '../style/SendArea.css';

function SendArea( { message, setMessage, sendMessage } ) {
    return(
        <div className='chat-message clearfix'>
            <textarea 
                type='text'
                placeholder ="Type your message" 
                rows="3"
                value={ message }
                onChange={ (event) => setMessage(event.target.value) }
                onKeyPress={ event => event.key === 'Enter' ? sendMessage(event) : null }
                >

            </textarea>
            <button 
                type='submit'
                onClick={ (event) => sendMessage(event) }
                >Send</button>
        </div>
    );
}

export default SendArea