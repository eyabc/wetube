import { videos } from '../db'

export const home = (req, res) => res.render('Home', { pageTitle: "Home", videos });
export const search = (req, res) => {
  const { query: { term: searchingFor } } = req;
  res.render('Search', { pageTitle: "Search", searchingFor: term, videos });
};
export const videoUpload = (req, res) => res.render('VideoUpload', { pageTitle: "VideoUpload" });
export const videoDetail = (req, res) => res.render('VideoDetail', { pageTitle: "VideoDetail" });
export const editVideo = (req, res) => res.render('EditVideo', { pageTitle: "EditVideo" });
export const deleteVideo = (req, res) => res.render('DeleteVideo', { pageTitle: "DeleteVideo" });