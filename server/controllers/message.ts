import {RequestHandler} from 'express';

import Message from '../models/message';

const messages: Message[] = [];     //fake database

export const getMessages: RequestHandler = (request, response, _next) => {
    response.json(messages);
};

export const createMessage: RequestHandler = (request, response, _next) => {
    const body = request.body as {name: string, text: string};
    if(body.name === '') {
        response.status(400)
                .json({message: 'Name cannot be empty.'});
                
        return;
    }
    if(body.text === '') {
        response.status(400)
                .json({message: 'Text cannot be empty.'});
        
        return;
    }

    const newMessage = new Message(messages.length, body.name, body.text);

    messages.push(newMessage);

    response.status(201)
            .json({message: 'Created message.', newMessage: newMessage});
};