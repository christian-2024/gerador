import AsyncStorage from "@react-native-async-storage/async-storage";
import { SearchBar } from "react-native-screens";

// Salvar um item no storage
export const saveItem = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  }
  catch (e) {
    console.error("Error saving data", e);
  }
}
// Recuperar um item do storage
export const getItem = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  }
  catch (e) {
    console.error("Error retrieving data", e);
    return [];
  }
}
// Remover um item do storage
export const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  }
  catch (e) {
    console.error("Error removing data", e);
  }
}
// Limpar todos os itens do storage
export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  }
  catch (e) {
    console.error("Error clearing data", e);
  }
}
// Listar todos os itens do storage
export const getAllKeys = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    return keys;
  }
  catch (e) {
    console.error("Error retrieving keys", e);
  }

  return {
    getItem,
    saveItem,
    removeItem,
  }
}

export default useStorage;