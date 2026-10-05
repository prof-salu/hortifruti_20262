import {View, Text, StyleSheet, ScrollView, ActivityIndicator,
        TextInput, TouchableOpacity} from 'react-native';

import { useState } from 'react';

export default function CadastroScreen({navigation}){
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUF] = useState('');
    const [cepCarregando, setCepCarregando] = useState(false);

    async function buscaCep(cepDigitado){
        setCep(cepDigitado);
        
        if(cep.length === 8){
            setCepCarregando(true);

            try{
            //const resposta_alternativa = await fetch('https://viacep.com.br/ws/' + cep + '/json/');
            
            const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

            const dados = await resposta.json();

            console.log(dados);
            setRua(dados.logradouro)
            }catch(erro){
                console.error(erro);
            }finally{
                setCepCarregando(false);
            }
        }      
    }
    
    function validarCadastro(){
        if(nome.trim() === '' || email.trim() === '' ||
            senha.trim() === '' || confirmaSenha.trim() === ''){
                alert('Todos os campos devem estar preenchidos!');
                return;
        }

        if(senha !== confirmaSenha){
            alert('A confimação está diferente da senha!!!');
                return;
        }

        alert(`Sucesso! Bem-vindo ao hortifruti da Gi, ${nome}.`);
        //navigation.goBack();
        navigation.navigate('Login', {email : email, senha : senha})

    }

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Tela de Cadastro</Text>

            <TextInput 
                style={styles.entrada}
                placeholder='Seu nome'
                value={nome}
                onChangeText={setNome}/>

            <TextInput 
                style={styles.entrada}
                placeholder='Seu e-mail'
                keyboardType='email-address'
                autoCapitalize='none'
                value={email}
                onChangeText={setEmail}/>
            
            <TextInput 
                style={styles.entrada}
                placeholder='Sua senha'
                secureTextEntry={true}
                value={senha}
                onChangeText={setSenha}/>
            
            <TextInput 
                style={styles.entrada}
                placeholder='Confirme sua senha'
                secureTextEntry={true}
                value={confirmaSenha}
                onChangeText={setConfirmaSenha}/>
            
            <TextInput 
                style={styles.entrada} placeholder='Digite o CEP' keyboardType='numeric'
                maxLength={8} value={cep} onChangeText={buscaCep}/>
            
            {cepCarregando && <ActivityIndicator size='large' color='#27AE60'/> }

            <TextInput 
                style={[styles.entrada, styles.entradaDesativada]} placeholder='Rua' value={rua} editable={false}/>
            
            <TextInput
                style={[styles.entrada, styles.entradaDesativada]} placeholder='Bairro' value={bairro} editable={false}/>
            
            <TextInput 
                style={[styles.entrada, styles.entradaDesativada]} placeholder='Cidade' value={cidade} editable={false}/>
            
            <TextInput 
                style={[styles.entrada, styles.entradaDesativada]} placeholder='UF' value={uf} editable={false}/>

            <TouchableOpacity 
                style={styles.botao} 
                onPress={() => validarCadastro()}>
                <Text style={styles.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,  padding: 20, backgroundColor: '#F5F7FA',
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
        color: 'white', fontWeight: 'bold', fontSize: 18,
    }, entradaDesativada: {
        backgroundColor: '#EAEAEA', color: '#7F8C8D',
    }
})