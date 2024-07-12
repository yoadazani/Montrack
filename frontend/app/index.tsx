import React, {useEffect, useState} from "react";
import {useLocalSearchParams, useRouter} from "expo-router";
import {StatusBar} from "expo-status-bar";

import Logo from "@/components/Logo";
import {SafeAreaView} from "react-native-safe-area-context";
import {Pressable, Text} from "react-native";
import {Typography} from "@/constants/Typography";

import {Container} from "@/styles/Global.styled";
import {Step, Wrapper} from "@/styles/components/onboarding/Onboarding.styled";
import StepOne from "@/components/onboarding/StepOne";
import StepTwo from "@/components/onboarding/StepTwo";

export default function Onboarding() {
    const router = useRouter();
    const {step} = useLocalSearchParams()
    const [activeStep, setActiveStep] = useState<number>(1)

    useEffect(() => {
        if (step) {
            setActiveStep(Number(step as string))
        }
    }, [step]);

    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar style="auto"/>

            <Container>
                <Logo/>
                <Wrapper>
                    <Wrapper style={{flex: 1}}>
                        {Array.from({length: 2}).map((_, index) => (
                            <Pressable
                                key={index}
                                onPress={() => router.setParams({step: `${index + 1}`})}
                            >
                                <Step active={activeStep === index + 1}/>
                            </Pressable>
                        ))}
                    </Wrapper>
                    <Pressable onPress={() => router.push('/login')}>
                        <Text style={{...Typography.md}}>Skip</Text>
                    </Pressable>
                </Wrapper>
            </Container>

            {activeStep === 1 ? <StepOne activeStep={activeStep}/> : <StepTwo/>}

        </SafeAreaView>
    );
}
