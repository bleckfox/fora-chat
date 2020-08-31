import React from 'react'
import { Link } from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';

// style
import '../style/InfoBar.css';

function InfoBar( { room } ) {
    // eslint-disable-xet-line
    let invite = 'https://fora-chat.netlify.app'

    return(
        <div className='chat-header clearfix'>
            <div className='chat-about'>
                <h2 className='room-title'> { room } </h2>
                <div className='leave-room'>
                    <CopyToClipboard
                        text={ invite }
                        onCopy={ ()=> alert('Link was copied') }>
                        <span className='invite'>Invite friend</span>
                    </CopyToClipboard>
                    
                    <Link to={'/'}>
                        <span >Leave room</span>
                    </Link> 
                </div>
            </div>
        </div>    
    );
}

export default InfoBar
