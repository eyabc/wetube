import express from 'express';
import routes from '../routes';

const videoRouter = express.Router();

videoRouter.get(routes.videos ,(req, res) => res.send('videos'));
videoRouter.get(routes.videoDetail ,(req, res) => res.send('videoDetail'));
videoRouter.get(routes.videoUpload ,(req, res) => res.send('videoUpload'));
videoRouter.get(routes.deleteVideo ,(req, res) => res.send('deleteVideo'));
videoRouter.get(routes.editVideo ,(req, res) => res.send('editVideo'));

export default videoRouter;


