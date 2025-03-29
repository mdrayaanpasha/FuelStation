"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BuyersAuthControllers_1 = require("../../controllers/BuyersAuth/BuyersAuthControllers");
const BuyersAuth = (0, express_1.Router)();
BuyersAuth.post('/register', BuyersAuthControllers_1.registerBuyer);
BuyersAuth.post('/login', BuyersAuthControllers_1.loginBuyer);
exports.default = BuyersAuth;
