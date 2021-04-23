import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userImg from '../../assets/fernanda.png'
import styles from './styles';

interface HeaderProps {
  hasGreeting?: boolean;
}

export function Header({ hasGreeting = false }: HeaderProps) {
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
      {hasGreeting ? (
        <View>
          <Text style={styles.greeting}>Minhas</Text>
          <Text style={styles.userName}>Plantinhas</Text>
        </View>
      ):(
        <View>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.userName}>
            {username}
          </Text>
        </View>
      )}
      <Image source={userImg} style={styles.avatar}/>
    </View>
  )
}