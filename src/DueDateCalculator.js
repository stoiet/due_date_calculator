"use strict";

function DueDateCalculator () {}

DueDateCalculator.prototype = {
    calculateDueDate : function (problemDateParameters) {
        if (!this._isWorkingHours(problemDateParameters.submitDate))
            throw new Error('Invalid submit date!');

        if (!this._isWorkingDay(problemDateParameters.submitDate))
            throw new Error('Invalid submit date!');
    },
    _isWorkingHours: function (submitDate) {
        return (submitDate.getHours() > 8) && (submitDate.getHours() < 17);
    },
    _isWorkingDay: function (submitDate) {
        return (submitDate.getDay() > 0) && (submitDate.getDay() < 6);
    }
};

module.exports = DueDateCalculator;