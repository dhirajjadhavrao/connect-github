"use strict";
exports.__esModule = true;
var _ = require("lodash");
var arr = [1, 2, 4, 6, 3, 7];
console.log(_.reverse(arr));
console.log(_.sortBy(arr, function (el) { return el; }));
