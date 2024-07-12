import styled from "styled-components/native";
import {Colors} from "@/constants/Colors";
import {Dimensions} from "react-native";
import {DarkTheme} from "@react-navigation/native";
import {css} from "styled-components/native";
import {Typography} from "@/constants/Typography";

const SCREEN_WIDTH = Dimensions.get('window').width;

export const Container = styled.View`
  width: 100%;
  max-width: ${SCREEN_WIDTH - 48}px;
  padding-vertical: 16px;
  margin-horizontal: auto;
  
  ${({center, fullWidth, darkTheme}: { center: boolean, fullWidth: boolean, darkTheme: boolean }) => {
    switch (true) {
      case center:
        return css`
          align-items: center;
          justify-content: center;
        `
      case fullWidth:
        return css`
          width: 100%;
        `
      case darkTheme:
        return css`
          background-color: ${DarkTheme.colors.background};
        `
    }
  }}
`;

// Button
export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  border-radius: 8px;
  background-color: ${Colors.primary.dark};
  align-items: center;
  justify-content: center;

  ${({disabled}: { disabled: boolean }) => disabled && `
      background-color: ${Colors.black[40]};
    `}
`

export const ButtonText = styled.Text`
  font-weight: 500;
  color: ${Colors.white};
  ${({disabled}: { disabled: boolean }) => disabled && `
      color: ${Colors.black[40]};
  `}
`

// Logo
export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding-vertical: 16px;
`

export const LogoImage = styled.Image`
  width: 27.9px;
  height: 27.17px;
`

export const LogoText = styled.Text`
  font-weight: bold;
`

// Typography
export const Description = styled.Text`
  font-weight: 400;
  color: ${Colors.black[80]};
  letter-spacing: 0.5px;
`

export const Title = styled.Text`
  font-weight: bold;
  color: ${Colors.black[100]};
  letter-spacing: 0.5px;
`

// Label
export const Label = styled.Text`
  font-weight: 400;
  color: ${Colors.black[100]};
  letter-spacing: 0.5px;
  text-transform: capitalize;
`

// Input
export const Input = styled.TextInput`
  width: 100%;
  height: 56px;
  padding-horizontal: 16px;
  border-radius: 8px;
  font-size: ${Typography.md.fontSize}px;
  color: ${Colors.black[100]};
  background-color: ${Colors.background["40"]};
`

// Form
export const Form = styled.View`
  gap: 24px;
`

export const FormItem = styled.View`
  gap: 4px    
`

export default {
    Container,
    Button,
    ButtonText,
    LogoContainer,
    LogoImage,
    LogoText,
    Description,
    Title,
    Label,
    Input,
    Form,
    FormItem
}