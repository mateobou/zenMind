import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Goal = ()=> {
    const navigation = useNavigation();  
    return(
        <View>
            <Pressable style={styles.square}
            onPress={
                ()=>{
                    navigation.navigate('Hello');
                }
            }>
                <Text>Goal ! </Text>
            </Pressable>
        </View>
    
    )
}
export default Goal;


const styles  = StyleSheet.create({
    square:{
        height:100,
        width:100,
        backgroundColor:'white'
    }
})