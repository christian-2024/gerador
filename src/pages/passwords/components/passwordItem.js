import React from 'react';
import { useState, useEffect } from 'react'; // Importa o hook useState do React
import { View, StyleSheet, Text, Pressable } from 'react-native';
import {Ionicons} from '@expo/vector-icons'; // Importa os ícones do expo

export default function PasswordsItem({ data, removePassword }) {
      const [show, setShow] = useState(false); // Estado para controlar a visibilidade da senha
    
  return (
    <Pressable 
      style={styles.handlePassword}
      onPress={() => setShow(!show)} onLongPress={removePassword}>
                        <Text style={{ color: "#fff",
                            fontSize: 20,
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }} >
                            {show ? data : '•'.repeat(data.length)}
                        </Text>
                        <Ionicons 
                        name={show ? "eye-outline" : "eye-off-outline"}
                        style={{ marginLeft: 130 }}
                        size={24} 
                        color="#fff" />
      </Pressable>
  )
}
const styles = StyleSheet.create({
 handlePassword: {
    backgroundColor: '#000', 
    padding: 14,
    width: '90%', 
    marginBottom: 14,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between',
    height: 50, 
    marginLeft: 20,
    marginRight: 20,
    marginTop: 14,
  },
});
  
