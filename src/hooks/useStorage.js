import AsyncStorage from "@react-native-async-storage/async-storage";
import { SearchBar } from "react-native-screens";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";


const useStorage = () => {
// Salvar um item no storage
 const saveItem = async (key, value) => {
  try {
    let passwords = await getItem(key); // Pega o item do storage
    passwords.push(value); // Adiciona o novo item
    await AsyncStorage.setItem(key, JSON.stringify(passwords));// Salva o item no storage
  }
  catch (e) {
    console.error("Erro ao salvar", e);
  }
}
// Buscar um item do storage
 const getItem = async (key) => {
  try {
    const passwords = await AsyncStorage.getItem(key);
    return JSON.parse(passwords) || [];
  }
  catch (e) {
    console.error("Error ao buscar storage", e);
    return []; // array vazio
  }
}
// Remover um item do storage
 const removeItem = async (key, item) => {
  try {
    let passwords = await getItem(key); // Pega o item do storage
    let mypasswords = passwords.filter((password) => {
      return (password !== item); // Filtra o item que não é igual ao que foi passado
    }); // Remove o item
    await AsyncStorage.setItem(key, JSON.stringify(mypasswords)); // Salva o item no storage
    return mypasswords; // Retorna o item
  }
  catch (e) {
    console.error("Erro ao deletar", e);
  }
}
// Limpar o storage
  return {
    getItem,
    saveItem,
    removeItem,
  }
}

export default useStorage;