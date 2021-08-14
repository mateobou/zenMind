import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CompteRebour from '../counter/CompteRebour';
import saveRespiration from '../saveRespiration/saveRespiration';
import EditInspiration from '../test_setTimer/editInspiration';
import BackgroundD from './Background';
import Breathing from './Breathing';
import BreathSettings from './BreathSettings';
import choseRespiration from './choseRespiration';
import Respiration from './Respiration';
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
                <Stack.Screen name="Personnalisée" component={BreathSettings} options={{headerTitle:'Paramétrer sa respiration'}}/>
                <Stack.Screen name="Breath" component={CompteRebour} options={{headerTitle:'Respirer'}}/>
                <Stack.Screen name="Breathing" component={Breathing} options={{headerShown: false, tabBarVisible:false}}/>
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