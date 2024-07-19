export type WalletType = {
    id: string
    userId?: string | null
    budgetId?: string | null
    description?: string | null
    amount: number
    attachment?: string | null
    created_at: Date
    updated_at: Date
}
