import React, { useState } from 'react';
import { Image, ScrollView, View, Text, TouchableOpacity, Platform, Alert } from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import { Feather } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/core';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { isBefore, format } from 'date-fns';

import waterDrop from '../../assets/waterdrop.png';
import styles from './styles';

import { Button } from '../../components/Button';

import { Plant, savePlant } from '../../libs/storage';

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
        <View style={styles.tipContainer}>
          <Image 
            source={waterDrop}
            style={styles.tipImage}
          />

          <Text style={styles.tipText}>
            {plant.water_tips}
          </Text>
        </View>

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