import routes from '../routes';
import Video from '../models/Video';

export const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ _id: -1 });
    res.render('Home', { pageTitle: 'Home', videos });
  } catch (error) {
    console.log(error);
    res.render('Home', { pageTitle: 'Home', videos: [] });
  }
};
export const search = (req, res) => {
  const { query: { term = searchingFor } } = req;
  console.log();
  res.render('Search', { pageTitle: 'Search', searchingFor: term, videos });
};
export const getVideoUpload = (req, res) => res.render('VideoUpload', { pageTitle: 'VideoUpload' });
export const postVideoUpload = async (req, res) => {
  const {
    body:
      { title, description },
    file: { path },
  } = req;

  try {
    const newVideo = await Video.create({
      title,
      description,
      fileUrl: path,
    });
    res.redirect(routes.videoDetail(newVideo.id));
  } catch (error) {
    console.log(error);
  }
};
export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render('VideoDetail', { pageTitle: 'VideoDetail', video });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};
export const getEditVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render('EditVideo', { pageTitle: `Edit ${ video.title }`, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;
  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }

};
export const deleteVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Video.findOneAndRemove({ _id: id });
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};