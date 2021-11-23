"use strict";

const sum = require("../src/index");
let hD = {}; // object

describe("sum()", () => {
	/* SETUP + TEARDOWN */

	// not needed today...

	/* VALIDATIONS */

	describe("sum(a,b) works with integers", () => {
		it("sum(2,3) returns 5", () => {
			expect(sum(2, 3)).toBe(5);
		});

		it("sum(-2,-3) returns -5", () => {
			expect(sum(-2, -3)).toBe(-5);
		});

		it("sum(2,-3) returns -5", () => {
			expect(sum(2, -3)).toBe(-1);
		});
	});
});
