import {useState, useEffect} from 'react';
import Axios, {AxiosError} from 'axios';

import Message from './Message';
import NewMessage from './components/NewMessage';
import MessageList from './components/MessageList';
import './App.css';

function App() {
    const [messages, setMessages] = useState<Message[]>([]);

    function addMessageHandler(name: string, text: string) {
        Axios.post('http://localhost:3001/message', {name, text})
                .then(response => {
                    setMessages([...messages, response.data.newMessage]);
                })
                .catch((error: AxiosError) => {
                    alert(error.response?.data.message);
                });
    }

    function getMessages() {
        Axios.get('http://localhost:3001/message')
                .then(response => {
                    setMessages(response.data);
                })
                .catch((error: AxiosError) => {
                    console.error("Failed to retrieve messages: " + error.response?.data.message);
                });
    }

    useEffect(() => {
        getMessages();
        const handle: NodeJS.Timeout = setInterval(getMessages, 1000);

        return () => clearInterval(handle);
    }, []);

    return (
        <div className="App">
            <NewMessage addMessage={addMessageHandler} />
            <MessageList messages={messages} />
        </div>
    );
}

export default App;
