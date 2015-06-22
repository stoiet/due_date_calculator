"use strict";

function DueDateCalculator () {}

DueDateCalculator.prototype = {
    calculateDueDate : function (problemDateParameters) {
        if (!this._isWorkingHours(problemDateParameters.submitDate))
            throw new Error('Submit date is not a working day!');
    },
    _isWorkingHours: function (submitDate) {
        return (submitDate.getHours() > 8) && (submitDate.getHours() < 17);
    }
};

module.exports = DueDateCalculator;