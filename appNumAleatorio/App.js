import React, { Component } from 'react';
import { View, Text, TextInput, Pressable, Image, Keyboard, StyleSheet } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numero: '',
      resultado: 0,
      msgErro: '',
      mensagem: '',
    };

    this.setNumero = this.setNumero.bind(this);
    this.verificar = this.verificar.bind(this);

  }

  setNumero(valor) {
    this.setState({ numero: valor, msgErro: '', resultado: 0.0 });
  };

  verificar() {
    var msgErro = '',
      mensagem = '',
      valor = 0;

    console.log(this.state.numero);
    if (this.state.numero.toString() == '' || isNaN(Number(this.state.numero))
      || Number(this.state.numero) < 0 || Number(this.state.numero) > 10) {
      msgErro = 'Informe um numero válido'
    }

    if (msgErro == '') {
      valor = Math.floor(Math.random() * 10);

      if (valor == this.state.numero) {
        mensagem = valor.toString() + '\nUhu! Finalmente.\nParabéns, você acertou!! ';

      } else {
        mensagem = valor.toString() + '\nTente novamente!!';
      }
    }

    this.setState({
      resultado: valor,
      msgErro: msgErro,
      mensagem: mensagem,
    });

    Keyboard.dismiss();
  }

  render() {

    let img = 'https://i.ibb.co/X2dz8xf/qualeonumero.png';

    return (
        <View style={styles.container}>
          <View style={styles.top}>
            <Text style={styles.tituloApp}>Jogo do número aleatório</Text>
          </View>

          <Image
            source={{ uri: img}}
            style={styles.image}
          />
          
            <Text style={styles.textLabel}>Pense em um nº de 0 a 10:</Text>
            <TextInput
              style={styles.input}
              placeholder="Informe seu número da sorte aqui"
              placeholderTextColor='darkgray'
              onChangeText={this.setNumero}
              keyboardType="numeric"
            />
            <Text style={styles.textoErro}>{this.state.msgErro}</Text>
          
            <Pressable style={styles.button} onPress={this.verificar}>
              <Text style={styles.texto}>Será que você acertou? Clique aqui!</Text>
            </Pressable>

            <Text style={styles.tituloApp}>{this.state.mensagem}</Text>
          
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },

  image: {
    width: 450,
    height: 200,
    alignSelf: "center",
    marginBottom: 5,
  },

  button: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 30,
    backgroundColor: '#F2CD5D',
    alignSelf: "center",
    marginBottom: 10,
    minWidth: "80%",
  },

  tituloApp: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    color: '#DEA54B',
    padding: 10,
    marginTop: 20,
    marginBottom: 2,
  },

  textLabel: {
    padding: 20,
    textAlign: 'center',
    fontSize: 25,
    fontStyle: 'italic',
    fontFamily: "Open Sans",
    fontWeight: 'bold',
    color: '#504746',
  },

  input: {
    height: 60,
    textAlign: 'center',
    borderWidth: 0,
    fontSize: 25,
    padding: 10,
  },

  texto: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",
  },

  textoErro: {
    fontSize: 20,
    textAlign: 'center',
    color: 'red',
    fontWeight: "bold",
    marginBottom: 20,
  },    

  baseText: {
    fontFamily: "Cochin"
  }
});

export default App;