"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BranchService_1 = require("./service/BranchService");
var express = require("express");
var app = express();
/*
var ser = new BranchService();

// console.log(ser.getAllBranches());

console.log(ser.getBranchByName("KBP"));
console.log(ser.addBranchDetails(new Branch(4,104,"Att","Bhuinj")));
// console.log(ser.getAllBranches());
*/
var branchService = new BranchService_1.BranchService();
app.get("/branch", function (req, res) {
    res.send(branchService.getAllBranches());
});
app.get("/branch/:name", function (req, res) {
    var name = req.params.name;
    res.send(branchService.getBranchByName(name));
});
app.post('/branch', function (req, res) {
    console.log(req.body);
});
app.listen(9090);
