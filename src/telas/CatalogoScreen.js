import {View, Text, StyleSheet, FlatList, TextInput} from 'react-native';
import CardProduto from '../componentes/CardProduto';
import { useState } from 'react';

export default function CatalogoScreen(){
    const PRODUTOS = [
  { id: '1', nome: 'Tomate Carmem', preco: '8,99', imagem: { uri: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=200' } },
  { id: '2', nome: 'Cenoura Orgânica', preco: '4,50', imagem: { uri: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=200' } },
  { id: '3', nome: 'Banana Prata', preco: '6,99', imagem: { uri: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=200' } },
  { id: '4', nome: 'Alface Crespa', preco: '3,00', imagem: { uri: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=200' } },
  { id: '5', nome: 'Morango Bandeja', preco: '12,00', imagem: { uri: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=200' } },
  { id: '6', nome: 'Tomate Cereja', preco: '6,99', imagem: { uri: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=200' } },
];
    const [termoBusca, setTermoBusca] = useState('');
    const produtosFiltrados = PRODUTOS.filter(
        (produto) => produto.nome.toLowerCase().includes(termoBusca.toLowerCase()));
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Hortifruti  da Gi</Text>
            <Text style={styles.subtitulo}>Produtos frescos todos os dias!</Text>

            <View style={styles.buscaContainer}>
                <TextInput 
                    style={styles.inputBusca}
                    placeholder='Buscar produtos'
                    value={termoBusca}
                    onChangeText={setTermoBusca}/>
            </View>

            <FlatList 
                data={produtosFiltrados}
                keyExtractor={(item => item.id)}
                renderItem={({item}) => (<CardProduto nome={item.nome}
                                                      preco={item.preco}
                                                      imagem={item.imagem}/>)}
                ListEmptyComponent={
                    <Text style={styles.textoListaVazia}>Não encontramos o produto pesquisado.</Text>
                }

                contentContainerStyle={{paddingBottom: 20}}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center', 
        backgroundColor: '#F5F7FA',
    }, titulo: {
        fontSize: 24, fontWeight: 'bold', color: '#2C3E50',
    }, subtitulo: {
        fontSize: 14, fontWeight: 'bold', color: '#7F8C8D', marginTop: 5,
    }, buscaContainer: {
        padding: 16,
    }, inputBusca: {
        backgroundColor: 'white', height: 50, borderRadius: 8, paddingHorizontal: 15,
        borderWidth: 1, borderColor: '#BDC3C7', fontSize: 16,
    }, textoListaVazia: {
        textAlign: 'center', color: '#7B8C8D', marginTop: 40, fontSize: 16,
    }
})