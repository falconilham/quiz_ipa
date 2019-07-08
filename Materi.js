import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput, Linking, Image, TouchableOpacity, ImageBackground} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Materi extends Component{
    constructor(props){
        super(props);
        this.state = {
            judul: this.props.navigation.state.params.judul,
            materi: this.props.navigation.state.params.materi,
            other: this.props.navigation.state.params.other,
        }
    }

    static navigationOptions = {
        title: 'Materi'
    };
    render(){
        return(
            <ImageBackground source={require('./image/bg.png')} style={{width: "100%", height: "100%", alignItems: "center"}}>
                <View style={{marginVertical: 10, width: "90%", height: "8%", backgroundColor: "white", justifyContent: "center"}}>
                    <Text style={{textAlign: "center", fontSize: 18, color: "black"}}>{this.state.judul}</Text>
                </View>
                <ScrollView style={{width: "90%", backgroundColor: "white"}}>
                    <Text style={{color: "black"}}>{this.state.materi}</Text>
                    {this.state.other.map((item, i ) => {
                        return(
                            <View key={i}>
                                <Text style={{color: "black"}}>{i + 1}. {item.list_judul}</Text>
                                <Text style={{color: "black"}}>{item.isi}</Text>
                                {item.isi_list.map((item, i) => {
                                    return(
                                        <View key={i} style={{marginVertical: 2, marginLeft: 10}}>
                                            <Text style={{marginVertical: 2, color: "black"}}>{String.fromCharCode(97 + i)}. {item.judul}</Text>
                                            <Text style={{color: "black"}}>{item.isi}</Text>
                                        </View>
                                    )
                                })}
                            </View>
                        )
                    })}
                </ScrollView>
            </ImageBackground>
        )
    }
}