import {FormFields} from "@/types/FormTypes";

export const signupFormFields: FormFields = {
    name: {
        type: 'text',
        label: 'Name',
        options: {
            placeholder: 'Name',
            textContentType: 'name',
            keyboardType: 'default',
            autoComplete: 'name'
        },
    },
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
    },
    confirmPassword: {
        type: 'password',
        label: 'Repeat Password',
        options: {
            placeholder: "Repeat Password",
            textContentType: "password",
            keyboardType: 'default',
            secureTextEntry: true
        }
    }
}