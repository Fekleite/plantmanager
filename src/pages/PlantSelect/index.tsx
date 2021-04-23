import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

import { EnvironmentButton } from '../../components/EnvironmentButton';
import { Header } from '../../components/Header';
import { Load } from '../../components/Load';
import { PlantCardPrimary } from '../../components/PlantCardPrimary';
import { SafeAreaViewAndroid } from '../../components/SafeAreaViewAndroid';

import api from '../../services/api';

import styles from './styles';

interface EnvironmentState {
  key: string;
  title: string;
}

interface PlantsState {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  };
}

export function PlantSelect() {
  const [environments, setEnvironments] = useState<EnvironmentState[]>();
  const [plants, setPlants] = useState<PlantsState[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantsState[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [loadedAll, setLoadedAll] = useState(false)

  async function fetchPlants() {
    const { data } = await api
      .get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`)

    if(!data) return setIsLoading(true)

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
          renderItem={({ item }) => (
            <EnvironmentButton 
              title={item.title} 
              key={item.key}
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
            renderItem={({ item }) => (
              <PlantCardPrimary key={item.id} name={item.name} photo={item.photo} />
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