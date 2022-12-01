var auth = function(req, res, next) {
    if (req.session && req.session.user === "admin" && req.session.admin)
      return next();
    else
      return res.sendStatus(401);
};

module.exports = auth;