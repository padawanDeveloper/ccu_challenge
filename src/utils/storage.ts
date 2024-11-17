import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export const storeData = async (value: string, itemName: string) => {
  try {
    console.log(itemName, value);
    await AsyncStorage.setItem(itemName, value);
  } catch (e) {
    console.log(e);
    Alert.alert('Problemas con el token', 'Problema inesperado');
  }
};
