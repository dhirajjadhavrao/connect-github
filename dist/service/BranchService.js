"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchService = void 0;
var BraanchDao_1 = require("../repository/BraanchDao");
var BranchService = /** @class */ (function () {
    function BranchService() {
    }
    BranchService.prototype.getAllBranches = function () {
        return BraanchDao_1.BRANCH_DATA;
    };
    BranchService.prototype.getBranchByName = function (name) {
        return BraanchDao_1.BRANCH_DATA.filter(function (branch) { return branch.name === name; });
    };
    BranchService.prototype.addBranchDetails = function (branch) {
        return BraanchDao_1.BRANCH_DATA.push(branch);
    };
    return BranchService;
}());
exports.BranchService = BranchService;
