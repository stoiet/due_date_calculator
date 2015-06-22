"use strict";

function DueDate (date) {
    this._validateSubmitDate(date);
    this.date = date;
}

DueDate.fromSubmitDate = function (submitDate) {
    return new DueDate (submitDate);
};

DueDate .prototype = {
    get getDate() { return this.date; },
    _validateSubmitDate: function (submitDate) {
        if (!this._isWorkingHours(submitDate.getHours()) || !this._isWorkingDay(submitDate.getDay()))
            throw new Error('Invalid submit date!');
    },
    _isWorkingHours: function (submitDateHours) {
        return (submitDateHours > 8) && (submitDateHours < 17);
    },
    _isWorkingDay: function (submitDateDay) {
        return (submitDateDay > 0) && (submitDateDay < 6);
    }
};

module.exports = DueDate ;