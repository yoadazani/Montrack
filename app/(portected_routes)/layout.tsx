import { Stack } from 'expo-router'

const ProtectedLayout = () => {
    return <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" />
    </Stack>
}

export default ProtectedLayout