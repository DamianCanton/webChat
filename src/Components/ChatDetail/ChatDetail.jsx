import React from 'react'


const ChatDetail = ({chatDetail}) => {
    
    
    return (
    <div>
        <h2>{chatDetail.name}</h2>
        <p>{chatDetail.id}</p>
    </div>
    )
}

export default ChatDetail