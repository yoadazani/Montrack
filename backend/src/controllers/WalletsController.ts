import {Request, Response} from 'express';
import * as walletsModule from '../modules/WalletsModule'
import {NotFoundError} from "../errors/NotFoundError";

const fetchAllWallets = async (req: Request, res: Response) => {
    const {userId} = req.locals

    const wallets = await walletsModule.fetchAll(userId as string)

    res.status(200).json({wallets: wallets ?? []});
}


const fetchSingleWallet = async (req: Request, res: Response) => {
    const {walletId} = req.params

    const wallet = await walletsModule.fetchSingle(walletId)

    if (!wallet) {
        throw new NotFoundError(`Wallet ${walletId} not found`)
    }

    res.status(200).json(wallet);
}

export {fetchAllWallets, fetchSingleWallet}
