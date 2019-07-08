import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput, Linking, Image, TouchableOpacity, ImageBackground} from 'react-native';

export default class Materi extends Component{
    constructor(props){
        super(props);
        this.state = {
            judul: this.props.navigation.state.params.judul
        }
    }

    static navigationOptions = {
        title: 'Materi'
    };
    render(){
        return(
            <View>
                <Text>{this.state.judul}</Text>
            </View>
        )
    }
}