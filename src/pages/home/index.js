import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider';
import { ModalPassword } from '../../components/modal/index.js';

export  function Home() {
  const [size, setSize] = useState(10);
  const [passwordValue, setPasswordValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  function generationPassword() {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < size; i++) {
      let randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    //alert("Senha gerada: " + password);
    setPasswordValue(password);
    setModalVisible(true);
  }
  return (
    <View style={styles.container}>
      <Image 
        source={require("../../assets/logo.png")}
        style={styles.logo} // seria um nome
      />
      <Text style={{fontSize: 34, fontWeight: 'bold'}}>{size} Caracteres</Text>

      <View style={styles.area}> 
      <Slider
      style={{height: 50}}
      minimumValue={6}
      maximumValue={20}
      maximumTrackTintColor="#ff0000" // aqui coloca a cor do fundo
      minimumTrackTintColor="#000"
      thumbTintColor="#392de9" // aqui coloca a cor do botão
      value={size}
      onValueChange={(valor) => setSize(parseInt(valor.toFixed(0)))} // aqui arredonda o valor, tem que usar o parseInt
      step={1} // aqui define o passo do slider
    />
      </View>
      <TouchableOpacity style={styles.botao} onPress={generationPassword}> 
        <Text style={{
          fontSize: 20, 
          fontWeight: 'bold', 
          color: '#FFF', 
          textAlign: 'center'}}>
            Gerar Senha</Text>
        </TouchableOpacity>
        <Modal visible={modalVisible} animationType="fade" transparent={true}>
          <ModalPassword password={passwordValue} handleClose={ () => setModalVisible(false) }/>
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 10
  },
  area: {
    marginTop: 15,
    marginBottom: 15,
    width: '67%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 6,
  },
  botao: {
          width: '67%', 
          backgroundColor: '#392de9', 
          padding: 10, 
          borderRadius: 10,
  },
});
