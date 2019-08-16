import React, { Component } from "react";
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from "./Home";
import Loading from "./Loading";
import Materi from "./Materi";

const Project= createStackNavigator({
  Home: {
   screen: Home
  },
  Materi: {
   screen: Materi
  }
});

export default createAppContainer(createSwitchNavigator(
  {
    Project : Project,
    Loading : Loading,
  },
  {
    initialRouteName: 'Loading'
  }
))