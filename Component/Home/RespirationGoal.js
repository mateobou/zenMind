import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Goal from './Goal';
import Hello from './Hello';
import Home from './home';
function RespirationGoal({navigation})
{
    const Stack = createStackNavigator();
    
    return (
        <View style={styles.fullWidth}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Hello" component={Hello}/>
            </Stack.Navigator>
        </View>
    )
}
export default RespirationGoal;

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