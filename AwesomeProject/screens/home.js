import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';
import {Navigation} from 'react-native-navigation';

export class Home extends Component {

  static navigatorButtons = {
    rightButtons: [{
        icon: require('../images/add.png'),
        id: 'novo',
        buttonColor: 'white',
        buttonFontSize: 16,
    }]
  };

  constructor(props){
    super(props);
    /*https://stackoverflow.com/questions/30571875/whats-the-difference-between-super-and-superprops-in-react-when-using-e*/
  }


render() {
  return(
    <View style={style=styles.backgroundView}>
     <Text>Home</Text>
    </View>
  )
}

}

const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    backgroundColor: '#e8eaf6',
    alignItems: 'center'
  },

  texts: {
    fontSize: 15,
    color: '#283593',
  }
});
