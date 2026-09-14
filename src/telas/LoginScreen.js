import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

export default function LoginScreen({navigation}){
    function fazerLogin(){
        navigation.navigate('AreaLogada');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Hortifruti da Dona Gigi</Text>

            <TextInput
                style={styles.entrada}
                placeholder='E-mail'
                autoCapitalize='none'
                keyboardType='email-address' />
            
            <TextInput 
                style={styles.entrada}
                placeholder='Senha'
                autoCapitalize='none'
                secureTextEntry={true} />


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
    }, entrada: {
        backgroundColor: 'white', borderWidth: 1, borderColor: '#BDC3C7', 
        borderRadius: 8, padding: 15, marginBottom: 20, alignItems: 'center',
    }
})