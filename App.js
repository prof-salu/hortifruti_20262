import { StatusBar } from 'expo-status-bar';
import {SafeAreaProvider, SafeAreaView} 
                          from 'react-native-safe-area-context'; 

//1. Importando as bibliotecas de navegação                          
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons} from '@expo/vector-icons';

//2. Importando as telas
import LoginScreen from './src/telas/LoginScreen';
import PerfilScreen from './src/telas/PerfilScreen';
import FeedScreen from './src/telas/FeedScreen';
import CatalogoScreen from './src/telas/CatalogoScreen';

//3. Criando os navegadores
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//4. Configurando a pilha de navegação 
export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={LoginScreen} 
                        options={{headerShown: false}}/>

          <Stack.Screen name='Catalogo' component={CatalogoScreen}/>
          <Stack.Screen name='Feed' component={FeedScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
