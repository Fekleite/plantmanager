import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Header } from '../../components/Header';
import { formatDistance } from 'date-fns/esm';
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';

import { SafeAreaViewAndroid } from '../../components/SafeAreaViewAndroid';
import { Tip } from '../../components/Tip';
import { Load } from '../../components/Load';
import { PlantCardSecondary } from '../../components/PlantCardSecondary';

import { loadPlant, Plant } from '../../libs/storage';

import styles from './styles'

export function MyPlants() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState<string>('');

  useEffect(() => {
    async function loadStorageData() {
      const plantsStorage = await loadPlant();

      const nextTime = formatDistance(
        new Date(plantsStorage[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        {
          locale: ptBR
        }
      )
      
      setNextWatered(`Regue sua ${plantsStorage[0].name} daqui a ${nextTime}`)
      setPlants(plantsStorage);
      setIsLoading(false)
    }

    loadStorageData();
  }, [])

  if(isLoading) {
    return <Load />
  }

  return (
    <View style={styles.container}>
      <Header hasGreeting={true} />

      <Tip 
        text={nextWatered}
      />

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>
          Próximas regadas
        </Text>

        <FlatList 
          data={plants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary 
              name={item.name}
              photo={item.photo}
              hour={item.hour}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>

    </View>
  )
}