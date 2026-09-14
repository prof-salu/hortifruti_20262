import { StatusBar } from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context'; 

//1. Importando as bibliotecas de navegação                          
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons} from '@expo/vector-icons'; //https://ionic.io/ionicons

//2. Importando as telas
import LoginScreen from './src/telas/LoginScreen';
import PerfilScreen from './src/telas/PerfilScreen';
import FeedScreen from './src/telas/FeedScreen';
import CatalogoScreen from './src/telas/CatalogoScreen';

//3. Criando os navegadores
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//5. Navegação por ABAS
function TabNavegacao(){
  return(
    <Tab.Navigator screenOptions={({route}) => ({
      tabBarActiveTintColor : '#27AE60', //Cor da aba selecionada
      tabBarInactiveTintColor: '#CCC', //Cor da aba inativa
      headerShown: false, //Esconde o cabeçalho
      tabBarIcon : ({color, size}) => { //Colocando os icones das abas
        let nomeIcone;

        if(route.name === 'Loja'){
          nomeIcone = 'basket';
        }else if (route.name === 'Feed'){
          nomeIcone = 'megaphone';
        }else if(route.name === 'Perfil'){
          nomeIcone = 'person';
        }

        return <Ionicons name={nomeIcone} color={color} size={size} />
      }
    })}>
      
      <Tab.Screen name='Loja' component={CatalogoScreen}/>
      <Tab.Screen name='Feed' component={FeedScreen}/>
      <Tab.Screen name='Perfil' component={PerfilScreen}/>
    </Tab.Navigator>
  )
}

//4. Configurando a pilha de navegação 
export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={LoginScreen} 
                        options={{headerShown: false}}/>

          <Stack.Screen name='AreaLogada' component={TabNavegacao}
                        options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
