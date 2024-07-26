import joi from "joi";

export const deleteWalletSchema = joi.object({
    csrfToken: joi.string().required(),
})