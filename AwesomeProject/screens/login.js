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

export class Login extends Component {

  _alert = () => {
    Alert.alert(
      'Ops',
      'Ainda nao implementado',
      [
        {text: 'Beleza.', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: true }
    )
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
              /*onChangeText={(text) => this.setState({text})}
              value={this.state.text}*/
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
              /*onChangeText={(text) => this.setState({text})}
              value={this.state.text}*/
            />
          </View>
          <Button
            onPress={this._alert}

            title="OK"
            color='rgb(0,200,200)'
            accessibilityLabel="Learn more about this purple button"
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
