import {Images} from "@/constants/Images";
import React from "react";
import {Typography} from "@/constants/Typography";
import {LogoContainer, LogoImage, LogoText} from "@/styles/Global.styled";

export default function Logo() {
    return <LogoContainer>
        <LogoImage source={Images.logo} resizeMode="cover"/>
        <LogoText style={{...Typography.md}}>Montrack</LogoText>
    </LogoContainer>;
}