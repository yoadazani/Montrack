import { Express } from 'express';

import authRoute from '../AuthRoute';
import defaultRoute from '../DefaultRoute';
import { errorHandler } from '../../middlewares/errorHandler';
import walletsRoute from "../WalletsRoute";
import {isAuthenticated} from "../../middlewares/isAuthenticated";

export const declareRoutes = (app: Express) => {
    app.use('/', defaultRoute);

    app.use('/api/v1/auth', authRoute);
    app.use('/api/v1/wallets', isAuthenticated, walletsRoute);

    app.use('*', errorHandler);
};
