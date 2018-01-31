import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  Image,
  Picker,
  DatePickerAndroid,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import DatePicker from 'react-native-datepicker'

export class Novo extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render() {
    return(
      <View style={styles.backgroundView}>
        <View style={styles.cellStyle}>
          <Image
            style={{width: 30, height: 30}}
            tintColor='#277552aa'
            source={require('../images/location.png')}
          />
          <Text style={styles.labelStyle}> Origem: </Text>
          <Picker
            style={styles.pickerStyle}
            selectedValue={this.state.origem}
            mode='dialog'
            onValueChange={(itemValue, itemIndex) => this.setState({origem: itemValue})}>
            <Picker.Item label="Centro" value="Centro" />
            <Picker.Item label="Area Sul" value="Area Sul" />
            <Picker.Item label="Area Norte" value="Area Norte" />
            <Picker.Item label="Cidade Jardim" value="Cidade Jardim" />
            <Picker.Item label="Joquei Club" value="Joquei Club" />

          </Picker>
        </View>

        <View style={styles.cellStyle}>
          <Image
            style={{width: 30, height: 30}}
            tintColor='#AA5839aa'
            source={require('../images/destination.png')}
          />
          <Text style={styles.labelStyle}> Destino: </Text>
          <Picker
            style={styles.pickerStyle}
            selectedValue={this.state.destino}
            mode='dropdown'
            onValueChange={(itemValue, itemIndex) => this.setState({destino: itemValue})}>
            <Picker.Item label="Centro" value="Centro" />
            <Picker.Item label="Area Sul" value="Area Sul" />
            <Picker.Item label="Area Norte" value="Area Norte" />
            <Picker.Item label="Cidade Jardim" value="Cidade Jardim" />
            <Picker.Item label="Joquei Club" value="Joquei Club" />

          </Picker>
        </View>

        <View style={styles.cellStyle}>
          <Image
            style={{width: 30, height: 30}}
            tintColor='#283593aa'
            source={require('../images/calendar.png')}
          />
          <Text style={styles.labelStyle}> Data: </Text>
          <DatePicker
            style={{flex: 1, marginRight: 5, marginLeft: 20}}
            date={this.state.date}
            mode="date"
            placeholder="Selecione a data"
            format="DD/MM"
            minDate="2018-01-01"
            confirmBtnText="OK"
            cancelBtnText="Cancel"
            showIcon={false}
            customStyles={{
              dateInput: {
                backgroundColor: '#e8eaf6'
              }
            }}
            onDateChange={(date) => {this.setState({date: date})}}
          />
        </View>

        <View style={styles.cellStyle}>
          <Image
            style={{width: 30, height: 30}}
            tintColor='#283593aa'
            source={require('../images/clock.png')}
          />
          <Text style={styles.labelStyle}> Hora: </Text>
          <DatePicker
            style={{flex: 1, marginRight: 5, marginLeft: 20}}
            date={this.state.hora}
            mode="time"
            placeholder="Selecione a Hora"
            confirmBtnText="OK"
            cancelBtnText="Cancel"
            showIcon={false}
            onDateChange={(date) => {this.setState({hora: date})}}
            customStyles={{
              dateInput: {
                backgroundColor: '#e8eaf6',

              }
            }}
          />
        </View>

        <View style={{margin: 20}}>
          <Button
            title="Confirmar"
            color='#43a047'
            //disabled={this.state.login && this.state.senha? false : true}
            accessibilityLabel="Confirmar mudanças de login"
            onPress={
              () => {this.props.atualizaDados(
                {key:this.props.index,
                 origem:this.state.origem,
                 destino:this.state.destino,
                 data:this.state.date,
                 hora:this.state.hora}
               )}
            }
          />
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    backgroundColor: '#e8eaf6',
  },

  cellStyle: {
    flexDirection: 'row',
    margin: 20,
    alignItems: 'center'
  },

  labelStyle: {
    fontSize: 14,
    color: '#283593',
    paddingLeft: 5
  },

  pickerStyle: {
    flex:1,
    alignItems: 'center',
    backgroundColor: '#e8eaf6',
    color: '#283593',
    borderRadius: 1,
    borderWidth: 10,
    borderColor: 'black',
    marginRight: 5,
    marginLeft: 5,
  },


})
