import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function LoginScreen({navigation}){
    function fazerLogin(){
        navigation.navigate('Catalogo');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Login Screen</Text>

            <TouchableOpacity style={styles.botao} onPress={fazerLogin}>
                <Text style={styles.textoBotao}>Entrar na loja</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center', 
        backgroundColor: '#F5F7FA',
    }, titulo: {
        fontSize: 24, fontWeight: 'bold',
    }, botao:{
        backgroundColor: '#27AE60', padding: 15, borderRadius: 8,
    }, textoBotao: {
        color: 'white', fontWeight: 'bold', fontSize: 16,
    }
})