
function home(req, res) {
  res.render("index");
} 
function signup(req, res) {
  res.render("signup");
}
function profile(req, res) {
  res.render("profile");
}
module.exports = {
  home: home,
  profile: profile,
  signup: signup
};
