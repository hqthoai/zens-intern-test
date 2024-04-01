const moment = require('moment');

const calAgeCookie = () => {
    const currentDate = moment().local();
    const endOfDayDate = moment(currentDate).endOf('day');
    const maxAge = endOfDayDate.diff(currentDate);
    return maxAge;
}
module.exports = calAgeCookie;