import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      numero1: '',
      numero2: '',
      resultado: ''
    };
    
    this.calcular = this.calcular.bind(this);
  }
 
  calcular(){
    if ( (this.state.numero1 === '') || (this.state.numero2 === '') ){
      alert('Ops! Digite pelo menos dois valores')
      return;
    }
    var r = this.state.numero1 * this.state.numero2
    this.setState({resultado: 'Resultado: ' + r});
  }
 
  render(){
    return(
      <View style={styles.area}>
 
      <TextInput
      style={styles.input}
      placeholder="Digite o 1º número:"
      onChangeText={ (texto) => this.setState({numero1: texto})}
      />

      <TextInput
      style={styles.input}
      placeholder="Digite o 2º número:"
      onChangeText={ (texto) => this.setState({numero2: texto})}
      />
 
      <Pressable style={styles.button} onPress={this.calcular}>
          <Text style={styles.textobutton}>Calcular</Text>
      </Pressable>
 
      <Text style={styles.texto}> {this.state.resultado} </Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  area:{
    flex: 1,
    margin: 30,
  },
  input:{
    height: 45,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#9448BC',
    margin: 4,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
    color: '#9448BC',
    margin: 4,
  },
  button:{
    height: 45,
    backgroundColor: '#480355',
    borderColor: '#480355',
    borderWidth: 3,
    borderRadius: 10,
    margin: 4,
  },
  textobutton:{
    textAlign: 'center',
    fontSize: 30,
    color: '#FFFFFF',
  }
})
 
export default App;