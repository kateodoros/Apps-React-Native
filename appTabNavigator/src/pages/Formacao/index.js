import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
 
export default function Formacao() {
 return (
  <View style={styles.area}>
  <Text style={styles.titulo}>Formação</Text><br/>
  <Text style={styles.nome}>Fatec Rubens Lara - FATECRL</Text>
  <Text style={styles.descricao}>Tecnólogo em Sistemas para Internet | 2019 a 2022 </Text>
  <Text style={styles.nome}>SOS Tecnologia e Educação</Text>
  <Text style={styles.descricao}>Web Design, Design Gráfico | 2016 a 2018 </Text>
  <Text style={styles.nome}>Escola SENAI "Antonio Souza Noschese"</Text>
  <Text style={styles.descricao}>Desenhista de páginas para Web | 2017 </Text>
  <Text style={styles.nome}>ETEC de Cubatão</Text>
  <Text style={styles.descricao}>Técnico em Meio Ambiente, Meio Ambiente | 2011 a 2012 </Text>
  <Text style={styles.nome}>E.E Prof José da Costa</Text>
  <Text style={styles.descricao}>Ensino Médio | 2010 a 2012 </Text>
   </View>
  );
}

const styles = StyleSheet.create({
  area:{
    flex: 1,
    margin: 25,
  },

  titulo:{
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: 'Tahoma',
    color: '#001BA5',
    marginTop: 2,
  },

  nome:{
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: 'Tahoma',
    marginTop: 2,
    marginBottom: 7,
  },

  descricao:{
    fontSize: 15,
    fontFamily: 'Tahoma',
    marginTop: 2,
    marginBottom: 18,
  },
});
