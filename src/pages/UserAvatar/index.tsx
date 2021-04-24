import React, { useEffect, useState } from 'react';
import { Text, View, Alert, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { SafeAreaViewAndroid } from '../../components/SafeAreaViewAndroid';
import { Button } from '../../components/Button';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export function UserAvatar() {
  const [image, setImage] = useState<string>();
  const navigation = useNavigation();

  useEffect(() => {
    async function getUserAvatar() {
      const data = await AsyncStorage.getItem('@plantmanager:userAvatar');
      const userAvatar = data ? JSON.parse(data) : ''
      
      setImage(userAvatar.image);
    }

    getUserAvatar();
  }, [])

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Desculpe, precisamos da sua permissão para continuar!');
        }
      }
    })();
  }, []);

  const pickImage = async () =>  {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });


    if (!result.cancelled) {
      console.log(result.uri)
      setImage(result.uri);
    }
  }

  async function handleSubmit() {
    try {
      await AsyncStorage.setItem('@plantmanager:userAvatar', JSON.stringify({image}));

      const params = {
        title: 'Prontinho',
        subtitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
        textMedium: 'Começar',
        icon: 'smile',
        nextScreen: 'PlantSelect',
      }

      navigation.navigate('Confirmation', params);
    } catch (error) {
      return Alert.alert('Ops, não foi possível salvar sua foto. 😓')
    }
  }

  return (
    <SafeAreaViewAndroid style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.emoji}>
            😍
          </Text>
          <Text style={styles.title}>
            Faça o upload de {'\n'}
            uma foto sua
          </Text>
        </View>

        {image && (
          <Image source={{uri: image}} style={styles.image} />
        )}

        {!image && (
          <TouchableOpacity style={styles.button} onPress={pickImage}>
            <Feather 
              name="camera"
              size={24}
              color='#CFCFCF'
            />
          </TouchableOpacity>
        )}

        <View style={styles.footer}>
          {image && (
            <TouchableOpacity style={styles.editButton} onPress={pickImage}>
              <Feather 
                name='edit'
                size={16}
                color='#CFCFCF'
              />
              <Text style={styles.editButtonText}>Editar foto</Text>
            </TouchableOpacity>
          )}

          <Button text='Confirmar' onPress={handleSubmit} disabled={!image} />
        </View>
      </View>
    </SafeAreaViewAndroid>
  )
}