import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';

import wateringImg from '../../assets/watering.png';

import style from './styles';

import { SafeAreaViewAndroid } from '../../components/SafeAreaViewAndroid';

export function Welcome() {
  return (
    <SafeAreaViewAndroid style={style.container}>
      <Text style={style.title}>
        Gerencie {'\n'} 
        suas plantas {'\n'} 
        de forma fácil
      </Text>

      <Image source={wateringImg} style={style.image} />

      <Text style={style.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <TouchableOpacity style={style.button} activeOpacity={0.7}>
        <Text style={style.buttonText}>
          &gt;
        </Text>
      </TouchableOpacity>
    </SafeAreaViewAndroid>
  )
}