import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import styles from './styles';

import { SafeAreaViewAndroid } from '../../components/SafeAreaViewAndroid';
import { Button } from '../../components/Button';

export function Confirmation() {
  const navigation = useNavigation();

  function handleMoveOn() {
    navigation.navigate('PlantSelect')
  }
  
  return (
    <SafeAreaViewAndroid style={styles.container} >
      <View style={styles.content}>
        <Text style={styles.emoji}>
          😁
        </Text>

        <Text style={styles.title}>
          Prontinho
        </Text>
        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>

        <View style={styles.footer}>
          <Button text='Começar' onPress={handleMoveOn} />
        </View>
      </View>
    </SafeAreaViewAndroid>
  )
}