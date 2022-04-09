import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet} from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      pessoas: 0
    };

    this.entrada = this.entrada.bind(this);
    this.saida = this.saida.bind(this);
  }

  entrada(){
    this.setState({
      pessoas: this.state.pessoas + 1
    });
  }
  saida(){
    if(this.state.pessoas > 0){
      this.setState({
        pessoas: this.state.pessoas - 1
      });
    }
  }

  render(){
 
    return(
      <View style={styles.area}>
        <Text style={styles.texto}>Contador de Pessoas:</Text>
        
        <Text style={styles.numero}>
          {this.state.pessoas}
        </Text>

        <Pressable style={[styles.button,styles.buttonAdd]} onPress={() => this.entrada()}>
          <Text style={styles.textbutton}>Entrada de 1 pessoa</Text>
        </Pressable>
        <Pressable style={[styles.botao,styles.buttonSubtrai]} onPress={() => this.saida()}>
          <Text style={styles.textbutton}>Saída de 1 pessoa</Text>
        </Pressable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  area:{
    flex: 1,
    margin: 30,
    textAlign: 'center',
  },
  texto: {
    fontSize: 35,
    color: '#40798C',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  numero:{
    height: 50,
    backgroundColor: '#FCFCFF',
    borderColor: '#CFCBCA',
    borderWidth: 3,
    borderRadius: 10,
    margin: 4,
    padding: 2,
    fontSize: 30,
  },
  button:{
    height: 50,
    backgroundColor: '#CFCBCA',
    borderColor: '#CFCBCA',
    borderWidth: 3,
    borderRadius: 10,
    margin: 4,
    padding: 2,
    fontSize: 30,
  },
  buttonAdd:{
    height: 50,
    backgroundColor: '#C6CA53',
    borderColor: '#C6CA53',
    borderWidth: 3,
    borderRadius: 10,
    margin: 4,
    padding: 2,
    fontSize: 30,
  },
  buttonSubtrai:{
    height: 50,
    backgroundColor: '#FD151B',
    borderColor: '#FD151B',
    borderWidth: 3,
    borderRadius: 10,
    margin: 4,
    padding: 2,
    fontSize: 30,
  },
  textbutton:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    padding: 5,
  }
});
export default App;