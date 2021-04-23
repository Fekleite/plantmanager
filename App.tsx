import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import { 
  useFonts,
  Jost_300Light,
  Jost_400Regular,
  Jost_600SemiBold,
  Jost_500Medium
} from '@expo-google-fonts/jost';
import * as Notifications from 'expo-notifications';

import Routes from './src/routes';

import { Plant } from './src/libs/storage';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_300Light,
    Jost_400Regular,
    Jost_600SemiBold,
    Jost_500Medium
  });

  useEffect(() => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });

    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as Plant;
        console.log(data);
      }
    )

    return () => subscription.remove();
  }, [])

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Routes />
  )
}