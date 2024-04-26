import express from 'express';
import { Request, Response } from 'express';

const app = express();
const port = 8080;

app.get('/', (req:Request, res:Response) => {
    res.send('Hello, world!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});