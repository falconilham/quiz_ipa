import React, { Component } from "react";
import { ImageBackground, Image, View, StyleSheet } from 'react-native';

export default class Loading extends Component{

    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        setInterval(() => {
            this.props.navigation.navigate('Home');
        }, 3000);
    }

    render(){
        return(
            <ImageBackground source={require('./image/LoadingBG.jpg')} style={{width: "100%", alignItems: "center", justifyContent: "center", height: "100%"}}>
                <View style={{width: "100%", height: 200}}>
                    <Image source={require('./image/logoquiz.png')} style={{height:"100%", width: "100%", maxWidth: "100%", maxHeight: "100%"}}/>
                </View>
            </ImageBackground>
        )
    }
}