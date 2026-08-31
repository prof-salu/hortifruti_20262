import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView,
         Platform, Alert, TouchableOpacity } from 'react-native';
import {SafeAreaProvider, SafeAreaView} 
                          from 'react-native-safe-area-context';
import CardProduto from './src/componentes/CardProduto';                          

export default function App() {

  function exibeMensagem(msg){
    if(Platform.OS == 'android' || Platform.OS == 'ios'){
      Alert.alert('Tela acessada', msg);
    }else if (Platform.OS == 'web'){
      alert(msg);
    }
  }


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style='dark' />

        <Text style={styles.titulo}>Hortifruti da Gi</Text>

        <ScrollView>
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
          
          <CardProduto 
            nome = 'Kiwi'
            preco= '6,50'
            imagem={require('./assets/kiwi.jpg')}/>
        </ScrollView>

        <View style={styles.containerBotoes}>
          <TouchableOpacity style={styles.botao} onPress={() => exibeMensagem('Loja')}>
            <Text style={styles.textoBotao}>Loja</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}  onPress={() => exibeMensagem('Feed')}>
            <Text style={styles.textoBotao} >Feed</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => exibeMensagem('Perfil')}>
            <Text style={styles.textoBotao}>Perfil</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#F5F7FA', paddingHorizontal: 16
  }, 
  titulo: {
    fontSize: 24, fontWeight: 'bold', marginTop: 20, backgroundColor: '#27AE60', 
    color: '#2C3E50', padding: 20, textAlign: 'center',
  }, 
  //alignItens ==> centralizar Horizontalmente
  //justifyContent ==> centralizar Verticalmente
  containerBotoes: {
    flexDirection: 'row', backgroundColor: '#fff', padding: 15,
    justifyContent: 'space-around', borderColor: '#EAEAEA', borderWidth:1,
  }, 
  botao: {
    padding: 15, alignItems: 'center', backgroundColor: '#cfcfcf', width: 100
  },
  textoBotao: {
    fontSize: 14, color: '#34495E', fontWeight: 'bold',
  }
});
