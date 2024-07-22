import { Express } from 'express';

import authRoute from '../AuthRoute';
import defaultRoute from '../DefaultRoute';
import { errorHandler } from '../../middlewares/errorHandler';
import walletsRoute from "../WalletsRoute";
import {isAuthenticated} from "../../middlewares/isAuthenticated";
import {rateLimiter} from "../../middlewares/rate-limiting";

export const declareRoutes = (app: Express) => {
    app.use('/', defaultRoute);

    app.use('/api/v1/auth',rateLimiter, authRoute);
    app.use('/api/v1/wallets', isAuthenticated, rateLimiter, walletsRoute);

    app.use('*', errorHandler);
};
