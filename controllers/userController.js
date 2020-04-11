import routes from '../routes';
export const getJoin = (req, res) => {
  res.render('Join', { pageTitle: "Join"} );
}
export const postJoin = (req, res) => {
  const {
    body: {name, email, password, password2}
  } = req;
  if (password === password2) {
    // TODO Login user
    // TODO Register User
    res.redirect(routes.home)
  } else {
    res.status(400)
    res.render("join", { pageTitle: "Join"})
  }
}


export const getLogin = (req, res) => res.render('Login', { pageTitle: "Login"});
export const postLogin = (req, res) => {
  res.redirect(routes.home)
}

export const logout = (req, res) => res.render('Logout', { pageTitle: "Logout"});
export const users = (req, res) => res.render('Users', { pageTitle: "Users"});
export const userDetail = (req, res) => res.render('UserDetail', { pageTitle: "UserDetail"});
export const editProfile = (req, res) => res.render('EditProfile', { pageTitle: "EditProfile"});
export const changePassword = (req, res) => res.render('ChangePassword', { pageTitle: "ChangePassword"});