import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, Alert } from 'react-native';
import { Header } from '../../components/Header';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Tip } from '../../components/Tip';
import { Load } from '../../components/Load';
import { PlantCardSecondary } from '../../components/PlantCardSecondary';
import { SafeAreaViewAndroid } from '../../components/SafeAreaViewAndroid';

import { loadPlant, Plant, removePlant } from '../../libs/storage';

import styles from './styles';

export function MyPlants() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState<string>('');
  const [removed, setRemoved] = useState<string>('');

  useEffect(() => {
    async function loadStorageData() {
      const plantsStorage = await loadPlant();

      if(plantsStorage.length !== 0) {
        const nextTime = formatDistance(
          new Date(plantsStorage[0].dateTimeNotification).getTime(),
          new Date().getTime(),
          {
            locale: ptBR,
          }
        );
        
        setNextWatered(`Regue sua ${plantsStorage[0].name} daqui a ${nextTime}`)
        setPlants(plantsStorage);
      }
      setIsLoading(false);
    }

    loadStorageData();
  }, [removed]);

  function handleRemove(plant: Plant) {
    Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
      { text: 'Não', style: 'cancel' },
      {
        text: 'Sim',
        onPress: async () => {
          try {
            await removePlant(String(plant.id));

            setPlants((oldData) => (
              oldData.filter(item => item.id !== plant.id)
            ));
            setRemoved(String(plant.id))
          } catch(error) {
              Alert.alert('Desculpe, não foi possível remover sua plantinha 😓')
          }
        }
      }
    ])
  }

  if(isLoading) return <Load />

  return (
    <SafeAreaViewAndroid style={styles.container}>
      <Header hasGreeting={true} />

      {plants.length !== 0 && (<Tip text={nextWatered} />)}

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>
          Próximas regadas
        </Text>

        {plants.length !== 0 ? (
          <FlatList 
            data={plants}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <PlantCardSecondary 
                name={item.name}
                photo={item.photo}
                hour={item.hour}
                handleRemove={() => handleRemove(item)}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        ): (
          <View style={styles.notFoundContainer}>
            <Text style={styles.notFoundText}>
              Você ainda não possui plantinhas cadastradas 😯
            </Text>
          </View>
        )}
      </View>
    </SafeAreaViewAndroid>
  )
}