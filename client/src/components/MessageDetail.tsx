import React from 'react';

import Message from '../Message';
import './MessageDetail.css';

interface MessageDetailProps {
    message: Message
}

const MessageDetail: React.FC<MessageDetailProps> = props => {
    const message: Message = props.message;

    return (
        <li key={message.id} className="message-detail">
            <h4 className="message-name-label">Name:</h4>
            <div>{message.name}</div>
            <h4 className="message-body-label">Message:</h4>
            <div>{message.text}</div>
        </li>
    );
};

export default MessageDetail;