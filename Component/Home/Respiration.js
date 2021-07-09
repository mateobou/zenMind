import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Respiration = ({name})=> {
    const navigation = useNavigation();
    return(
        <View>
            <Text>{name}</Text>
        </View> 
    )
}
export default Respiration;
const styles  = StyleSheet.create({
    square:{
        height:100,
        width:100,
        backgroundColor:'white'
    }
})