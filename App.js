
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        source={require("./src/assets/logo.png")}
        style={styles.logo} // seria um nome
      />
      <Text style={{fontSize: 34, fontWeight: 'bold'}}>16 Caracteres</Text>
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
    marginBottom: 60
  },
});
