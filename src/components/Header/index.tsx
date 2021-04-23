import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';

import userImg from '../../assets/fernanda.png'

export function Header() {
  const [username, setUsername] = useState<string>();

  useEffect(() => {
    async function getUsername() {
      const storageUsername = await AsyncStorage.getItem('@plantmanager:user')
      setUsername(storageUsername || '');
    }

    getUsername();
  }, [])

  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>
          {username}
        </Text>
      </View>
      <Image source={userImg} style={styles.avatar}/>
    </View>
  )
}