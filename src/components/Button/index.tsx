import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

interface ButtonProps{
  text: string;
  disabled?: boolean;
}

export function Button({ text, disabled = false }: ButtonProps) {
  return(
    <TouchableOpacity 
      style={styles.container}
      disabled={disabled}
    >
      <Text style={styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}