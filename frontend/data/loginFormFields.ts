import {FormFields} from "@/types/FormTypes";

export const loginFormFields: FormFields = {
    email: {
        type: 'email',
        label: 'Email',
        options: {
            placeholder: 'Email',
            textContentType: 'emailAddress',
            keyboardType: 'email-address',
            autoComplete: 'email'
        },
    },
    password: {
        type: 'password',
        label: 'Password',
        options: {
            placeholder: "Password",
            textContentType: "password",
            keyboardType: 'default',
            secureTextEntry: true
        }
    }
}