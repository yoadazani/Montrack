import {Request, Response} from 'express';
import * as walletsModule from '../modules/WalletsModule'

const fetchAllWallets = async (req: Request, res: Response) => {
    const {userId} = req.locals

    const wallets = await walletsModule.fetchAll(userId as string)

    res.status(200).json({wallets: wallets ?? []});
}

export {fetchAllWallets}
