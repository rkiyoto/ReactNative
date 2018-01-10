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
//
// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {showText: true};
//
//     // Toggle the state every second
//     setInterval(() => {
//       this.setState(previousState => {
//         return { showText: !previousState.showText };
//       });
//     }, 1000);
//   }
//
//   render() {
//     let display = this.state.showText ? this.props.text : ' ';
//     return (
//       <Text style={{color: 'white', fontSize: 20}}>{display}</Text>
//     );
//   }
// }


export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      senha: '',
    };
  }


  _login = () => {
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
            tintColor='#e8eaf6'
            source={require('../images/reactLogo.png')}
          />
        </View>
        <View style={styles.inputView}>
          <View style={styles.horizontalView}>
            <Text style={styles.loginLabels}>
              Login
            </Text>

            <TextInput
              style={{height: 40, width: 200, color: 'rgba(0,255,255,0.8)', fontSize: 18}}
              placeholder='Login'
              placeholderTextColor='rgba(0,255,255,0.3)'
              underlineColorAndroid='rgba(0,255,255,0.3)'
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
              style={{height: 40, width: 200, color : 'rgba(0,255,255,0.8)', fontSize: 18}}
              placeholder='Senha'
              placeholderTextColor='rgba(0,255,255,0.3)'
              underlineColorAndroid='rgba(0,255,255,0.3)'
              keyboardType='default'
              secureTextEntry={true}
              onChangeText={(text) => this.setState({senha: text})}
              // value={this.state.senha}
            />
          </View>
          <Button
            onPress={this._login}
            title="OK"
            color='rgb(0,200,200)'
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
    backgroundColor: '#283593',
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
