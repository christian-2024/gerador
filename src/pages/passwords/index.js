import { useState, useEffect } from 'react'; // Importa o hook useState do React
import { useIsFocused } from '@react-navigation/native';
import { View, Text, StyleSheet, Pressable, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import  useStorage  from '../../hooks/useStorage'; // Importando o hook useStorage, mas não está sendo utilizado aqui
import PasswordsItem from './components/passwordItem';

export function Passwords() {
  const { getItem, removeItem } = useStorage(); // Inicializando o hook useStorage, mas não está sendo utilizado aqui
  const focused = useIsFocused(); // Hook para verificar se a tela está em foco
  const [listPasswords, setListPasswords] = useState([]); // Estado para armazenar a lista de senhas
  
  useEffect(() => {
    async function loadPasswords() {
      const data = await getItem("@pass"); // Obtém a senha armazenada
      //console.log(data);
      setListPasswords(data); // Atualiza o estado com a senha obtida
    }
    loadPasswords();
  }
  , [focused]); // Executa apenas uma vez quando o componente é montado

  async function handleDeletePasswords(item) {
    //console.log(item);
    const passwords = await removeItem("@pass", item);
    setListPasswords(passwords); // Atualiza o estado com a senha obtida
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.half}>
        <Text style={styles.textCenter}>Minhas senhas</Text>
      </View>
      <FlatList
      style = {{ flex: 1, marginTop: 20 }}
        data={listPasswords}
        keyExtractor={(item) => (item.id)}
        renderItem={({ item }) => (<PasswordsItem data={item} removePassword={() => handleDeletePasswords(item)}/>)}/>
      
    </SafeAreaView>
  )
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  half: {
    width: '100%',
    justifyContent: 'left',
    alignItems: 'flex-start',
    padding: 55,
    backgroundColor: '#392de9',
  },
  textCenter: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
  },

});