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
        this._setNextWorkingDayTime(turnaroundHours);
    },
    _setNextWorkingDayTime: function (turnaroundHours) {
        this.date.setHours(this.date.getHours() + (turnaroundHours % 8));
    }
};

module.exports = DueDate ;