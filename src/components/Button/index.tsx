import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

import styles from './styles';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  disabled?: boolean;
}

export function Button({ text, disabled = false, ...rest }: ButtonProps) {
  return(
    <TouchableOpacity 
      style={styles.container}
      disabled={disabled}
      {...rest}
    >
      <Text style={styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}