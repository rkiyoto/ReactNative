import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  Image,
  Alert
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

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.state = {
      refreshing: false,
      caronas: [],
      extraData: [],
      qtdCaronas: 0
    }
  }

  onNavigatorEvent(event) {
    if(event.type == 'NavBarButtonPress') {
      if(event.id == 'novo') {
        this.props.navigator.showModal({
          screen: 'Novo',
          title: 'Novo',
          backButtonTitle: 'voltar',
          animationType: 'fade',
          passProps: {atualizaDados: this._adicionaCarona, index: this.state.qtdCaronas},
          navigatorStyle: {
            navBarHidden: false,
            drawUnderNavBar: false,
            navBarTextColor: '#e8eaf6',
            navBarBackgroundColor: '#283593',
            statusBarColor: '#283593',
            navBarButtonColor: '#e8eaf6',
          },
        })
      }
    }
  }

_adicionaCarona = (_novo) => {
  this.setState({extraData: _novo})
  this.setState({qtdCaronas: this.state.qtdCaronas + 1})
  Alert.alert(
    'Done',
    'extraData modificado',
    [
      {text: 'Beleza.', onPress: () => {
        this.props.navigator.dismissModal({
          animationType: 'fade'
        })
    }},
    ],
    {cancelable: true}
  )
}

_atualizaTabela = () => {
  this.setState({refreshing: true})

  var newArray = this.state.caronas.slice()
  newArray.push(this.state.extraData)
  this.setState({caronas:newArray})

  this.setState({refreshing: false})
  this.setState({extraData: []})
}

_renderCell = ({item}) => (

  <View style={styles.cellStyle}>
    <View style={{flexDirection: 'row'}}>

      <View style={{paddingLeft: 10}}>
        <View style={styles.dateViewStyle}>
          <View>
            <Text style={styles.textDia}>{item.data}</Text>
          </View>


          <View style={{paddingLeft: 10}}>
            <Text style={styles.textMesAno}>{item.mes}</Text>
            <Text style={styles.textMesAno}>{item.ano}</Text>
          </View>


        </View>
          <Text style={styles.horaStyle}>{item.hora}</Text>
      </View>

      <View style={{justifyContent: 'center', paddingLeft: 40}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{width: 30, height: 30}}
            tintColor='#277552'
            source={require('../images/location.png')}
          />
          <Text style={{paddingLeft: 10, color: '#003B20', fontSize: 16}}>{item.origem}</Text>
        </View>
        <View style={{flexDirection: 'row', paddingTop: 10}}>
          <Image
            style={{width: 30, height: 30}}
            tintColor='#AA5839'
            source={require('../images/destination.png')}
          />
          <Text style={{paddingLeft: 10, color: '#551700', fontSize: 16}}>{item.destino}</Text>
        </View>
      </View>

    </View>
  </View>

);

render() {
  return(
  <View style={styles.backgroundView}>
    <FlatList
      style={styles.viewStyle}
      extraData={this.state.extraData}
      refreshing={this.state.refreshing}
      onRefresh={this._atualizaTabela}
      data={this.state.caronas}
      renderItem={this._renderCell}
    />

  </View>
  )
}

}

const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    backgroundColor: '#e8eaf6',
  },

  viewStyle: {
    backgroundColor: '#e8eaf6',
  },

  dateViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  horaStyle: {
    fontSize: 30,
    color: '#133453',
  },

  cellStyle: {
    backgroundColor: '#E4F0FB',
    padding: 10,
    marginBottom: 3,

  },

  textDia: {
    fontSize: 30,
    color: '#85AED2',
  },

  textMesAno: {
      fontSize: 16,
      color: '#85AED2',
  },

});
