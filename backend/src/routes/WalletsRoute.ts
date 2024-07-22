import {Router} from "express";
import {cacheMiddleware} from "../middlewares/cache";
import {fetchAllWallets, fetchSingleWallet, updateWallet} from "../controllers/WalletsController";

declare module 'express-serve-static-core' {
    interface Request {
        locals: Record<string, unknown>;
    }
}

const router = Router();

router.route('/all').get(cacheMiddleware, fetchAllWallets);

router.route('/:walletId')
    .get(cacheMiddleware, fetchSingleWallet)
    .put(cacheMiddleware, updateWallet);

export default router;