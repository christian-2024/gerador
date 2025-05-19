import { View, Text, StyleSheet} from 'react-native';


export function Passwords() {
  return (
    <View style={styles.container}>
      <Text>Passwords</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});