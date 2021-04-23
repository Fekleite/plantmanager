import React, { useEffect, useState } from 'react';
import { 
  Text, 
  TextInput, 
  View, 
  KeyboardAvoidingView, 
  Platform, 
  TouchableWithoutFeedback, 
  Keyboard,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { SafeAreaViewAndroid } from '../../components/SafeAreaViewAndroid';
import { Button } from '../../components/Button';

import styles from './styles';

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>('');

  const navigation = useNavigation();

  useEffect(() => {
    async function getUsername() {
      const data = await AsyncStorage.getItem('@plantmanager:user');
      const username = data ? data : ''
      
      setName(username);
    }

    getUsername();
  }, [])

  async function handleSubmit() {
    if(!name) {
      return Alert.alert('Por favor, informe como podemos chamar você 😓')
    }

    try {
      await AsyncStorage.setItem('@plantmanager:user', name);
      const params = {
        title: 'Prontinho',
        subtitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
        textMedium: 'Começar',
        icon: 'smile',
        nextScreen: 'PlantSelect',
      }

      navigation.navigate('Confirmation', params)
    } catch (error) {
      return Alert.alert('Ops, não foi possível salvar seu nome. 😓')
    }
  }

  function handleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!name)
  }

  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value)
    setName(value)
  }

  return (
    <SafeAreaViewAndroid style={styles.container} >
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      > 
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.header}>
                <Text style={styles.emoji}>
                  { isFilled ? '😁' : '😀' } 
                </Text>
                <Text style={styles.title}>
                  Como podemos {'\n'}
                  chamar você?
                </Text>
              </View>

              <TextInput 
                style={[
                  styles.input,
                  (isFocused || isFilled) && styles.inputFocused
                ]}
                value={name}
                placeholder='Digite um nome'
                placeholderTextColor='#CFCFCF'
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />

              <View style={styles.footer}>
                <Button text='Confirmar' onPress={handleSubmit} disabled={!(!!name)} />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaViewAndroid>
  )
}