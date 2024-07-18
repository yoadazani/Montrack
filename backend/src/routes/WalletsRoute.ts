import {Router} from "express";
import { isAuthenticated } from '../middlewares/isAuthenticated';
import { rateLimiter } from '../middlewares/rate-limiting';
import {cacheMiddleware} from "../middlewares/cache";
import {fetchAllWallets} from "../controllers/WalletsController";

declare module 'express-serve-static-core' {
    interface Request {
        locals: Record<string, unknown>;
    }
}

const router = Router();

router.route('/all').get(isAuthenticated, cacheMiddleware, rateLimiter, fetchAllWallets);

export default router;