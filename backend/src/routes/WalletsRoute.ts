import {Router} from "express";
import { isAuthenticated } from '../middlewares/isAuthenticated';
import { rateLimiter } from '../middlewares/rate-limiting';
import {cacheMiddleware} from "../middlewares/cache";
import {fetchAllWallets, fetchSingleWallet} from "../controllers/WalletsController";

declare module 'express-serve-static-core' {
    interface Request {
        locals: Record<string, unknown>;
    }
}

const router = Router();

router.route('/all').get(cacheMiddleware, rateLimiter, fetchAllWallets);

router.route('/:walletId').get(cacheMiddleware, rateLimiter, fetchSingleWallet);

export default router;