import express from 'express';
import routes from '../routes';

const globalRouter = express.Router();

globalRouter.get(routes.users, (req, res) => res.send('users'));
globalRouter.get(routes.userDetail, (req, res) => res.send('userDetail'));
globalRouter.get(routes.editProfile, (req, res) => res.send('editProfile'));
globalRouter.get(routes.changePassword, (req, res) => res.send('changePassword'));

export default globalRouter;