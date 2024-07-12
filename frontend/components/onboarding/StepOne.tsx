import {Illustration, WelcomeContainer} from "@/styles/components/onboarding/Onboarding.styled";
import {Images} from "@/constants/Images";
import {Button, ButtonText, Container, Description, Title} from "@/styles/Global.styled";
import {Typography} from "@/constants/Typography";
import {useLocalSearchParams, useRouter} from "expo-router";
import Animated, { SlideInRight, SlideInLeft } from 'react-native-reanimated';

const StepOne = ({activeStep}: {activeStep: number}) => {
    const router = useRouter();
    const {step} = useLocalSearchParams()

    return (
        <Animated.View
            style={{flex: 1}}
            entering={!step ? SlideInRight.duration(300) : SlideInLeft.duration(300)}
        >
            <Illustration
                source={Images.onboarding1}
                resizeMode="cover"
            />

            <Container style={{flex: 1, paddingVertical: 8}}>
                <WelcomeContainer >
                    <Title style={{...Typography.lg}}>Welcome in Montrack!</Title>
                    <Description style={{...Typography.sm}}>
                        With Montrack, you can easily and quickly track all your expenses. Enjoy full control over your finances.
                    </Description>
                </WelcomeContainer>

                <Button
                    activeOpacity={0.8}
                    onPress={() => router.setParams({step: `${activeStep + 1}`})}
                >
                    <ButtonText style={{...Typography.md}}>Next</ButtonText>
                </Button>
            </Container>
        </Animated.View>
    );
};

export default StepOne;