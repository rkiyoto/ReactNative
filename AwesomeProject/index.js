import  React, { Component } from 'react';
import { Navigation, Screen } from 'react-native-navigation';

import {Login} from './screens/login';
import {Home}  from './screens/home';
import {Settings} from './screens/settings'
import {EditProfile} from './screens/editProfile';

Navigation.registerComponent('EditProfile', () => EditProfile);
Navigation.registerComponent('Login', () => Login);
Navigation.registerComponent('Home',  () => Home);
Navigation.registerComponent('Settings', () => Settings);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'Login',
    title: 'Login',
    navigatorStyle: {
      navBarHidden: true,
      navBarBackgroundColor: 'rgb(0,157,159)',
      /*statusBarColor: '#283593'*/
      statusBarColor: '#283593',
      statusBarTextColorScheme: 'light'
    }
  }
});
