import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useState, useEffect} from 'react';
import { carregarSessaoUsuario, 
         removerSessaoUsuario } from '../servicos/AsyncStorageServico';

export default function PerfilScreen({navigation}){
    const [emailUsuario, setEmailUsuario] = useState('');

    useEffect(() => {
        carregarDadosUsuario();
    }, []);

    async function carregarDadosUsuario(){
        const emailSalvo = await carregarSessaoUsuario();
        if(emailSalvo){
            setEmailUsuario(emailSalvo);
        }
    }

    async function fazerLogout(){
        try{
            await removerSessaoUsuario();
            //Retorna para a tela de login
            navigation.replace('Login');
        }catch(error){
            console.error('Erro ao sair da conta');
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Perfil do cliente</Text>

            <View style={styles.card}>
                <Text style={styles.rotulo}>E-mail conectado: </Text>
                <Text style={styles.email}>{emailUsuario || 'Carregando...'}</Text>
            </View>

            <TouchableOpacity style={styles.botaoSair} onPress={fazerLogout}>
                <Text style={styles.textoBotaoSair}>Sair da conta</Text>
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
    }, card: {
        backgroundColor: 'white', padding: 20, borderRadius: 8, 
        width: '100%', marginBottom: 30, elevation: 2,
    }, rotulo: {
        fontSize: 14, color: '#7F8C8D', marginBottom: 5,
    }, email: {
        fontSize: 18, fontWeight: 'bold', color: '#2C3E50',
    }, botaoSair: {
        backgroundColor: '#E74C3C', padding: 15, borderRadius: 8,
        width: '100%', alignItems: 'center',
    }, textoBotaoSair: {
        color: 'white', fontWeight: 'bold', fontSize: 16,
    }
})