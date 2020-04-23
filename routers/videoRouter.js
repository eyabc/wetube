import express from 'express';
import routes from '../routes';
import {
  getVideoUpload,
  postVideoUpload,
  videoDetail,
  deleteVideo,
  getEditVideo,
  postEditVideo,
} from '../controllers/videoController';
import { uploadVideo } from '../middlewares';

const videoRouter = express.Router();

videoRouter.get(routes.videoUpload, getVideoUpload);
videoRouter.post(routes.videoUpload, uploadVideo, postVideoUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;


