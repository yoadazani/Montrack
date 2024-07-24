import * as walletsModule from '../modules/WalletsModule'

const findWallet = async (walletId: string) => {
    return walletsModule.fetchSingle(walletId)
}

export {
    findWallet
}