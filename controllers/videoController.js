import routes from '../routes'
import Video from '../models/Video';

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render('Home', { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render('Home', { pageTitle: "Home", videos: [] })
  }
}
export const search = (req, res) => {
  const { query: { term = searchingFor } } = req;
  res.render('Search', { pageTitle: "Search", searchingFor: term, videos });
};
export const getVideoUpload = (req, res) => res.render('VideoUpload', { pageTitle: "VideoUpload" });
export const postVideoUpload = (req, res) => {
  const { body:
    { title, file, description}
  } = req;
  res.redirect(routes.videoDetail(324393))
}
export const videoDetail = (req, res) => res.render('VideoDetail', { pageTitle: "VideoDetail" });
export const editVideo = (req, res) => res.render('EditVideo', { pageTitle: "EditVideo" });
export const deleteVideo = (req, res) => res.render('DeleteVideo', { pageTitle: "DeleteVideo" });