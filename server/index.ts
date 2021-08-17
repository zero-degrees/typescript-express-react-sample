import express, {Request, Response, NextFunction as ExpressNextFunction} from 'express';
import {json} from 'body-parser';

import messageRoutes from './routes/message';

const app = express();

app.use(json());
app.use(function(request: Request, response: Response, next: ExpressNextFunction) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/message', messageRoutes);
app.use((error: Error, request: Request, response: Response, next: ExpressNextFunction) => {
    console.error(error.stack);
    response.status(500).json({message: error.message});
});
app.use((request: Request, response: Response, next: ExpressNextFunction) => {
    response.status(404).json({message: "404 not found."});
});
app.listen(3001);