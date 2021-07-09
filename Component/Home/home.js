import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import saveRespiration from '../saveRespiration/saveRespiration';
import EditInspiration from '../test_setTimer/editInspiration';
import Background from './../../images/home-fond.png'
import BackgroundD from './Background';
import Breathing from './Breathing';
import BreathSettings from './BreathSettings';
import ButtonRespire from './Button_Respire';
import choseRespiration from './choseRespiration';
import Respiration from './Respiration';
import Selectionnable from './Selection';
import TimeChoice from './timeChoice';
import TimeChoice3 from './TimeChoiceVertical';
function Home(){
    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();
    return(
        <View style={styles.fullWidth}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={BackgroundD} options={{headerShown:false}}/>
                <Stack.Screen name="Respiration" component={choseRespiration}/>
                <Stack.Screen name="Énergie">
                    {props => <Respiration name="Énergie"/>}
                </Stack.Screen>
                <Stack.Screen name="Sommeil">
                    {props => <Respiration name="Sommeil"/>}
                </Stack.Screen>
                <Stack.Screen name="Calme" component={TimeChoice3}>
                </Stack.Screen>
                <Stack.Screen name="Personnalisée" component={BreathSettings} options={{headerTitle:'Parametrer sa respiration'}}/>
                <Stack.Screen name="Breath" component={Breathing} options={{headerTitle:'Respirer'}}/>
                <Stack.Screen name="Edit" component={EditInspiration}/>
                <Stack.Screen name="saveRespiration" component={saveRespiration}/>
            </Stack.Navigator>
            
        </View>
    )
}
export default Home;

const styles = StyleSheet.create({
    home:{
        width:400,
        flex:1,
        alignItems:'center',
        justifyContent:'center', 
    },
    fullWidth:{
        width:'100%',
        flex:1,
        display:"flex",
        justifyContent:'center',
        
    }
})