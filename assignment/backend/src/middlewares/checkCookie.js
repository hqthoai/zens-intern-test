const { v4: uuidv4 } = require('uuid');
const calAgeCookie = require("../utils/calAgeCookie");

const checkCookie = (req, res, next) => {
    if (!user) {
        console.log('chưa có cookie nè');
        const newUser = uuidv4();
        const maxAge = calAgeCookie();
        res.cookie('user', newUser, { maxAge: maxAge, sameSite: 'none', });
        return res.redirect(req.originalUrl);
    }
    next();
};

module.exports = checkCookie;