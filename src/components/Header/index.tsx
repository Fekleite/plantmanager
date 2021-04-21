import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';

import userImg from '../../assets/fernanda.png'

interface HeaderProps {
  name: string;
}

export function Header() {
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Fernanda</Text>
      </View>
      <Image source={userImg} style={styles.avatar}/>
    </View>
  )
}