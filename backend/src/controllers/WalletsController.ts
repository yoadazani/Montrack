import {Request, Response} from 'express';
import * as walletsModule from '../modules/WalletsModule'
import {AuthError} from "../errors/AuthError";
import {ValidationError} from "../errors/ValidationError";

const fetchAllWallets = async (req: Request, res: Response) => {
    const {userId} = req.locals

    if (!userId) throw new ValidationError('No userId found', 'userId')

    const wallets = await walletsModule.fetchAll(userId as string)

    if (wallets == null) throw new AuthError('Unfortunately you not authenticate')

    res.status(200).json(wallets);
}

export {fetchAllWallets}
