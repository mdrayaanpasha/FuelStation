import { Router } from 'express';
import { loginSeller,registerSeller } from '../../controllers/SellersAuth/SellersAuthController';

const SellersAuth = Router();

SellersAuth.post('/register', registerSeller);
SellersAuth.post('/login', loginSeller);


export default SellersAuth;