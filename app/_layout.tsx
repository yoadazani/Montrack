import {Stack} from "expo-router";
import {useColorScheme} from "@/hooks/useColorScheme";
import {useFonts} from "expo-font";
import {useEffect, useState} from "react";
import * as SplashScreen from "expo-splash-screen";
import {SplashScreen as SplashScreenAnimation} from "@/components/SplashScreen";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync().then();

export default function RootLayout() {
    const [appReady, setAppReady] = useState(false)
    const [fontsLoaded, fontsError] = useFonts({})
    const colorScheme = useColorScheme();

    useEffect(() => {
        if (fontsLoaded || fontsError) {
            (async () => {
                await SplashScreen.hideAsync()
                setTimeout(() => setAppReady(true), 3500)
            })()
        }
    }, [fontsLoaded, fontsError]);


    return (
        <>
            {
                !appReady
                    ? <SplashScreenAnimation/>
                    : <Stack screenOptions={{headerShown: false}}>
                        <Stack.Screen name="index"/>
                    </Stack>
            }
        </>
    );
}
