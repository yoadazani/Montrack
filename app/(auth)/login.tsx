import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {Container, Description, Title} from "@/styles/Global.styled";
import Logo from "@/components/Logo";
import {Typography} from "@/constants/Typography";
import {Header} from "@/styles/screens/auth/Login.styled";
import Form from "@/components/Form";
import {FormFields, FormFieldsEntries} from "@/types/FormTypes";
import {loginFormFields} from "@/data/loginFormFields";
import HaveAnAccount from "@/components/auth/HaveAnAccount";
import {router} from "expo-router";
import authValidation from "@/validations/auth.validation";

const Login = () => {
    const defaultValues = {
        email: '',
        password: ''
    }

    const handleLogin = (data: FormFieldsEntries) => {
        console.log(data)
        router.push('/home')
    }

    return <SafeAreaView style={{flex: 1}}>
        <StatusBar/>

        <Container style={{flex: 1}}>
            <Logo/>
            <Header>
                <Title style={{...Typography.lg}}>Login</Title>
                <Description style={{...Typography.sm}}>
                    Please log in to enjoy all Montrack features
                </Description>
            </Header>

            <Form
                type="login"
                fields={loginFormFields as unknown as FormFields}
                initialValues={defaultValues}
                validationSchema={authValidation.LoginSchema}
                handleSubmitForm={handleLogin}
            />

            <HaveAnAccount haveAnAccount={false} navigateTo="/signup"/>
        </Container>
    </SafeAreaView>
}

export default Login