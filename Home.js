import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput, Linking, Image, TouchableOpacity, ImageBackground} from 'react-native';
import Soal from './Soal.json'
import Materi from './Materi.json' 
import { ScrollView } from 'react-native-gesture-handler';
//import LinearGradient from 'react-native-linear-gradient';

export default class Home extends Component{
  constructor(){
    super();
    this.state = {
      name : "",
      password : "",
      jawaban: "",
      materi: Materi.slice(),
      soal: "",
      current: "",
      nomor_soal: 0,
      condition : 1,
      nilai: 0,
      total_soal_dikerjakan: 1,
      image:[
        require('./image/air.jpg'),
        require('./image/udara.jpg'),
        require('./image/tanah.jpg')
      ]
    }
  }

  componentWillMount = () => {
    this.setState({
        soal: Soal.slice(),
        current: Math.floor(Math.random()* Soal.length),
    })
  }

  componentDidMount = () =>{
  }
  cekUser = () => {
    let UserName = this.state.name.split("")
    if(UserName.length == 0){
      alert("username Tidak Boleh Kosong")
    }else if(UserName.length < 5){
      alert("username tidak boleh kurang dari 5 karakter")
    }else{
      this.setState({
        condition : 2
      })
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
    //alert(this.state.current)
    if(this.state.total_soal_dikerjakan === 20){
      this.setState({
        condition : 4
      })
    }
  }
  static navigationOptions = {
    header: null
   };

  render() {
    {if(this.state.condition === 1) {
        return (
        <ImageBackground source={require('./image/bg.png')} {...this.props} style={styles.container}>
          <View style={
            {
              width: 100, 
             // backgroundColor:"green", 
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
            require('./image/logosmp.png')
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
          <ImageBackground source={require('./image/bg.png')} style={{flex: 1,flexDirection: "column", backgroundColor: "#fff9ae",justifyContent: "center", alignItems: "center"}}>
              <View style={
                {
                  height: "35%",
                  width: "95%",
                //  flex: 1,
                  justifyContent: "center",
                  alignItems: 'center', 
                //  backgroundColor: "grey",
                //  borderWidth: 1
                }
              }
              >
                <Image style={
                  {
                    width: "100%", 
                    height: "100%",
                  }
                } 
                source={
                  require('./image/LAYOUT1.jpg')
                }
                />
              </View>
              <TouchableOpacity onPress={
                () => this.setState(
                  {condition : 3}
                )
              }
              style={
                {
                  height: "30%",
                //  flex: 1,
                  marginVertical: "2.5%",
                //  justifyContent: "center",
                  alignItems: 'center',
                  //paddingTop: 15, 
                  backgroundColor: "transparent",
                //  borderWidth: 1,
                  borderRadius: 10,
                  width: "95%",
                  //backgroundColor: "rgba(0,0,0,0.5)",
                  //opacity: 0.5
                }
              }
              >
                <Image style={
                  {
                    width: "100%", 
                    height: "100%",  
                  }
                } 
                source={
                  require('./image/LAYOUT2.jpg')
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
                //  flex: 1,
                  height: "30%",
                  justifyContent: 'center', 
                  alignItems: 'center', 
                 // paddingTop: 15, 
                  backgroundColor: "transparent",
                //  borderWidth: 1,
                  borderRadius: 10,
                  width: "95%"
                }
              }
              >
                <Image style={
                  {
                    width: "100%", 
                    height: "100%",
                  }
                } 
                source={
                  require('./image/LAYOUT3.jpg')
                }
                />
              </TouchableOpacity>
            
          </ImageBackground>
        )
      }else if(this.state.condition === 3){
        return(
          <ImageBackground source={require('./image/bg.png')} style={{flex: 1, flexDirection: "column", width: "100%", justifyContent:"space-between", alignItems: "center", height: "100%"}}>
          <Button title="Back" style={{width: "100%"}} onPress={() => this.setState({condition: 2})} />
            {this.state.materi.map((item, i) => {
              return(
              <TouchableOpacity key={i} onPress={() => this.props.navigation.navigate('Materi', {judul: item.judul, materi: item.materi, image: item.image, other: item.other})} style={{justifyContent:"center", height: "100%", maxHeight: "30%", width:"95%"}}>
                <ImageBackground source={this.state.image[i]} style={{width: "100%", height: "100%", justifyContent:"center"}}>
                  <Text style={{textAlign: "center", fontSize: 28, color: "white"}}>{item.judul}</Text>
                </ImageBackground>
              </TouchableOpacity>
              )
            })}
          </ImageBackground>
        )
      }else if(this.state.condition === 4){
        return(
          <ImageBackground source={require('./image/bg.png')} style={{flex: 1,justifyContent: "center", alignItems: "center"}}>
            <Text style={styles.color}>Halo {this.state.name}</Text>
            <Text style={{marginVertical: 20, color: "black"}}>Total nilai anda {this.state.nilai}</Text>
            <Button onPress={() => this.setState({condition: 2, soal: Soal.slice(), total_soal_dikerjakan: 0, current: Math.floor(Math.random()* Soal.length)})} title="Back" />
          </ImageBackground>
        )
      }else{
        return(
          <ImageBackground source={require('./image/bg.png')} style={{flex: 1, alignItems: "center", paddingTop: "15%", backgroundColor: "#1ebbd7" }}>
              <View style={{alignItems: "center", justifyContent: "center" ,borderRadius: 3,width: "80%", height: "20%", backgroundColor: "white", marginBottom: 20}}>
                <Text style={{textAlign: "center", color: "black"}}>{this.state.soal[this.state.current].soal}</Text>
              </View>
              {this.state.soal[this.state.current].jawaban.map((item, i) => {
                return(
                  <View style={{width: "80%", marginVertical: 10}} key={i}>
                    <TouchableOpacity  style={{backgroundColor: "white", height: 35, justifyContent: "center"}} onPress={() => this.cekNilai(this, i, item)}>
                      <Text style={{textAlign: "center", color: "black"}}>{item}</Text>
                    </TouchableOpacity>
                  </View>
                )
              })}
          </ImageBackground>
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
  color: {
    color: "black"
  },
  textinput:{
    alignSelf: 'center',
    width: "60%",
    height: 40,
    
    borderRadius: 5,
    margin : 10,
    color: "black",
    backgroundColor: "white"
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
