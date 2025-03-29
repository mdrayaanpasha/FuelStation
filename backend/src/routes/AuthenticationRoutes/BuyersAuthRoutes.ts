import { Router } from 'express';
import { registerBuyer, loginBuyer } from "../../controllers/BuyersAuth/BuyersAuthControllers";


const BuyersAuth = Router();

BuyersAuth.post('/register', registerBuyer);
BuyersAuth.post('/login', loginBuyer);


export default BuyersAuth;