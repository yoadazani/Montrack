import Prisma from '../utils/PrismaClient';
import {WalletType} from "../types/WalletType";
import * as authService from "../services/auth";

const fetchAll = async (userId: string): Promise<WalletType[] | null> => {
    try {
        const user = await authService.getUser('id', userId)

        if (!user) return null

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