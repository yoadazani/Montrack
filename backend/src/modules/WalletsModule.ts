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

export {
    fetchAll
}