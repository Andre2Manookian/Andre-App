import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Entypo } from '@expo/vector-icons';



import WelcomeScreen from './Screens/WelcomeScreen';
import Home from './Screens/Home';
import News from './Screens/News';
import Profile from './Screens/Profile';
import Colors from './Shared/Colors';
import readnews from './Screens/Components/readnews';



const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();


function StackScreen() {

  return (
    
    <Stack.Navigator screenOptions={{
        gestureEnabled: false, // Disable the back gesture
      }}
       initialRouteName='onbording '>
      <Stack.Screen options={{headerShown:false}}  name="Welcome" component={WelcomeScreen} />
      <Stack.Screen options={{headerShown:false}}  name="TabScreen" component={TabScreen} />
      <Stack.Screen options={{headerShown:false}}  name="Home" component={Home} />
      <Stack.Screen options={{headerShown:false}}  name="News" component={News} />
      <Stack.Screen options={{headerShown:false}}  name="Profile" component={Profile} />
      <Stack.Screen options={{headerShown:false}} name="readnews" component={readnews} />

      



     
    </Stack.Navigator>
  );
    }

function TabScreen() {
  return (
    <Tab.Navigator >
      <Tab.Screen   name="Home" component={Home} />
      <Tab.Screen options={{headerTitleStyle:{fontSize:20 , color:Colors.primary , fontWeight:"700"}}} name="Andre News" component={News} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
     
    <StackScreen/>

      
    </NavigationContainer>
  );
}

export default App;

