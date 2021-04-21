import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import loadAnimation from '../../assets/load.json';

import styles from './style';

export function Load() {
  return (
    <View style={styles.container}>
      <LottieView 
        source={loadAnimation}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  )
}