"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SellersAuthController_1 = require("../../controllers/SellersAuth/SellersAuthController");
const SellersAuth = (0, express_1.Router)();
SellersAuth.post('/register', SellersAuthController_1.registerSeller);
SellersAuth.post('/login', SellersAuthController_1.loginSeller);
exports.default = SellersAuth;
