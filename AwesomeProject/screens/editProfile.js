import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert
} from 'react-native';
import {Navigation} from 'react-native-navigation';

export class EditProfile extends Component{
  constructor(props){
    super(props);

    this.state = {};
  }


  render() {
    return(
      <View style={styles.backgroundView}>
        <View style={{paddingTop: 50}}>
          <View style={styles.cellView}>
            <Text style={styles.cellLabel}>Nome: </Text>
            <TextInput
              style={{height: 40, width: 200, color : '#757575', fontSize: 18}}
              placeholder='Nome'
              placeholderTextColor='lightgray'
              underlineColorAndroid='lightgray'
              keyboardType='default'
              onChangeText= {(text) => this.setState(nome: text)}
            />
          </View>

          <View style={styles.cellView}>
            <Text style={styles.cellLabel}>Email: </Text>
            <TextInput
              style={{height: 40, width: 200, color : '#757575', fontSize: 18}}
              placeholder='Email'
              placeholderTextColor='lightgray'
              underlineColorAndroid='lightgray'
              keyboardType='email-address'
              autoCapitalize='none'
            />
          </View>

          <View style={styles.cellView}>
            <Text style={styles.cellLabel}>Telefone: </Text>
            <TextInput
              style={{height: 40, width: 200, color : '#757575', fontSize: 18}}
              placeholder='Telefone'
              placeholderTextColor='lightgray'
              underlineColorAndroid='lightgray'
              keyboardType='phone-pad'
            />
          </View>
        </View>

        <View style={{padding: 50}}>
          <Button
          title="Confirmar"
          color='#009688'
          //disabled={this.state.login && this.state.senha? false : true}
          accessibilityLabel="Confirmar mudanças de login"
          onPress={this.props.atualizaDados}
          />
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  backgroundView:{
    flex:1,
    backgroundColor: '#e8eaf6',
  },

  cellView: {
    flexDirection: 'row',
    backgroundColor: '#e8eaf6',
    alignItems: 'center',
    padding: 10,
  },

  cellLabel: {
    fontSize: 16,
    textAlign: 'right',
    padding: 10,
    width: 100,

  },

})
