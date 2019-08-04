import express from 'express';
import mongoose from 'mongoose';

import { mongoURI as db } from './config/keys';
import users from './routes/api/users';
import profile from './routes/api/profile';
import posts from './routes/api/posts';


const app = express();

mongoose.connect(db, { useNewUrlParser: true })
.then(() =>console.log('connected to mongodb atlas'))
.catch(err => console.log(err));

app.get('/', (req, res) => {
    res.json({message: "connected"})
});

app.use('/api/v1/users', users);
app.use('/api/v1/profile', profile);
app.use('/api/v1/posts', posts);

const port = process.env.PORT || 7000;

app.listen({ port }, () => {
    console.log(`app running on port ${port}`);
});