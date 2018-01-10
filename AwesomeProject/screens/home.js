import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export class Home extends Component {
  constructor(props){
    super(props);

  }
/*
  static navigatorButtons = {
    rightButtons: [{
        title: 'Novo',
        id: 'novo'
    }]
  };
*/

render() {
  return(
    <View style={style=styles.backgroundView}>
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
