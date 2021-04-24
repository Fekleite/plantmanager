import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';

interface HeaderProps {
  hasGreeting?: boolean;
}

export function Header({ hasGreeting = false }: HeaderProps) {
  const [username, setUsername] = useState<string>();
  const [image, setImage] = useState<string>();

  useEffect(() => {
    async function getUserInfos() {
      const storageUsername = await AsyncStorage.getItem('@plantmanager:user')
      setUsername(storageUsername || '');

      const data = await AsyncStorage.getItem('@plantmanager:userAvatar');
      const storageUserAvatar = data ? JSON.parse(data) : ''
      setImage(storageUserAvatar.image);
    }

    getUserInfos();
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
      <Image source={{uri: image}} style={styles.avatar}/>
    </View>
  )
}