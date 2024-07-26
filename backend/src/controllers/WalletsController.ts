import {Request, Response} from 'express';
import {ValidationResult} from "joi";
import * as walletsModule from '../modules/WalletsModule'
import {NotFoundError} from "../errors/NotFoundError";
import {updateWalletSchema} from "../schemas/wallets/updateWalletSchema";
import {ValidationError} from "../errors/ValidationError";
import * as walletsService from "../services/wallets";
import {ResponseType} from "../types/ResponseType";
import {WalletType} from "../types/WalletType";
import {HttpStatusCodes} from "../constants/httpStatusCodes";

const fetchAllWallets = async (req: Request, res: Response) => {
    const {userId} = req.locals

    const wallets = await walletsModule.fetchAll(userId as string)

    res.status(HttpStatusCodes.OK).json({wallets: wallets ?? []});
}

const fetchSingleWallet = async (req: Request, res: Response) => {
    const {walletId} = req.params

    const wallet = await walletsService.findWallet(walletId)

    res.status(HttpStatusCodes.OK).json(wallet);
}

const updateWallet = async (req: Request, res: Response) => {
    const {walletId} = req.params
    const {newData} = req.body

    const validated: ValidationResult = updateWalletSchema.validate(req.body);

    if (validated.error) {
        const errorMessage = validated.error.message;
        const errorProperty = validated.error.details[0].path[0];

        throw new ValidationError(errorMessage, errorProperty as string);
    }

    // check if wallet exists
    await walletsService.findWallet(walletId)

    const updatedWallet = await walletsModule.updateSingle(walletId, newData)

    if (!updatedWallet) throw new Error(`Failed to update wallet ${walletId}`)

    const response: ResponseType<{ updatedWallet: WalletType}> = {
        message: 'Wallet updated successfully!',
        data: {
            updatedWallet,
        },
    };

    res.status(HttpStatusCodes.OK).json(response);
}

const deleteWallet = async (req: Request, res: Response) => {
    const {walletId} = req.params

    // check if wallet exists
    await walletsService.findWallet(walletId)

    const deletedWallet = await walletsModule.deleteSingle(walletId)

    if (!deletedWallet) throw new Error(`Failed to delete wallet ${walletId}`)

    const response: ResponseType<{ deletedWallet: WalletType}> = {
        message: 'Wallet deleted successfully!',
        data: {
            deletedWallet,
        },
    };

    res.status(HttpStatusCodes.OK).json(response);
}

export {fetchAllWallets, fetchSingleWallet, updateWallet, deleteWallet}
