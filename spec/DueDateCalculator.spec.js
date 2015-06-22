"use strict";

var expect = require("chai").expect;
var DueDateCalculator = require("../src/DueDateCalculator.js");

describe("DueDateCalculator", function () {

    describe("#calculateDueDate", function () {

        var dueDateCalculator;

        beforeEach(function () {
            dueDateCalculator = new DueDateCalculator();
        });

        it("should throw an exception when not working hours given", function () {
            expect(dueDateCalculator.calculateDueDate.bind(dueDateCalculator, {
                submitDate: new Date('June 22, 2015 18:00:00')
            })).to.throw('Invalid submit date!');
        });

        it("should throw an exception when not working hours given", function () {
            expect(dueDateCalculator.calculateDueDate.bind(dueDateCalculator, {
                submitDate: new Date('June 27, 2015 09:00:00')
            })).to.throw('Invalid submit date!');
        });

        it("should return the actual date and time when submit date and zero turnaround hour given", function () {
            var actualDate = new Date();
            expect(dueDateCalculator.calculateDueDate({
                submitDate: actualDate,
                turnaroundHours: 0
            })).to.be.eql(actualDate);
        });

    });

});
    