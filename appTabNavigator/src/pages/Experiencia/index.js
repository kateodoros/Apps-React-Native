import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
 
export default function Experiencia() {
 return (
  <View style={styles.area}>
  <Text style={styles.titulo}>Experiência</Text><br/>
  <Text style={styles.nome}>KTS Design</Text>
  <Text style={styles.descricao}>Empresária | out. 2020 - atualmente </Text>
  <Text style={styles.nome}>SOS Tecnologia e Educação</Text>
  <Text style={styles.descricao}>Estagiária - Instrutor | jan. de 2020 a jun. de 2020 </Text>
  <Text style={styles.nome}>Fatec Baixada Santista Rubens Lara</Text>
  <Text style={styles.descricao}>Criação de conteúdo Web | out. de 2019 a fev. de 2020 </Text>
  <Text style={styles.nome}>Adapt - Produtora de mídia</Text>
  <Text style={styles.descricao}>Designer gráfico freelancer | out. de 2018 a ago. de 2019 </Text>
  <Text style={styles.nome}>GAFOR Logística</Text>
  <Text style={styles.descricao}>Auxiliar Administrativo | ago. de 2014 a mai. de 2015 </Text>
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
