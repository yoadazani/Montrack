import {Pressable, Text, View} from 'react-native'
import {Typography} from "@/constants/Typography";
import {router} from "expo-router";
import {Colors} from "@/constants/Colors";

const HaveAnAccount = ({haveAnAccount, navigateTo}: { haveAnAccount: boolean, navigateTo: string }) => {
    return <View style={{flexDirection: 'row', columnGap: 8, alignSelf: 'center'}}>
        <Text style={{...Typography.md}}>{
            haveAnAccount
                ? 'Already have an account?'
                : 'Don\'t have an account?'
        }</Text>
        <Pressable onPress={() => router.push(navigateTo)}>
            <Text style={{...Typography.md, fontWeight: 500, color: Colors.primary.dark}}>{
                haveAnAccount
                    ? 'Log In'
                    : 'Sign Up'
            }</Text>
        </Pressable>
    </View>
}

export default HaveAnAccount