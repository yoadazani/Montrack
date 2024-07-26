import Prisma from '../utils/PrismaClient';
import {WalletType} from "../types/WalletType";

const fetchAll = async (userId: string): Promise<WalletType[] | null> => {
    try {
        return await Prisma.wallet.findMany({
            where: {
                userId
            }
        })
    } catch (error: unknown) {
        const err = error as Error
        throw new Error(`Error fetching wallets data => ${err.message}`)
    }
}

const fetchSingle = async (walletId: string): Promise<WalletType | null> => {
    try {
        return await Prisma.wallet.findUnique({
            where: {
                id: walletId
            }
        })
    } catch (error: unknown) {
        const err = error as Error
        throw new Error(`Error fetching wallet data => ${err.message}`)
    }
}

const updateSingle = async (walletId: string, data: Partial<WalletType>): Promise<WalletType | null> => {
    try {
        return await Prisma.wallet.update({
            where: {
                id: walletId
            },
            data
        })
    } catch (error: unknown) {
        const err = error as Error
        throw new Error(`Error updating wallet data => ${err.message}`)
    }
}

const deleteSingle = async (walletId: string): Promise<WalletType | null> => {
    try {
        return await Prisma.wallet.delete({
            where: {
                id: walletId
            }
        })
    } catch (error: unknown) {
        const err = error as Error
        throw new Error(`Error deleting wallet data => ${err.message}`)
    }
}

export {
    fetchAll,
    fetchSingle,
    updateSingle,
    deleteSingle
}