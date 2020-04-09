import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import userRouter from './routers/userRouter';
import vidioRouter from './routers/vidioRouter';
import globalRouter from './routers/globalRouter';

const app = express();


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());

app.use('/', globalRouter);
app.use('/user', userRouter);
app.use('vidio', vidioRouter);


export default app;