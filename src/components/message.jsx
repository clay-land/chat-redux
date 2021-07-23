/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';

function strToRGB(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i += 1) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const c = (hash & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();
    return `#${"00000".substring(0, 6 - c.length)}${c}`;
  }

function Message(props) {
    const { author, content, created_at } = props.message;
    const time = new Date(created_at).toLocaleDateString();
    return (
        <div className="message" >
            <div className="author">
                <p style={{ color: strToRGB(author) }}>{author} - {time}</p>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Message;
