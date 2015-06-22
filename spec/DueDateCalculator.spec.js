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

        it("should throw an exception when not working day given", function () {
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

        it("should return the actual date and due time when submit date with 9AM time and lesser than 8 turnaround hours given", function () {
            expect(dueDateCalculator.calculateDueDate({
                submitDate: new Date('June 22, 2015 09:00:00'),
                turnaroundHours: 7
            })).to.be.eql(new Date('June 22, 2015 16:00:00'));
        });

        it("should return due date and time when submit date and time with greater than 8 turnaround hours given", function () {
            expect(dueDateCalculator.calculateDueDate({
                submitDate: new Date('June 22, 2015 09:00:00'),
                turnaroundHours: 11
            })).to.be.eql(new Date('June 23, 2015 12:00:00'));
        });

        it("should return the next working day when submit date is Friday and 8 turnaround hours given", function () {
            expect(dueDateCalculator.calculateDueDate({
                submitDate: new Date('June 26, 2015 09:00:00'),
                turnaroundHours: 8
            })).to.be.eql(new Date('June 29, 2015 09:00:00'));
        });

    });

});
    