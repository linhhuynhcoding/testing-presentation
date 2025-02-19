import express from 'express';
import { Request, Response } from 'express';

import { User } from './user.model';

const app = express();
app.use(express.json());

app.get('/api/users', async (req: Request, res: Response) => {
    try {

        const users = await User.findAll();

        res.send(users);
    }
    catch (err) {

        res.status(500).json({
            msg: 'Internal Server Error'
        })
    }
})

export { app, User };