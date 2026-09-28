import {View, Text, StyleSheet, 
        TextInput, TouchableOpacity} from 'react-native';

import { useState } from 'react';

export default function CadastroScreen(){
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Tela de Cadastro</Text>

            <TextInput 
                style={styles.entrada}
                placeholder='Seu nome'/>

            <TextInput 
                style={styles.entrada}
                placeholder='Seu e-mail'
                keyboardType='email-address'
                autoCapitalize='none'/>
            
            <TextInput 
                style={styles.entrada}
                placeholder='Sua senha'
                secureTextEntry={true}/>
            
            <TextInput 
                style={styles.entrada}
                placeholder='Confirme sua senha'
                secureTextEntry={true}/>
            
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', padding: 20,
        backgroundColor: '#F5F7FA',
    }, titulo:{
        fontSize: 28, fontWeight: 'bold', 
        textAlign: 'center', color: '#2C3E50', marginBottom: 30,
    }, entrada: {
        backgroundColor: 'white', borderWidth: 1, padding: 15,
        borderColor: '#BDC3C7',borderRadius: 8,  fontSize: 16,
        marginBottom: 15, 
    }, botao: {
        backgroundColor: '#27AE60', padding: 15, borderRadius: 8, 
        alignItems: 'center',
    }, textoBotao: {
        color: 'white', fontWeight: 'bold', fontSize: 18
    }
})