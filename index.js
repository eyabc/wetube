import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser form 'body-parser';

const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);
const handleHome = (req, res) => res.send('home!');
const handleProfile = (req, res) => res.send('profile!');

app.use(cookieParser());
app.use(bodyParser().json());
app.use(bodyParser().urlencoded({ extended: true }));
/*
* HTTP request logger middleware for node.js
* options: tiny, combind, common, dev
*/
app.use(morgan('dev'));

/* Helmet helps you secure your Express apps by setting various HTTP headers */
app.use(helmet());

app.get('/profile', handleProfile);


app.listen(PORT, handleListening);