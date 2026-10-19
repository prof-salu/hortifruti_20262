// src/servico/AsyncStorageServico.js

import AsyncStorage from "@react-native-async-storage/async-storage";

const CHAVE_USUARIO = '@hortifruti_usuario';

//1. Salvar email
export async function salvarSessaoUsuario(email){
    try{
        await AsyncStorage.setItem(CHAVE_USUARIO, email);
        console.log('Sessão salva com sucesso!');
    }catch(error){
        console.error('Erro ao salvar a sessão: ', error);
        throw error;
    }
}

//2. Recuperar email
export async function carregarSessaoUsuario(){
    try{
        const email = await AsyncStorage.getItem(CHAVE_USUARIO);
        return email;
    }catch(error){
        console.error('Erro ao carregar a sessão: ', error);
        return null;
    }
}

//3. apagar email
export async function removerSessaoUsuario(){
    try{
        await AsyncStorage.removeItem(CHAVE_USUARIO);
        console.log('Sessão removidade com sucesso!');
    }catch(error){
        console.error('Erro ao remover a sessão: ', error);
        throw error;
    }
}