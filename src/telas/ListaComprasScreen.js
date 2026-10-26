//src/telas/ListaComprasScreen

import {useState, useEffect} from 'react';
import {View, Text, TextInput, FlatList, TouchableOpacity, 
    StyleSheet,} from 'react-native';

import { criarTabela, adicionarProduto, apagarProduto, 
    atualizarProduto, carregarLista } from '../servicos/SQLiteServico';

export default function ListaComprasScreen(){
    const [produtos, setProdutos] = useState([]);
    const [idEditando, setIdEditando] = useState(null);
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [unidade, setUnidade] = useState('');

    useEffect(() => {
        prepararBanco();
    }, []);

    async function prepararBanco() {
        await criarTabela();
        const lista = await carregarLista();
        setProdutos(lista);
    }

    async function salvarProduto(){
        if(nome.trim() === '' || quantidade.trim() === '' || unidade.trim() === ''){
            alert('Todos os campos devem ser preenchidos');
            return;
        }

        try{
            if(idEditando){
                //UPDATE
            }else{
                //INSERT
                await salvarProduto(nome, quantidade, unidade);
                alert('Produto gravado com sucesso!');
            }
        }catch(error){
            alert('Falha ao gravar: ' + error);
        }finally{
            setIdEditando(null);
            setNome('');
            setQuantidade('');
            setUnidade('');
        }
    }


    return(
        <View style={styles.container}>
            <View style={styles.formulario}>
                <Text style={styles.titulo}>Lista de compras</Text>

                <TextInput 
                    placeholder='Nome do produto' onChangeText={setNome}
                    value={nome} style={styles.entrada}/>

                <TextInput 
                    placeholder='Quantidade' onChangeText={setQuantidade}
                    value={quantidade} style={styles.entrada}
                    keyboardType='numeric'/>
                
                <TextInput 
                    placeholder='Unidade (ex: kg, bandeja, duzia)' 
                    onChangeText={setUnidade}
                    value={unidade} style={styles.entrada}/>
                
                <TouchableOpacity style={styles.botaoSalvar} onPress={salvarProduto}>
                    <Text style={styles.textoBotao}>
                        {idEditando ? 'Alterar Produto' : 'Adicionar a lista'}
                    </Text>
                </TouchableOpacity>

                {idEditando && (
                    <TouchableOpacity style={styles.botaoCancelar}>
                        <Text style={styles.textoBotao}>Cancelar</Text>
                    </TouchableOpacity>
                )}
            </View>

            <FlatList 
                data={produtos}
                keyExtractor={item => item.id}
                renderItem={({item}) => <Text>{item.nome}</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, padding: 20, backgroundColor: '#F5F7FA',
        marginTop: 20,
    }, 
    formulario: { backgroundColor: '#FFF', padding: 15, 
        borderRadius: 8, marginBottom: 15, borderWidth: 1, 
    },
    titulo: {fontSize: 16, fontWeight: 'bold', color: '#27AE60',
        marginBottom: 12, textAlign: 'center',
    }, entrada: {
        backgroundColor: '#F9F9F9', borderWidth: 1, borderRadius: 8,
        padding: 12, marginBottom: 10, fontSize: 14,
    }, botaoSalvar: {
        backgroundColor: '#28AE60', padding: 12, borderRadius: 8,
        alignItems: 'center',
    }, botaoCancelar: {
        backgroundColor: '#95A5A6', padding: 12, borderRadius: 8,
        alignItems: 'center',
    }, textoBotao: {
        color: 'white',fontSize: 13, fontWeight: 'bold',
    }
});
