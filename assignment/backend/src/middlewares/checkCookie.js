const { v4: uuidv4 } = require('uuid');
const calAgeCookie = require("../utils/calAgeCookie");

const checkCookie = (req, res, next) => {
    const user = req.cookies.user;
    console.log('user', user);
    if (!user) {
        console.log('chưa có cookie nè');
        console.log(req.originalUrl);
        const newUser = uuidv4();
        const maxAge = calAgeCookie();
        res.cookie('user', newUser, { maxAge: maxAge });
        return res.redirect(req.originalUrl);
    }
    next();
};

module.exports = checkCookie;