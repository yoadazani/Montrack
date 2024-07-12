import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {Container, Description, Title} from "@/styles/Global.styled";
import Logo from "@/components/Logo";
import {Typography} from "@/constants/Typography";
import {Header} from "@/styles/screens/auth/Login.styled";
import Form from "@/components/Form";
import {FormFields, FormFieldsEntries} from "@/types/FormTypes";
import {signupFormFields} from "@/data/signupFormFields";
import {router} from "expo-router";
import HaveAnAccount from "@/components/auth/HaveAnAccount";
import authValidation from "@/validations/auth.validation";

const Signup = () => {
    const defaultValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    const handleSignup = (data: FormFieldsEntries) => {
        console.log(data)
        router.push('/login')
    }

    return <SafeAreaView style={{flex: 1}}>
        <StatusBar/>
        <Container style={{flex: 1}}>
            <Logo/>
            <Header>
                <Title style={{...Typography.lg}}>Signup</Title>
                <Description style={{...Typography.sm}}>
                    Please sign up to enjoy all Montrack features
                </Description>
            </Header>

            <Form
                type="signup"
                fields={signupFormFields as unknown as FormFields}
                initialValues={defaultValues}
                validationSchema={authValidation.SignupSchema}
                handleSubmitForm={handleSignup}
            />


            <HaveAnAccount haveAnAccount={true} navigateTo="login"/>
        </Container>
    </SafeAreaView>
}

export default Signup