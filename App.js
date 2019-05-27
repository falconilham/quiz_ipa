/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, Linking, Image, TouchableOpacity} from 'react-native';
import Data from './data/data.json';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      name : "",
      password : "",
      soal: [],
      jawaban: "",
      materi: "",
      condition : 1,
      soal: Data.data
    }
  }

  cekUser = () => {
    if(this.state.name === "admin" && this.state.password === "admin"){
      this.setState({
        condition : 2
      })
    }else{
      alert('Username Atau Password Salah')
    }
  }
  render() {
    {if(this.state.condition === 1) {
        return (
        <View style={styles.container}>
          <View style={
            {
              width: 100, 
              backgroundColor:"green", 
              height:100, 
              marginBottom: 30
            }
          }>
          <Image style={
            {
              width: 100, 
              height: 100
            }
          } 
          source={
            require('./image/download.png')
          }
          />
          </View>
            <TextInput style={
              styles.textinput
            } 
            onChangeText={
              (name) => this.setState({name})
            } 
            placeholder="Input Nama Anda" />
            
            <TextInput style={
              styles.textinput
            } 
            onChangeText={
              (password) => this.setState({password})
            } 
            secureTextEntry={true} 
            placeholder="Input Password" 
            />
          <Button 
            color="#a3a2f1" 
            onPress={
              () => this.cekUser()
            } 
            title="login" 
            />
        </View>
      )}else if (this.state.condition === 2){
        return (
          <View>
              <View style={
                {
                  paddingTop: 10, 
                  alignItems: 'center', 
                  height: "40%", 
                  backgroundColor: "grey"
                }
              }
              >
                <Image style={
                  {
                    width: 100, 
                    height: 100
                  }
                } 
                source={
                  require('./image/download.png')
                }
                />
                <Text>{this.state.name}</Text>
              </View>
              <TouchableOpacity onPress={
                () => this.setState(
                  {condition : 3}
                )
              } 
              style={
                {
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: 15, 
                  backgroundColor: "red"
                }
              }
              >
                <Image style={
                  {
                    width: 100, 
                    height: 100, 
                    marginBottom: 50
                  }
                } 
                source={
                  require('./image/download.png')
                }
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={
                () => this.setState(
                  {
                    condition : 4
                  }
                )
              } 
              style={
                {
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  paddingTop: 15, 
                  backgroundColor: "yellow"
                }
              }
              >
                <Image style={
                  {
                    width: 100, 
                    height: 100
                  }
                } 
                source={
                  require('./image/download.png')
                }
                />
              </TouchableOpacity>
          </View>
        )
      }else if(this.state.condition === 3){
        return(
          <View>
            <Text>{this.state.soal.data && this.state.soal.data.materi}</Text>
          </View>
        )
      }else{
        return(
          <View>
            <Text>Soal</Text>
          </View>
        )
      }
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: "35%",
  },
  textinput:{
    alignSelf: 'center',
    width: "60%",
    backgroundColor: "blue",
    margin : 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
