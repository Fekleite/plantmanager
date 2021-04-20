import React, { ReactNode } from 'react';
import { View, ViewProps } from 'react-native';

import safeStyle from './styles';

interface SafeAreaViewProps extends ViewProps {
  children: ReactNode;
}

export function SafeAreaViewAndroid({ children, style,...rest }: SafeAreaViewProps) {
  return (
    <View {...rest} style={[safeStyle.safeContainer, style]}>
      {children}
    </View>
  )
}