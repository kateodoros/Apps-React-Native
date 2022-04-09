import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet, TextInput, Keyboard} from 'react-native';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      PrecoAlcool: 0,
      PrecoGasolina: 0,
      erroAlcool: '',
      erroGasolina: '',
      mensagem: '',
      resultado: ''
    };

    this.setPrecoAlcool = this.setPrecoAlcool.bind(this);
    this.setPrecoGasolina = this.setPrecoGasolina.bind(this);
    this.verificar = this.verificar.bind(this);

  }

  setPrecoAlcool(valor) {
    this.setState({ precoAlcool: valor, erroAlcool: '', resultado: 0 });
  };

  setPrecoGasolina(valor) {
    this.setState({ precoGasolina: valor, erroGasolina: '', resultado: 0 });
  };
  
  verificar() {
    var msgErro1 = '',
      msgErro2 = '',
      mensagem = 'Escolha ';
    var valor = 0.0;

    if (isNaN(Number(this.state.precoAlcool)) || Number(this.state.precoAlcool) <= 0 ) {
      msgErro1 = 'Informe um valor válido maior que zero'
    }

    if (isNaN(Number(this.state.precoGasolina)) || Number(this.state.precoGasolina) <= 0) {
      msgErro2 = 'Informe um valor válido maior que zero'
    }

    if (msgErro1 == '' && msgErro2 == '') {
      valor = Number(this.state.precoAlcool) / Number(this.state.precoGasolina);

      if (valor >= 0.7) {
        mensagem += 'gasolina';
      } else if (valor > 0) {
        mensagem += 'álcool';
      } else {
        mensagem = '';
      }
    }

    this.setState({
      resultado: valor, erroAlcool: msgErro1, erroGasolina: msgErro2, mensagem: mensagem
    });

    Keyboard.dismiss();
  }

  render(){
    return (
<View style={styles.container}>
          <View style={styles.top}>
            <Text style={styles.tituloApp}>Álcool ou Gasolina?</Text>
          </View>


          <View style={styles.middle}>
            <Text style={styles.textLabel}>Preço do Álcool (R$)</Text>
            <TextInput
              style={styles.input}
              placeholder="Insira o valor do álcool"
              onChangeText={this.setPrecoAlcool}
              keyboardType="numeric"
            />
            <Text style={styles.textoErro}>{this.state.erroAlcool}</Text>

            <Text style={styles.textLabel}>Preço da Gasolina (R$)</Text>
            <TextInput
              style={styles.input}
              placeholder="Insira o valor da gasolina"
              onChangeText={this.setPrecoGasolina}
              keyboardType="numeric"
            />
            <Text style={styles.textoErro}>{this.state.erroGasolina}</Text>

            <Pressable style={styles.button} onPress={this.verificar}>
              <Text style={styles.textobutton}>Conferir a melhor vantagem</Text>
            </Pressable>
            <Text style={styles.tituloApp}>{this.state.mensagem}</Text>
          </View>


        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    margin: 30,
  },

  top: {
    margin: 2,
  },

  middle: {
    flex: 0.7,
  },

  bottom: {
    flex: 0.20,
    justifyContent: "center",
  },

  button: {
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#136F63',
    alignSelf: "center",
    margin: 10,
    },

   textobutton:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",
    color: '#FFFFFF',
  },

  tituloApp: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    color: '#D00000',
    padding: 10,
  },

  textLabel: {
    paddingBottom: 5,
    fontFamily: "Montserrat",
  },

  input: {
    height: 45,
    borderWidth: 1,
    fontSize: 18,
    padding: 10,
  },

  texto: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",
  },

  textoErro: {
    fontSize: 16,
    color: '#D00000',
    marginBottom: 5,
  },  

  baseText: {
    fontFamily: "Montserrat"
  }
});

export default App;