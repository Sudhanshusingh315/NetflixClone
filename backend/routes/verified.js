const jwt = require("jsonwebtoken");

function verify(req, res, next) {
  
  console.log("this is coming from verify.js ",req.headers);
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) res.status(403).json("token is invalid");
      // this token will has my id
      // this is creating a custom key in res obj with name user and user is something that has my id for now
      req.user = user;
      next();
    });
  }
  else{
    res.status(401).send("You are not authorised")
  }
}

module.exports = verify;
