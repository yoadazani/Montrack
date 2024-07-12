import styled from "styled-components/native";

import {Colors} from "@/constants/Colors";


export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
  padding-vertical: 8px;
`

export const Step = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 180px;
  background-color: ${Colors.black[40]};
  
  ${({active}: { active: boolean }) => active && `
    background-color: ${Colors.primary.dark};
    width:24px;
  `}
`

export const Illustration = styled.Image`
  width: 100%;
  height: 307px;
`

export const WelcomeContainer = styled.View`
  pedding-vertical: 8px;
  margin-bottom: auto;
  gap: 8px;
`;