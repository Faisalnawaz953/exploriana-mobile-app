import AsyncStorage from '@react-native-async-storage/async-storage';

export const wirteToLocalStorage = async (key, value) => {
  await AsyncStorage.setItem(key, value);
};

export const readFromLocalStorage = async key => {
  const value = await AsyncStorage.getItem(key);
  return value;
};

export const deleteFromLocalStorage = async key => {
  await AsyncStorage.removeItem(key);
};
