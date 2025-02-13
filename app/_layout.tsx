import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts, Barlow_300Light, Barlow_400Regular, Barlow_500Medium, Barlow_700Bold, Barlow_900Black } from '@expo-google-fonts/barlow';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import '../global.css'
import { useColorScheme } from '@/hooks/useColorScheme';
import "@/utils/cssInterop"

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Barlow_300Light: Barlow_300Light,
    Barlow_400Regular: Barlow_400Regular, 
    Barlow_500Medium: Barlow_500Medium,
    Barlow_700Bold: Barlow_700Bold
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
