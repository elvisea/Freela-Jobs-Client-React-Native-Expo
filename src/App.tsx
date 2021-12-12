import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Poppins_700Bold,
  Poppins_500Medium,
  Poppins_400Regular
} from '@expo-google-fonts/poppins';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

export default function App() {

  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <ThemeProvider theme={theme}>
          <View>
            <StatusBar
              style="inverted"
              backgroundColor={theme.colors.background}
            />
            <Text>Open up App.js to start working on your app!</Text>
          </View>
        </ThemeProvider>
      </>
    );
  }
}

