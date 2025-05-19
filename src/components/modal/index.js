import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';

export function ModalPassword( {password, handleClose} ) { //pegando o valor da senha e para fechar o modal
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha gerada</Text>
                <Pressable style={{
                    backgroundColor: '#000', 
                    width: '80%', 
                    height: 50, 
                    borderRadius: 8, 
                    padding: 10,
                    alignItems: 'center', 
                    justifyContent: 'center'}}>
                        <Text style={{ color: "#fff",
                            fontSize: 20,
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}>
                            {password}
                        </Text>
                </Pressable>
                        <View style={styles.buttonArea}>
                            <TouchableOpacity style={styles.button} onPress={handleClose}>
                                <Text style={styles.buttonText}>Voltar</Text>
                            </TouchableOpacity>

                                <TouchableOpacity style={[styles.button, styles.buttonSalve]}>
                            <Text style={styles.buttonSalveText}>Salvar senha</Text>
                            </TouchableOpacity>
                        </View>

            </View>
        </View>
            
    );
}
const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'rgba(24,24,24,0.6)',
            alignItems: 'center',
            justifyContent: 'center',
        },
        content: {
            backgroundColor: '#FFF',
            width: '80%',
            height: '30%',
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
        },
        title: {
            fontSize: 25,
            fontWeight: 'bold',
            color: '#000',
            textAlign: 'center',
            marginBottom: 24,
        },
        buttonArea: {
            flexDirection: 'row',
            width: '80%',
            marginTop: 14,
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        button: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 14,
            marginBottom: 14,
            padding: 8,
        },
        buttonSalve: {
            backgroundColor: '#392de9',
            borderRadius: 8,
        },
        buttonText: {
            fontSize: 17,
            fontWeight: 'bold',
            color: '#000',
            textAlign: 'center',
        },
        buttonSalveText: {
            fontSize: 17,
            fontWeight: 'bold',
            color: '#FFF',
            textAlign: 'center',
            padding: 10,
        },
    })