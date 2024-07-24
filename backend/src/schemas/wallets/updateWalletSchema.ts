import joi from 'joi';

const newWalletSchema = joi.object({
    userId: joi.string().allow(null).optional(),
    budgetId: joi.string().allow(null).optional(),
    description: joi.string().allow(null).optional(),
    amount: joi.number().optional(),
    attachment: joi.string().allow(null).optional(),
    created_at: joi.date().optional(),
    updated_at: joi.date().optional(),
});

export const updateWalletSchema = joi.object({
    newData: newWalletSchema.required(),
    csrfToken: joi.string().required(),
});