import GlobalStyled from "@/styles/Global.styled";
import {Typography} from "@/constants/Typography";
import {FormEvent, PropsWithChildren} from "react";
import {TouchableOpacityProps} from "react-native";

const Button = (
    {
        children,
        handlePress,
        disabled,
        style
    }: PropsWithChildren & {
        handlePress?: () => void,
        disabled?: boolean,
        style?: TouchableOpacityProps['style']
    }) => {
    return <GlobalStyled.Button
        onPress={handlePress}
        activeOpacity={0.8}
        disabled={disabled}
        style={style}
    >
        <GlobalStyled.ButtonText style={{...Typography.md}}>
            {children}
        </GlobalStyled.ButtonText>
    </GlobalStyled.Button>
}

export default Button