import React, {useContext} from 'react';
import ZenProvider from './Component/context/zenMindContext';
import EditInspiration from './Component/test_setTimer/editInspiration';
import { StyleSheet, Text, View } from 'react-native';
import TimerComponent from './Component/test_setTimer/timer';
import Home from './Component/Home/home';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MMKVStorage, { useMMKVStorage } from "react-native-mmkv-storage";
import BackgroundD from './Component/Home/Background';
import History from './Component/history/history';
import Test from './Component/Test respiration/Test';
import AddToGCalendar from './Component/GoogleCalendar/AddToGoogleCalendar';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ZenProvider>
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={{activeBackgroundColor:'black', inactiveBackgroundColor:'black', activeTintColor:'#E6ADA1',inactiveTintColor:'white'}}>
          <Tab.Screen name="Home" component={Home} tabBarOptions={{activeBackgroundColor:'black'}}/>
          <Tab.Screen name="Historique" component={History} tabBarOptions={{activeBackgroundColor:'black'}}/>
          <Tab.Screen name="Test" component={Test} tabBarOptions={{activeBackgroundColor:'black'}}/>
          <Tab.Screen name="Calendar" component={AddToGCalendar} tabBarOptions={{activeBackgroundColor:'black'}}/>
        </Tab.Navigator>
      </NavigationContainer>
    </ZenProvider>
  );
}
const styles = StyleSheet.create({
  navbar:{
    backgroundColor:'black'
  }
})