import  React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import { Navigation } from 'react-native-navigation';

import {Login} from './screens/login';

Navigation.registerComponent('Login', () => Login);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'Login',
    title: 'Login',
    navigatorStyle: {
      navBarHidden: true,
      navBarBackgroundColor: 'rgb(0,157,159)',
      statusBarColor: '#283593'
    }
  }
});
