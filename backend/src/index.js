"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get("/", function (req, res) {
    res.send("Hello, TypeScript with Express!");
});
app.listen(PORT, function () {
    console.log("\u26A1 Server running at http://localhost:".concat(PORT));
});
