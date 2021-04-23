import React from 'react';
import { Text, View, Image, ViewProps } from 'react-native';

import waterDrop from '../../assets/waterdrop.png';
import styles from './styles';

interface TipProps extends ViewProps {
  text: string;
}

export function Tip({ text, style, ...rest }: TipProps) {
  return (
    <View style={[styles.tipContainer, style]} {...rest}>
      <Image 
        source={waterDrop}
        style={styles.tipImage}
      />

      <Text style={styles.tipText}>
        {text}
      </Text>
    </View>
  )
}