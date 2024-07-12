import {Stack} from 'expo-router'

const AuthLayout = () => {
    return <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen
            name="login"
            options={{
                animation: 'slide_from_left',
                animationDuration: 300
            }}
        />
        <Stack.Screen
            name="signup"
            options={{
                animation: 'slide_from_right',
                animationDuration: 300
            }}
        />
    </Stack>
}

export default AuthLayout