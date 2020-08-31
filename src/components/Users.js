import React from 'react'
import '../style/Users.css';

function Users( {users} ) {
    return(
        <div>
            { users
                ? (
                    users.map(({name}) => (
                        <div key={name} className='clearfix'>
                            <div className='about'>
                                <div className='name'> { name } </div>
                            </div>
                        </div>
                        ) )
                ) : null }
        </div>
    );
}

export default Users