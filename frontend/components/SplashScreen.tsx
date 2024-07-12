import {Container, Description, LogoContainer, LogoImage, LogoText} from "@/styles/Global.styled";
import {Typography} from "@/constants/Typography";
import {SafeAreaView} from "react-native-safe-area-context";
import {Images} from "@/constants/Images";

export const SplashScreen = () => {

    return <SafeAreaView style={{flex: 1}}>
        <Container center fullWidth style={{flex: 1}}>
            <LogoContainer style={{alignItems: 'center', justifyContent: 'center'}}>
                <LogoImage source={Images.logo} style={{width: 50, height: 50}} resizeMode="contain"/>
                <LogoText style={{...Typography.xxl}}>Montrack</LogoText>
            </LogoContainer>

            <Description style={{...Typography.md, textAlign: 'center'}}>
                “A budget is telling your money where to go instead of wondering where it went.”
            </Description>

        </Container>
    </SafeAreaView>
}