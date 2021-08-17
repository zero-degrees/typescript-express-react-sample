import React, {useRef, useState} from 'react';
import './NewMessage.css';

interface NewMessageProps {
    addMessage: Function
}

const NewMessage: React.FC<NewMessageProps> = props => {
    const nameRef = useRef<HTMLInputElement>(null);
    const textRef = useRef<HTMLInputElement>(null);
    
    const [showNameError, setShowNameError] = useState<boolean>(false);
    const [showMessageError, setShowMessageError] = useState<boolean>(false);
    
    function submitHandler(e: React.FormEvent) {
        e.preventDefault();

        const name: string = nameRef.current!.value;
        const text: string = textRef.current!.value;

        var hasError = false;
        if(name === '') {
            hasError = true;
            setShowNameError(true);
        }
        else {
            setShowNameError(false);
        }
        if(text === '') {
            hasError = true;
            setShowMessageError(true);
        }
        else {
            setShowMessageError(false);
        }
        
        if(!hasError) {
            props.addMessage(name, text);

            var form: HTMLFormElement = document.getElementById('new-message-form') as HTMLFormElement;
            
            form?.reset();
        }
    }

    function nameChangeHandler() {
        setShowNameError(nameRef.current!.value === '');
    }

    function messagechangeHandler() {
        setShowMessageError(textRef.current!.value === '');
    }

    return (
        <form onSubmit={submitHandler} id="new-message-form">
            <div className={`input-section ${showNameError ? 'error' : ''}`}>
                <div><label htmlFor="name">Name</label></div>
                <div className="error-msg">Please enter your name.</div>
                <div><input type="text" id="name" ref={nameRef} onChange={nameChangeHandler} /></div>
            </div>
            <div className={`input-section ${showMessageError ? 'error' : ''}`}>
                <div><label htmlFor="text">Message</label></div>
                <div className="error-msg">Please enter a message.</div>
                <div><input type="textarea" id="text" ref={textRef} onChange={messagechangeHandler} /></div>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default NewMessage;