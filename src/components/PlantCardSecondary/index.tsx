import React from 'react';
import { View, Text, Animated } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { SvgFromUri } from 'react-native-svg';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

interface PlantCardSecondaryProps extends RectButtonProps {
  name: string;
  photo: string;
  hour: string;
  handleRemove: () => void;
}

export function PlantCardSecondary({ name, photo, hour, handleRemove }: PlantCardSecondaryProps) {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RectButton 
              style={styles.buttonRemove}
              onPress={handleRemove}
            >
              <Feather name='trash' size={24} color='#fff' />
            </RectButton>
          </View>
        </Animated.View>
      )}
    >
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
    </Swipeable>
  )
}