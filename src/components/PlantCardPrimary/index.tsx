import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import styles from './styles';

interface PlantCardPrimaryProps extends RectButtonProps {
  name: string;
  photo: string;
}

export function PlantCardPrimary({ name, photo, ...rest }: PlantCardPrimaryProps) {
  return(
    <RectButton 
      style={styles.container}
      {...rest}
    > 
      <SvgFromUri uri={photo} width={80} height={70}/>
      
      <Text style={styles.text}>
        {name}
      </Text>
    </RectButton>
  )
}