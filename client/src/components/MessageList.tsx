import React from 'react';

import Message from '../Message';
import MessageDetail from './MessageDetail';
import './MessageList.css';

interface MessageListProps {
    messages: Message[]
}

const MessageList: React.FC<MessageListProps> = props => {
    const renderedMessages = props.messages.map((message: Message) => (
        <MessageDetail key={message.id} message={message} />
    ));

    return (
        <ul className="message-list">{renderedMessages}</ul>
    );
};

export default MessageList;