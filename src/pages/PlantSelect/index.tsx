import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { EnvironmentButton } from '../../components/EnvironmentButton';
import { Header } from '../../components/Header';
import { Load } from '../../components/Load';
import { PlantCardPrimary } from '../../components/PlantCardPrimary';
import { SafeAreaViewAndroid } from '../../components/SafeAreaViewAndroid';

import api from '../../services/api';

import styles from './styles';

import { Plant as PlantState } from '../../libs/storage';
interface EnvironmentState {
  key: string;
  title: string;
}

export function PlantSelect() {
  const [environments, setEnvironments] = useState<EnvironmentState[]>();
  const [plants, setPlants] = useState<PlantState[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantState[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const navigation = useNavigation();

  async function fetchPlants() {
    const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`)

    if(!data) return setIsLoading(true);

    if(page > 1) {
      setPlants(oldValue => [...oldValue, ...data])
      setFilteredPlants(oldValue => [...oldValue, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }
    
    setIsLoading(false);
    setIsLoadingMore(false)
  }

  function handleEnvironmentSelected(environment: string) {
    setEnvironmentSelected(environment);

    if(environment === 'all') {
      return setFilteredPlants(plants);
    }

    const filtered = plants?.filter(plant => plant.environments.includes(environment))

    setFilteredPlants(filtered);
  }

  function handlePlantSelect(plant: PlantState) {
    navigation.navigate('PlantSave', { plant });
  }

  function handleFetchMore(distance: number) {
    if(distance < 1) return;

    setIsLoadingMore(true);
    setPage(oldValue => oldValue + 1);
    fetchPlants();
  }

  useEffect(() => {
    async function fetchEnvironment() {
      const { data } = await api.get('plants_environments?_sort=title&_order=asc')
      
      setEnvironments([
        {
          key: 'all',
          title: 'Todos'
        },
        ...data
      ]);
    }

    fetchEnvironment()
  }, [])

  useEffect(() => {
    fetchPlants()
  }, [])

  if(isLoading) {
    return <Load />
  }

  return (
    <SafeAreaViewAndroid style={styles.container}>
      <View style={styles.header}> 
        <Header />

        <Text style={styles.textActionStrong}>Em qual ambiente </Text>
        <Text style={styles.textAction}>você quer colocar sua planta?</Text>
      </View>

      <View>
        <FlatList 
          data={environments}
          keyExtractor={(item) => String(item.key)}
          renderItem={({ item }) => (
            <EnvironmentButton 
              title={item.title}
              active={item.key === environmentSelected}
              onPress={() => handleEnvironmentSelected(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.envList}
        />
      </View>

      <View style={styles.plants}>
        <FlatList 
            data={filteredPlants}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <PlantCardPrimary 
                name={item.name} 
                photo={item.photo}
                onPress={() => handlePlantSelect(item)}
              />
            )}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.1}
            onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
            ListFooterComponent={isLoadingMore ? <ActivityIndicator color='#2B7A4B' /> : <></>}
          />
      </View>
    </SafeAreaViewAndroid>
  )
}