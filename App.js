import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {SafeAreaProvider, SafeAreaView} 
                          from 'react-native-safe-area-context';
import CardProduto from './src/componentes/CardProduto';                          

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style='dark' />
        <Text style={styles.titulo}>Hortifruti da Gi</Text>

        <CardProduto 
          nome = 'Tomate Cereja'
          preco = '5,99'
          imagem={{uri: 'https://papelsemente.com.br/wp-content/uploads/2017/09/1609_tomate_cereja_2.jpg'}}/>

        <CardProduto 
          nome = 'Manga Palmer'
          preco = '7,98'
          imagem={{uri: 'https://assets.ibecom.com.br/ib.item.image.large/l-304ceaf857804a688a85e006db9fa94e.png'}}/>

        <CardProduto 
          nome = 'Cenoura orgânica'
          preco= '3,50'
          imagem={require('./assets/cenoura.jpeg')}/>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#F5F7FA', paddingHorizontal: 16
  }, 
  titulo: {
    fontSize: 24, fontWeight: 'bold', marginTop: 20, 
    color: '#2C3E50', paddingTop: 20, textAlign: 'center',
  }, 
});
