// src/servico/SQLiteServico.js

import * as SQLite from 'expo-sqlite';

//1. Abre ou cria o arquivo do banco de dados
export async function abrirBanco() {
    const db = await SQLite.openDatabaseAsync('hortifruti.db');
    return db;
}

//2. Inicializa a tabela
export async function criarTabela(){
    try{
        const db = await abrirBanco();

        await db.execAsync(`
            CREATE TABLE IF NOT EXISTS lista(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                produto TEXT NOT NULL,
                preco REAL NOT NULL,
                unidade TEXT NOT NULL);    
        `);
        console.log('Banco inicializado com sucesso!')

    }catch(error){
        console.log('Erro ao criar a tabela:' + error);
    }
}

//3. CREATE: Adiciona produto
export async function adicionarProduto(nome, preco, unidade) {
    try{
        const db = await abrirBanco();
        db.runAsync(
            'INSERT INTO lista (produto, preco, unidade) VALUES (?, ?, ?);',
            [nome, preco, unidade]);        
    }catch(error){
        console.log('Falha ao adicionar item: ', error);
    }
}
//4. READ: Busca produto
export async function carregarLista(){
    try{
        const db = await abrirBanco();

        const itens = db.getAllSync('SELECT * FROM lista;');
        return itens;
    }catch(error){
        console.log('Erro ao carregar lista: ' + error);
        return [];
    }
}
//5. UPDATE: Atualiza produto
export async function atualizarProduto(produto, preco, unidade, id){
    try{
        const db = await abrirBanco();

        db.runAsync(
            'UPDATE lista SET produto=?, preco=?, unidade=? WHERE id=?;',
            [produto, preco, unidade, id]
        );
        console.log('Produto alterado com sucesso!');
    }catch(error){
        console.log('Falha ao alterar produto: ' + error);
        throw error;
    }
}

//6. DELETE: Apaga produto
export async function apagarProduto(id){
    try{
        const db = await abrirBanco();

        db.runAsync(
            'DELETE FROM lista WHERE id=?;',
            [id]
        );
        console.log('Produto removido com sucesso!');
    }catch(error){
        console.log('Falha ao remover produto: ' + error);
        throw error;
    }
}