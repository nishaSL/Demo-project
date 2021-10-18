const dbConn = require("../databases/sqlite.js"); 
const User = dbConn.User;
function signup(req, res) {
    const { name, email, password } = req.body;         
    if (!(name && email && password))                   
      return res.render("signup", {                     
        msg: "Please enter all the required details"
      });
    else {
      User.create({           
        name,
        email,
        password
      })
        .then(user => {       
          if (user) {
            console.log(user);
            return res.render("index", {        
              msg: "User successfully created",
              user: user.name
            });
          }
        })
        .catch(err => {
          return res.render("index", { msg: "Error in creating user" });
        });
    }
  }
  module.exports = {
    signup: signup
  };
