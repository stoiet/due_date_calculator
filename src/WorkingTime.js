"use strict";

function WorkingTime () {}

WorkingTime.isWorkingHours = function (submitDateHours) {
        return (submitDateHours > 8) && (submitDateHours < 17);
};

WorkingTime.isWorkingDay = function (submitDateDay) {
        return (submitDateDay > 0) && (submitDateDay < 6);
    }
};

module.exports = DueDateCalculator;