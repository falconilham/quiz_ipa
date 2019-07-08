import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from "./Home";
import Materi from "./Materi";

const Project= createStackNavigator({
  Home: {
   screen: Home
  },
  Materi: {
   screen: Materi
  }
});
export default createAppContainer(Project);