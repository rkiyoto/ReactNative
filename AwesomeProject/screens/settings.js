import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Alert,
  Button} from 'react-native';
import {Navigation} from 'react-native-navigation';

export class Settings extends Component {

  static navigatorButtons = {
    rightButtons: [{
        icon: require('../images/edit.png'),
        id: 'edit',
        buttonColor: '#e8eaf6',
        buttonFontSize: 16,
    }]
  };

  constructor(props){
    super(props);

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.atualizaDados = this.atualizaDados.bind(this);
    this.state = {

    };
  }

  atualizaDados(_nome, _email, _telefone){
    this.setState({nome: _nome});
    this.setState({email: _email});
    this.setState({telefone: _telefone});
    /*
    Alert.alert(
      'Done.',
      'Nome alterado',
      [
        {text: 'Beleza.', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: true}
    )
    */
  }

  onNavigatorEvent(event) {
    if(event.type == 'NavBarButtonPress') {
      if(event.id == 'edit'){

        this.props.navigator.showModal({
          screen:'EditProfile',
          title: 'Editar',
          backButtonTitle: 'voltar',
          animationType: 'fade',
          passProps: {atualizaDados: this.atualizaDados},
          navigatorStyle: {
            drawUnderNavBar: false,
            navBarTextColor: '#e8eaf6',
            navBarBackgroundColor: '#283593',
            statusBarColor: '#283593',
            navBarButtonColor: '#e8eaf6',
          },
        });

/*https://stackoverflow.com/questions/46629853/how-to-from-one-component-set-state-another-component-in-react-native*/
/*
        this.setState({nome: this.state.nome==null? 'Carol' : null});
        this.setState({email: this.state.email==null? 'rafa.kiyoto@gmail.com' : null});
        this.setState({telefone: this.state.telefone==null? '19 993434774' : null});
*/
      }
    }
  }

  render() {
    return(
      <View style={styles.backgroundView}>
        <View style={styles.imageView}>
          <Image
            tintColor='#283593'
            source={require('../images/profile.png')}
            style={{width: 200, height: 200}}
          />
          <Text style={{paddingTop: 10, fontSize: 30, color: '#283593'}}>{this.state.nome==null? "null" : this.state.nome}</Text>
        </View>
        <View>
          <Text style={{paddingTop: 70, paddingLeft:20, fontSize: 20}}>{this.state.email==null? null : this.state.email}</Text>
          <Text style={{paddingTop: 50, paddingLeft:20, fontSize: 20}}>{this.state.telefone==null? null : this.state.telefone}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backgroundView: {
    flex:1,
    backgroundColor:'#e8eaf6',
  },

  imageView: {
    alignItems: 'center'
  }

})
