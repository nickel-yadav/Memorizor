import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoute from './routes/posts.js';

const app = express();

app.use('/posts', postRoute);

app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(express.json({limit: "30mb", extended: true}));

const CONNECTION_URL = 'mongodb+srv://mitnick:gHyoPJeTtmdk1zay@nick-cluster.u7ruw.mongodb.net/test?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);