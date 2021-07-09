import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Hello = ()=> {
    const navigation = useNavigation();
    return(
        <View>
            <Pressable style={styles.square} onPress={()=>navigation.navigate('Home')}>
                <Text>Hello !</Text>
            </Pressable>
            <Pressable style={styles.square}>
                <Text>Hello !</Text>
            </Pressable>
            <Pressable style={styles.square}>
                <Text>Hello !</Text>
            </Pressable>
        </View>
        
    )
}
export default Hello;

const styles  = StyleSheet.create({
    square:{
        height:100,
        width:100,
        backgroundColor:'white'
    }
})