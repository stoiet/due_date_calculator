"use strict";

var expect = require("chai").expect;
var DueDateCalculator = require("../src/DueDateCalculator.js");

describe("DueDateCalculator", function () {

    describe("#calculateDueDate", function () {

        it("should throw an exception when not working hours given", function () {
            var duedateCalculator = new DueDateCalculator();
            expect(duedateCalculator.calculateDueDate.bind(duedateCalculator, {
                submitDate: new Date('June 22, 2015 18:00:00'),
                turnaroundHours: 0
            })).to.throw('Invalid submit date!');
        });

        it("should throw an exception when not working hours given", function () {
            var duedateCalculator = new DueDateCalculator();
            expect(duedateCalculator.calculateDueDate.bind(duedateCalculator, {
                submitDate: new Date('June 27, 2015 09:00:00'),
                turnaroundHours: 0
            })).to.throw('Invalid submit date!');
        });

    });

});
    