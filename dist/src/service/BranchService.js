"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Branch_1 = require("../model/Branch");
var BRANCH_DATA = [
    new Branch_1.Branch(1, 100, "Satara City Branch", "Satara"),
    new Branch_1.Branch(2, 101, "Pune nagari", 'Pune'),
    new Branch_1.Branch(3, 102, "KBP", "Wai")
];
var BranchService = /** @class */ (function () {
    function BranchService() {
    }
    BranchService.prototype.getAllBranches = function () {
        return BRANCH_DATA;
    };
    return BranchService;
}());
exports.BranchService = BranchService;
