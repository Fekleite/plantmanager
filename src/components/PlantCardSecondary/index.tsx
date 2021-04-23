import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import styles from './styles';

interface PlantCardSecondaryProps extends RectButtonProps {
  name: string;
  photo: string;
  hour: string;
}

export function PlantCardSecondary({ name, photo, hour }: PlantCardSecondaryProps) {
  return (
    <RectButton style={styles.container}>
      <View style={styles.header}>
        <SvgFromUri uri={photo} width={40} height={40}/>
        
        <Text style={styles.title}>
          {name}
        </Text>
      </View>

      <View style={styles.details}>
        <Text style={styles.timeLabel}>Regar às</Text>
        <Text style={styles.time}>{hour}</Text>
      </View>
    </RectButton>
  )
}