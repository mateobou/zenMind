import React from 'react';
import LottieView from 'lottie-react-native';
import { View, Text, StyleSheet } from 'react-native';

export default class BasicExample extends React.Component {
  componentDidUpdate(){
        this.animation.reset()
        this.animation.play();
        setTimeout(()=>this.animation.reset(),1000)

  }
  render() {
    return (
        <View style={styles.view}>
            <LottieView
                ref={animation => {
                this.animation = animation;
                }}
                source={require('./../../images/test.json')}
                style={{width:"100%"}}
            />
            <Text>Touchez votre écran à la fin de chaque expiration.</Text> 
            {this.props.boolTest===true && <Text>{this.props.numberCycle}</Text>}
        </View>
      
    );
  }
}
const styles = StyleSheet.create({
    view:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
})