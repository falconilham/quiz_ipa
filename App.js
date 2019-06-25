/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput, Linking, Image, TouchableOpacity, ImageBackground} from 'react-native';
import Soal from './Soal.json'

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      name : "",
      password : "",
      soal: Soal.slice(),
      jawaban: "",
      current: Math.floor(Math.random()* 51),
      materi: "",
      nomor_soal: 0,
      condition : 1,
      nilai: 0,
      total_soal_dikerjakan: 0
    }
  }

  componentDidMount = () =>{
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

  cekNilai = (e, i,item) => {
    if(item === this.state.soal[this.state.current].jawaban_benar){
      this.setState({
        nilai: this.state.nilai + 1 * 10 / 2,
        nomor_soal : this.state.nomor_soal + 1,
      })
    }else{
      this.setState({
        nilai : this.state.nilai + 0 * 10 / 2,
        nomor_soal : this.state.nomor_soal + 1
      })
    }
    this.state.soal.splice(this.state.current, 1)
    this.setState({
      current: Math.floor(Math.random() * this.state.soal.length),
      total_soal_dikerjakan: this.state.total_soal_dikerjakan + 1
    })
    if(this.state.total_soal_dikerjakan === 19){
      this.setState({
        condition : 4
      })
    }
  }

  render() {
    {if(this.state.condition === 1) {
        return (
        <ImageBackground source={require('./image/LAYOUT3-1.jpg')} {...this.props} style={styles.container}>
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
        </ImageBackground>
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
                    condition : 5
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
          <View style={{alignItems: "center"}}>
            <Text>{this.state.materi.judul}</Text>
            <View style={{marginVertical: 20}}>
              <Image style={{width: 300, height: 300}} source={require('./image/matahari.jpg')} />
            </View>
            <Text>    {this.state.materi.isi_materi}</Text>
            <Button title="Back To Home" style={{marginTop: 20}} onPress={() => this.setState({condition: 2})} />
          </View>
        )
      }else if(this.state.condition === 4){
        return(
          <View>
            <Text>Total nilai {this.state.nilai}</Text>
          </View>
        )
      }else{
        return(
          <View>
              <Text>{this.state.soal[this.state.current].soal}</Text>
              {this.state.soal[this.state.current].jawaban.map((item, i) => {
                return(
                  <View key={i}>
                    <TouchableOpacity>
                      <Button onPress={() => this.cekNilai(this, i, item)} title={item} />                    
                    </TouchableOpacity>
                  </View>
                )
              })}
          </View>
        )
      }
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 568,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: "35%",
  },
  textinput:{
    alignSelf: 'center',
    width: "60%",
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    margin : 10,
    color: "black"
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
