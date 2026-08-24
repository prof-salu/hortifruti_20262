import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {SafeAreaProvider, SafeAreaView} 
                          from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style='dark' />
        <Text style={styles.titulo}>Hortifruti da Gi</Text>

        <View>
          <Text>Tomate cereja</Text>
          <Text>R$ 5,99</Text>
          <Image 
            style={styles.imagem} 
            source={{uri : 'https://papelsemente.com.br/wp-content/uploads/2017/09/1609_tomate_cereja_2.jpg'}}/>
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
    fontSize: 24, fontWeight: 'bold', marginTop: 20, 
    color: '#2C3E50', paddingTop: 20, textAlign: 'center',
  }, 
  imagem: {
    width: 70, height: 70
  }
});
