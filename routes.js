// Global
const HOME = '/',
  JOIN = '/join',
  LOGIN = '/login',
  LOGOUT = '/logout',
  SEARCH = '/search';

// User
const USERS = '/users',
  USER_DETAIL = '/:id',
  EDIT_PROFILE = '/edit-profile',
  CHANGE_PASSWORD = '/change-password';

// Video
const VIDEOS = '/videos',
  VIDEO_DETAIL = '/:id',
  UPLOAD_VIDEO = '/upload',
  DELETE_VIDEO = '/:id/delete',
  EDIT_VIDEO = '/:id/edit';

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,

  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,

  videos: VIDEOS,
  videoDetail: VIDEO_DETAIL,
  videoUpload: UPLOAD_VIDEO,
  deleteVideo: DELETE_VIDEO,
  editVideo: EDIT_VIDEO,
};

export default routes;