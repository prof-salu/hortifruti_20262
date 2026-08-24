// src/componentes/CardProduto.js
import {View, Text, StyleSheet, Image} from 'react-native';

export default function CardProduto(props){
    return(
        <View style={styles.card}>
            <Image 
                style={styles.imagem} 
                source={props.imagem}/>
            <View style={styles.info}>
                <Text style={styles.nome}>{props.nome}</Text>
                <Text style={styles.preco}>R$ {props.preco}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imagem: {
        width: 70, height: 70, marginRight: 12, borderRadius: 8,
    }, 
    card: {
        backgroundColor: '#fff', padding: 12, marginBottom: 16,
        borderRadius: 8, flexDirection: 'row', elevation: 3
    }, 
    nome: {
        fontSize: 18, fontWeight: 'bold'
    },
    preco:{
        fontSize: 16, fontWeight: 'bold', color: '#27AE60',
    },
    info: {
        justifyContent: 'center',
    }
})