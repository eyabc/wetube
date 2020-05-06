import routes from './routes';
import multer from 'multer';

const multerVideo = multer({ dest: 'upload/videos/' });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = 'WeTube';
  res.locals.routes = routes;
  res.locals.user = {
    authenticated: false,
    id: 1,
  };
  next();
};

export const uploadVideo = multerVideo.single('videoFile');