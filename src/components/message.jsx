/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';

function Message(props) {
    const { author, content, created_at } = props.message;
    return (
        <div className="message">
            <div className="author">
                <p>{author} - {created_at}</p>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Message;
