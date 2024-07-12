import {Image, Pressable, Text, View} from 'react-native'
import {Typography} from "@/constants/Typography";
import {Colors} from "@/constants/Colors";
import {Icons} from "@/constants/Icons";

const GoogleLogin = () => {
    return <View style={{gap: 16, flex: 1, alignItems: 'center'}}>
        <Text style={{...Typography.md, fontWeight: 400, color: Colors.black[80]}}>or Login with</Text>

        <Pressable style={{
            borderWidth: 1,
            borderColor: Colors.black[60],
            borderRadius: 8,
            height: 56,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
        }}>
            <Image source={Icons.google} style={{width: 32, height: 32}} resizeMode="cover"/>
        </Pressable>
    </View>
}

export default GoogleLogin