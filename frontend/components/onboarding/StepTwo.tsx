import React from 'react';
import {Illustration, WelcomeContainer} from "@/styles/components/onboarding/Onboarding.styled";
import {Images} from "@/constants/Images";
import {Button, ButtonText, Container, Description, Title} from "@/styles/Global.styled";
import {Typography} from "@/constants/Typography";
import {useRouter} from "expo-router";
import Animated, { SlideInRight } from 'react-native-reanimated';
const StepTwo = () => {
    const router = useRouter();
    return (
        <Animated.View
            style={{flex: 1}}
            entering={SlideInRight.duration(300)}
        >
            <Illustration
                source={Images.onboarding2}
                resizeMode="cover"
            />

            <Container style={{flex: 1, paddingVertical: 8}}>
                <WelcomeContainer>
                    <Title style={{...Typography.lg}}>Your finances, at your fingertips</Title>
                    <Description style={{...Typography.sm}}>
                        Montrack provides easy access to all your financial information at your fingertips. Start
                        managing your finances more efficiently.
                    </Description>
                </WelcomeContainer>

                <Button
                    activeOpacity={0.8}
                    onPress={() => router.push('/login')}
                >
                    <ButtonText style={{...Typography.md}}>Let`s Get Started</ButtonText>
                </Button>
            </Container>
        </Animated.View>
    );
};

export default StepTwo;