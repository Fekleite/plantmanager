import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, View } from 'react-native';

import styles from './styles';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  disabled?: boolean;
}

export function Button({ text, disabled = false, ...rest }: ButtonProps) {
  return(
    <TouchableOpacity 
      {...rest}
    >
      <View style={[
        styles.container,
        disabled && { opacity: 0.5 }
      ]}>
        <Text style={styles.text}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}