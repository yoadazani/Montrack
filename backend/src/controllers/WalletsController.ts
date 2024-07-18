import { Request, Response } from 'express';
import {WalletType} from "../types/WalletType";

const fetchAllWallets = async (req: Request, res: Response) => {
    try {
        const wallets: WalletType[] = [];
        // TODO: Call to function from modules to fetch wallets from database here
        res.status(200).json(wallets);
    } catch (error) {
        res.status(500).json(error);
    }
}

export {fetchAllWallets}
