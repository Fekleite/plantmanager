import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Platform, Alert } from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import { Feather } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/core';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { isBefore, format } from 'date-fns';

import styles from './styles';

import { Button } from '../../components/Button';

import { Plant, savePlant } from '../../libs/storage';
import { Tip } from '../../components/Tip';

interface Params {
  plant: Plant;
}

export function PlantSave() {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS == 'ios');

  const route = useRoute();
  const { plant } = route.params as Params;

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack()
  }

  function handleChangeTime(event: Event, datetime: Date | undefined) {
    if(Platform.OS === 'android') {
      setShowDatePicker(oldState => !oldState);
    }

    if(datetime && isBefore(datetime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert('Escolha uma hora no futuro! ⌚');
    }

    if(datetime) {
      setSelectedDateTime(datetime);
    }
  }

  function handleOpenDateTimePickerAndroid() {
    setShowDatePicker(oldState => !oldState);
  }

  async function handleSavePlant() {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime
      })

      const params = {
        title: 'Tudo certo',
        subtitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com bastante amor.',
        buttonText: 'Muito obrigado :D',
        icon: 'hug',
        nextScreen: 'MyPlants',
      }

      navigation.navigate('Confirmation', params)
    } catch (error) {
      return Alert.alert('Ops, não foi possível salvar sua planta. 😓')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.plantInfo}>
        <TouchableOpacity 
          style={styles.goBackButton}
          onPress={handleGoBack}
        >
          <Feather name="chevron-left" style={styles.goBackButtonIcon} />
        </TouchableOpacity>
        <SvgFromUri 
          uri={plant.photo}
          height={120}
          width={120}
        />

        <Text style={styles.title}>
          {plant.name} 
        </Text>

        <Text style={styles.description}>
          {plant.about}
        </Text>
      </View>

      <View style={styles.controllers}>
        <Tip 
          text={plant.water_tips}
          style={styles.tipRelative}
        />

        <View style={styles.alert}>
          <Text style={styles.alertLabel}>
            Escolha o melhor horário para ser lembrado:
          </Text>

          {showDatePicker && (
            <DateTimePicker 
              value={selectedDateTime}
              mode='time'
              display='spinner'
              onChange={handleChangeTime}
            />
          )}

          {Platform.OS === 'android' && (
            <TouchableOpacity 
              style={styles.datePickerButton}
              onPress={handleOpenDateTimePickerAndroid}
            >
              <Text style={styles.datePickerButtonText}>
                {format(selectedDateTime, 'HH:mm')}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <Button 
          text="Cadastrar planta"
          onPress={handleSavePlant}
        />
      </View>
    </View>
  );
}