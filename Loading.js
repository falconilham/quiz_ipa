import React, { Component } from "react";
import { ImageBackground, Image, View, TouchableOpacity } from 'react-native';

export default class Loading extends Component{
    constructor(){
        super();
        this.state = {
            timer : 300
        }
    }

    static navigationOptions = {
        header: null
    };

    Loading = () => {
        this.props.navigation.navigate('Home');
    }
    
    render(){
        return(
            <TouchableOpacity onPress={() => this.Loading()}>
            <ImageBackground onPress={() => this.Loading()} source={require('./image/LoadingBG.jpg')} style={{width: "100%", alignItems: "center", justifyContent: "center", height: "100%"}}>
                <View style={{width: "100%", height: 200}}>
                    <Image source={require('./image/logoquiz.png')} style={{height:"100%", width: "100%", maxWidth: "100%", maxHeight: "100%"}}/>
                </View>
            </ImageBackground>
            </TouchableOpacity>
        )
    }
}