import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsHorizontalScrollIndicator={false} >
        <Text style={styles.tituloapp}> Vagas de Emprego</Text>
          <View style={styles.anuncios}>

            <Text style={styles.titulo}>
              Desenvolvedor BackEnd
            </Text>
            <Text style={styles.salario}>
              Salário: R$ 3.000,00
            </Text>
            <Text style={styles.descricao}>
              Descrição: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
            <Text style={styles.contato}>
              Contato: (99) 3191-3311
            </Text>
          </View>

          <View style={styles.anuncios}>
          <Text style={styles.titulo}>
            Engenheiro de Dados
            </Text>
            <Text style={styles.salario}>
              Salário: R$ 3.000,00
            </Text>
            <Text style={styles.descricao}>
              Descrição: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
            <Text style={styles.contato}>
              Contato: (63) 3346-8662
            </Text>
          </View>
          <View style={styles.anuncios}>
          <Text style={styles.titulo}>
            UX/UI Designer
            </Text>
            <Text style={styles.salario}>
              Salário: R$ 3.589,00
            </Text>
            <Text style={styles.descricao}>
              Descrição: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
            <Text style={styles.contato}>
              Contato: (74) 3215-0817
            </Text>
          </View>
          <View style={styles.anuncios}>
          <Text style={styles.titulo}>
            Desenvolvedor Front End
            </Text>
            <Text style={styles.salario}>
              Salário: R$ 3.036,00
            </Text>
            <Text style={styles.descricao}>
              Descrição: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
            <Text style={styles.contato}>
              Contato: (99) 3331-2284
            </Text>
          </View>
        </ScrollView>
      </View>
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  
  anuncios: {
    backgroundColor: '#fcf9f7',
    height: 280,
    width: 480, 
    padding: 25,
    alignSelf: 'center',
    marginBottom: 20
  }, 

  tituloapp: {
    textAlign: 'center',
    color: '#7E6B8F',
    marginBottom: 25,
    marginTop: -10,
    fontSize: 30,
    fontWeight: 'bold'
  },

  titulo: {
    textAlign: 'center',
    color: '#7E6B8F',
    marginBottom: 15,
    fontSize: 30,
    fontWeight: 'bold'
  },

  salario: {
    color: '#2E294E',
    fontWeight: 'bold',
    fontSize: 18,
  },

  descricao: {
    color: '#000000',
    fontSize: 18,
  },

  contato: {
    color: '#D90368',
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold'
  }

});

export default App;