"use strict";

var DueDate = require("./DueDate.js");

function DueDateCalculator () {
    this.dueDate = null;
}

DueDateCalculator.prototype = {
    calculateDueDate : function (problemDateParameters) {
        this.dueDate = DueDate.fromSubmitDate(problemDateParameters);
    }
};

module.exports = DueDateCalculator;