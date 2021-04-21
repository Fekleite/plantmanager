import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import styles from './styles';

interface EnvironmentButton extends RectButtonProps {
  active?: boolean;
  title: string;
}

export function EnvironmentButton({ title, active = false, ...rest }: EnvironmentButton) {
  return(
    <RectButton 
      style={[
        styles.container,
        active && styles.containerActive
      ]}
      {...rest}
    >
      <Text style={[
        styles.text,
        active && styles.textActive
      ]}>
        {title}
      </Text>
    </RectButton>
  )
}