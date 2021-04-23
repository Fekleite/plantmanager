import React from 'react';
import AppLoading from 'expo-app-loading';
import { 
  useFonts,
  Jost_300Light,
  Jost_400Regular,
  Jost_600SemiBold,
  Jost_500Medium
} from '@expo-google-fonts/jost';

import Routes from './src/routes';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_300Light,
    Jost_400Regular,
    Jost_600SemiBold,
    Jost_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Routes />
  )
}