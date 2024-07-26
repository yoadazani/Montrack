import * as walletsModule from '../modules/WalletsModule'
import {NotFoundError} from "../errors/NotFoundError";
import {WalletType} from "../types/WalletType";

const findWallet = async (walletId: string) => {
    const wallet = await walletsModule.fetchSingle(walletId)

    if (!wallet) {
        throw new NotFoundError(`Wallet ${walletId} not found`)
    }

    return wallet as WalletType
}

export {
    findWallet
}