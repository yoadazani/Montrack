export type FormFields = {
    [key: string]: FormField
}

export type FormField = {
    type: 'text' | 'email'
    label: string
    options: TextOrEmailOptions
} | {
    type: 'password'
    label: string
    options: PasswordOptions
}

export type FormFieldsEntries = {
    [key in keyof FormFields]: unknown
}

export type TextOrEmailOptions = {
    placeholder: string
    textContentType: string
    keyboardType: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad',
    autoComplete: string
}

export type PasswordOptions = {
    placeholder: string,
    textContentType: string,
    keyboardType: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad',
    secureTextEntry: boolean
}