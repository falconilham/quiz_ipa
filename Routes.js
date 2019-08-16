import React, { Component } from "react";
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from "./Home";
import Loading from "./Loading";
import Materi from "./Materi";

const AppStack = createStackNavigator({ Home: Home, Materi: Materi});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: Loading,
    App: AppStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));