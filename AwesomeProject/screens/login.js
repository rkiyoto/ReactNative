import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  Alert
} from 'react-native';
import {Navigation} from 'react-native-navigation';
export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      senha: '',
    };
  }


  _login = () => {

    /*

    if(this.state.login != 'demo'){
      Alert.alert(
        'Ops',
        'Usuário e senha não encontrados',
        [
          {text: 'Beleza.', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: true}
      )
    }
    else {

    */
      Navigation.startTabBasedApp({
        tabs: [
          {
            label: 'Home',
            title: 'Home',
            screen: 'Home',
            icon: require('../images/home.png'),
            navigatorStyle:{
                drawUnderNavBar: false,
                navBarTextColor: 'white',
                navBarBackgroundColor: '#283593',
                statusBarColor: '#283593',
              }
            },
            {
              label: 'Config',
              title: 'Config',
              screen:'Settings',
              icon: require('../images/profile.png'),
              navigatorStyle:{
                  drawUnderNavBar: false,
                  navBarTextColor: '#e8eaf6',
                  navBarBackgroundColor: '#283593',
                  statusBarColor: '#283593',
            }
          },
        ],
        appStyle: {
          orientation: 'portrait',
          tabBarBackgroundColor: '#e8eaf6',
          tabBarButtonColor: '#283593',
          tabBarTranslucent: true,
        },
      });
    /* } */

      Navigation.startSingleScreenApp({
        screen: {
          screen: 'Home',
          title: 'Home',
          navigatorStyle: {
            navBarHidden: false,
            navBarTranslucent: false,
            drawUnderNavBar: false,
            navBarBackgroundColor: '#283593',
            navBarTextColor: 'white',
            statusBarColor: '#283593'
          }
        }
      });
    }

  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Image
            style={{width: 200, height: 200}}
            tintColor='#ffffff'
            source={require('../images/reactLogo.png')}
          />
        </View>
        <View style={styles.inputView}>
          <View style={styles.horizontalView}>
            <Text style={styles.loginLabels}>
              Login
            </Text>

            <TextInput
              style={{height: 40, width: 200, color: '#e8eaf6', fontSize: 18}}
              placeholder='Login'
              placeholderTextColor='#e8eaf6'
              underlineColorAndroid='#e8eaf6'
              keyboardType='email-address'
              autoCapitalize='none'
              onChangeText={(text) => this.setState({login: text})}
              // value={this.state.login}
            />
          </View>
          <View style={styles.horizontalView}>
            <Text style={styles.loginLabels}>
              Senha
            </Text>
            <TextInput
              style={{height: 40, width: 200, color : '#e8eaf6', fontSize: 18}}
              placeholder='Senha'
              placeholderTextColor='#e8eaf6'
              underlineColorAndroid='#e8eaf6'
              keyboardType='default'
              secureTextEntry={true}
              onChangeText={(text) => this.setState({senha: text})}
              // value={this.state.senha}
            />
          </View>
          <Button
            onPress={this._login}
            title="OK"
            color='#FFB84C'
            //disabled={this.state.login && this.state.senha? false : true}
            accessibilityLabel="Verificar credenciais"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#3C6FA9',
  },
  welcome: {
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 20,
    margin: 10,
    color: 'white'
  },
  imageView: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginLabels: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 5,
    color: 'darkgray'
  },
  inputView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    /*backgroundColor: 'black'*/
  },
  horizontalView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
