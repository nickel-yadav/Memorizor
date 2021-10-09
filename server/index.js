import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoute from './routes/posts.js';

const app = express();
dotenv.config();

app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(express.json({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoute);

app.get('/', (req, res) => {
    res.send('Welcome to the Memorizor');
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);