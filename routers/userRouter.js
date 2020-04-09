import express from 'express';
import routes from '../routes';

const userRouter = express.Router();

userRouter.get(routes.home, (req, res) => res.send('home'));
userRouter.get(routes.join, (req, res) => res.send('join'));
userRouter.get(routes.login, (req, res) => res.send('login'));
userRouter.get(routes.logout, (req, res) => res.send('logout'));
userRouter.get(routes.search, (req, res) => res.send('search'));

export default userRouter;

