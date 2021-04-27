"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var BranchService_1 = require("../service/BranchService");
var app = express();
var branchService = new BranchService_1.BranchService();
app.get("/branch", function (req, res) {
    res.send(branchService.getAllBranches());
});
// app.listen(9090);
