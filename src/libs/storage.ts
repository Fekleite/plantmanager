import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';

export interface Plant {
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
  dateTimeNotification: Date;
}

interface StoragePlant {
  [id: string]: {
    data: Plant;
  }
}

export async function savePlant(plant: Plant): Promise<void> {
  try {
    const data = await AsyncStorage.getItem('@plantmanager:plants');
    const oldPlants = data ? (JSON.parse(data) as StoragePlant) : {};

    const newPlant = {
      [plant.id]: {
        data: plant
      }
    }

    await AsyncStorage.setItem('@plantmanager:plants', 
      JSON.stringify({...newPlant, ...oldPlants})
    )
  } catch (error) {
    throw new Error(error);
  }
}

export async function loadPlant(): Promise<StoragePlant> {
  try {
    const data = await AsyncStorage.getItem('@plantmanager:plants');
    const plants = data ? (JSON.parse(data) as StoragePlant) : {};

    return plants;
  } catch (error) {
    throw new Error(error);
  }
}