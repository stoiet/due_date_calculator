"use strict";

var DueDate = require("./DueDate.js");

function DueDateCalculator () {
    this.dueDate = null;
}

DueDateCalculator.prototype = {
    calculateDueDate : function (problemDateParameters) {
        this._createDueDateFromValidSubmitDate(problemDateParameters.submitDate);
        this.dueDate.increaseWithHours(problemDateParameters.turnaroundHours);
        return this.dueDate.getDate;
    },
    _createDueDateFromValidSubmitDate: function (submitDate) {
        this._validateSubmitDate(submitDate);
        this.dueDate = DueDate.fromSubmitDate(submitDate);
    },
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

module.exports = DueDateCalculator;