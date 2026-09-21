import {View, Text, StyleSheet, 
        TouchableOpacity, TextInput, Alert} from 'react-native';
import { useState } from 'react';

export default function LoginScreen({navigation}){
    //Estados
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function fazerLogin(){
        
        if(email.trim() === '' || senha.trim() === ''){
            alert('Preencha sem e-mail e senha!');
        }else{
            if(email === 'teste@email.com' && senha === '1234'){
                //Logado
                navigation.navigate('AreaLogada');        
            }else{
                alert('Usuário ou senha incorretos.');
            }
        }        
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Hortifruti da Dona Gigi</Text>

            <TextInput
                style={styles.entrada}
                placeholder='E-mail'
                autoCapitalize='none'
                onChangeText={setEmail}
                keyboardType='email-address'
                value={email} />
            
            <TextInput 
                style={styles.entrada}
                placeholder='Senha'
                autoCapitalize='none'
                onChangeText={setSenha}
                secureTextEntry={true} 
                value={senha}/>

            <TouchableOpacity style={styles.botao} onPress={fazerLogin}>
                <Text style={styles.textoBotao}>Entrar na loja</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoLink}>
                <Text style={styles.textoLink}>Anda não tem conta? Cadastre-se</Text>
            </TouchableOpacity>
        </View>        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center', 
        backgroundColor: '#F5F7FA',
    }, titulo: {
        fontSize: 24, fontWeight: 'bold', marginBottom: 40,
    }, botao:{
        backgroundColor: '#27AE60', padding: 15, borderRadius: 8,
    }, textoBotao: {
        color: 'white', fontWeight: 'bold', fontSize: 16,
    }, entrada: {
        backgroundColor: 'white', borderWidth: 1, borderColor: '#BDC3C7', 
        borderRadius: 8, padding: 15, marginBottom: 20, alignItems: 'center',
    }, botaoLink: {
        alignItems: 'center',
    }, textoLink: {
        color:'#2980b9', fontSize: 16, fontWeight: 'bold',
    }
})