"use strict";

function DueDate (date) {
    this.date = date;
}

DueDate.fromSubmitDate = function (submitDate) {
    return new DueDate (submitDate);
};

DueDate.prototype = {
    get getDate() { return this.date; },
    increaseWithHours: function (turnaroundHours) {
        this._setNextWorkingDay(turnaroundHours);
        this._setNextWorkingDayTime(turnaroundHours);
    },
    _setNextWorkingDay: function (turnaroundHours) {
        if (this._isTodayFriday()) this.date.setDate(this.date.getDate() + 2);
        this.date.setDate(this.date.getDate() + (turnaroundHours / 8));
    },
    _setNextWorkingDayTime: function (turnaroundHours) {
        this.date.setHours(this.date.getHours() + (turnaroundHours % 8));
    },
    _isTodayFriday: function () {
        return this.date.getDay() === 5;
    }
};

module.exports = DueDate ;