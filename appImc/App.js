import React, { Component } from 'react';
import { View, Text, TextInput, Pressable, Image, Keyboard, StyleSheet } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      peso: 0.0,
      altura: 0.0,
      resultado: 0.0,
      erroPeso: '',
      erroAltura: '',
      mensagem: 'IMC: ',
    };

    this.setPeso = this.setPeso.bind(this);
    this.setAltura = this.setAltura.bind(this);
    this.verificar = this.verificar.bind(this);

  }

  setPeso(valor) {
    this.setState({ peso: valor, erroPeso: '', resultado: 0.0 });
  };

  setAltura(valor) {
    this.setState({ altura: valor, erroAltura: '', resultado: 0.0 });
  };

  verificar() {
    var msgErro1 = '',
      msgErro2 = '',
      mensagem = 'IMC: ',
      valor = 0.0;

    console.log(this.state.peso);
    console.log(this.state.altura);
    if (isNaN(Number(this.state.peso)) || Number(this.state.peso) <= 0) {
      msgErro1 = 'Informe um peso válido'
    }

    if (isNaN(Number(this.state.altura)) || Number(this.state.altura) <= 0) {
      msgErro2 = 'Informe altura válida'
    }

    if (msgErro1 == '' && msgErro2 == '') {
      valor = (Number(this.state.peso) / (Number(this.state.altura) * 2)).toFixed(1);

      if (valor < 18.5) {
        mensagem += valor.toString() + ' - Abaixo do Peso';
      } else if (valor >= 18.5 && valor <= 24.9) {
        mensagem += valor.toString() + ' - Peso Normal';
      } else if (valor >= 25 && valor <= 29.9) {
        mensagem += valor.toString() + ' - Sobrepeso';
      } else if (valor >= 30 && valor <= 34.9) {
        mensagem += valor.toString() + ' - Obesidade Grau I';
      } else if (valor >= 35 && valor <= 39.9) {
        mensagem += valor.toString() + ' - Obesidade Grau II';
      } else {
        mensagem += 'Obesidade Grau III ou Mórbida';
      }
    }

    this.setState({
      resultado: valor, erroPeso: msgErro1, erroAltura: msgErro2, mensagem: mensagem
    });

    Keyboard.dismiss();
  }

  render() {

    let img = 'https://thumbs.dreamstime.com/b/balan%C3%A7a-de-pesagem-desenho-decorativo-ilustra%C3%A7%C3%A3o-vetorial-191476908.jpg';
    
    return (
        <View style={styles.container}>
          <View style={styles.top}>
            <Text style={styles.tituloApp}>Cálculo do IMC</Text>
            <Image
            source={{ uri: img}}
            style={styles.image}
          />
          <br/>
            <Text style={styles.textLabel}>Peso (ex.: 78.4)</Text>
            <TextInput
              style={styles.input}
              placeholder="Informe seu peso"
              placeholderTextColor='darkgray'
              onChangeText={this.setPeso}
              keyboardType="numeric"
            />
            <Text style={styles.textoErro}>{this.state.erroPeso}</Text>

            <Text style={styles.textLabel}>Altura (ex.: 1.75)</Text>
            <TextInput
              style={styles.input}
              placeholder="Informe sua altura"
              placeholderTextColor='darkgray'
              onChangeText={this.setAltura}
              keyboardType="numeric"
            />
            <Text style={styles.textoErro}>{this.state.erroAltura}</Text>

          <Pressable style={styles.button} onPress={this.verificar}>
              <Text style={styles.texto}>Verificar</Text>
            </Pressable>
            <Text style={styles.tituloApp}>{this.state.mensagem}</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    margin: 45,
  },

  bottom: {
    justifyContent: "center",
  },

  image: {
    width: 150,
    height:150,
    alignSelf: "center",
  },

  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: '#FF9000',
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 28,
    minWidth: "100%",
  },

  tituloApp: {
    textAlign: 'center',
    color: '#467599',
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    marginBottom: 20,
    marginTop: -15,
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
    color: 'red',
    margin: 5,
  },  

  baseText: {
    fontFamily: "Montserrat"
  }
});

export default App;