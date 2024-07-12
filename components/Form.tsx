import GlobalStyled from "@/styles/Global.styled";
import {FormField, FormFields, FormFieldsEntries} from "@/types/FormTypes";
import {Typography} from "@/constants/Typography";
import {Formik} from "formik"
import * as z from "zod"
import {toFormikValidationSchema} from "zod-formik-adapter";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    Text,
    TouchableWithoutFeedback
} from "react-native";
import Button from "@/components/Button";
import {Colors} from "@/constants/Colors";
import GoogleLogin from "@/components/auth/GoogleLogin";
import {capitalize} from "@/utils/capitalize";
import {setState} from "jest-circus";
import {useState} from "react";

const Form = (
    {
        type,
        fields,
        validationSchema,
        initialValues,
        handleSubmitForm,
    }: {
        type: 'signup' | 'login',
        fields: FormFields,
        validationSchema: z.ZodObject<{}> | z.ZodEffects<z.ZodObject<{}>>,
        initialValues?: FormFieldsEntries,
        handleSubmitForm: (data: FormFieldsEntries) => void
    }) => {

    return <Formik
        initialValues={{...initialValues}}
        validationSchema={toFormikValidationSchema(validationSchema)}
        onSubmit={(values: z.infer<typeof validationSchema>) => {
            handleSubmitForm(values)
        }}
    >
        {({
              values,
              errors,
              touched,
              setValues,
              setFieldTouched,
              handleSubmit
          }) => (
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1
                }}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <KeyboardAvoidingView
                    style={{flex: 1}}
                    keyboardVerticalOffset={-100}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <GlobalStyled.Form style={{flex: 1}}>
                            <>
                                {
                                    Object.entries(fields).map(([key, field]: [string, FormField]) => (
                                        <GlobalStyled.FormItem key={key}>
                                            <GlobalStyled.Label
                                                style={{...Typography.md}}>{field.label}</GlobalStyled.Label>

                                            {/*TODO Add right Icons for Password input to show password or hide password */}
                                            <GlobalStyled.Input
                                                value={values[key]}
                                                onChangeText={(text: string) => setValues({...values, [key]: text})}
                                                onBlur={async () => await setFieldTouched(key)
                                                }
                                                name={field.label.toLowerCase()}
                                                style={errors[key] && touched[key] && {
                                                    borderColor: 'red',
                                                    borderWidth: 1
                                                }}
                                                {...field.options}
                                            />
                                            {
                                                errors[key] && touched[key] &&
                                                <Text style={{color: 'red', ...Typography.xs, alignSelf: 'flex-end', paddingHorizontal: 4}}>{errors[key]}</Text>
                                            }
                                        </GlobalStyled.FormItem>
                                    ))
                                }
                            </>

                            {/* Google Login & Forgot Password Buttons shows only on Login Form */}
                            {
                                type === 'login' && <>
                                    {/* Forgot your Password Component*/}
                                    <Pressable style={{alignSelf: 'flex-end', padding: 4, marginTop: -24}}>
                                        <Text style={{...Typography.md, fontWeight: 500, color: Colors.primary.dark}}>Forgot
                                            Password?</Text>
                                    </Pressable>

                                    <GoogleLogin/>
                                </>
                            }

                            {/* Submit Button */}
                            <Button
                                style={{marginTop: "auto"}}
                                handlePress={handleSubmit}
                                disabled={
                                    Object.keys(errors).length > 0 ||
                                    Object.keys(touched).length === 0
                                }
                            >
                                {capitalize(type)}
                            </Button>
                        </GlobalStyled.Form>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </ScrollView>
        )}
    </Formik>
}

export default Form