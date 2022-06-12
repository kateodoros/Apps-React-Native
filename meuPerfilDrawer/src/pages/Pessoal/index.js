import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
 
 
export default function Pessoal() {
  const navigation = useNavigation();
 return (
   <View style={styles.area}>
     <Text style={styles.titulo}>Pessoal</Text>
     <Image source={{ uri: 'https://avatars.githubusercontent.com/u/76491416?v=4' }} style={styles.image}/>
     <Text style={styles.nome}>Karoline Teodoro da Silva</Text>
     <Text style={styles.descricao}>Olá! Você pode me chamar de Karol. Eu tenho 27 anos e sou de Cubatão/SP :) Amo assuntos sobre design, criação de conteúdo (blogs), criatividade e tecnologia. </Text>
     <TouchableOpacity style={styles.btnGitHub}>
        <FontAwesome name='github' size={25} color='#333'/>
        <Text style={styles.btnText}>User: kateodoros</Text>
      </TouchableOpacity>
     <Button title="Abrir menu" onPress={ () => navigation.toggleDrawer() }/>
   </View>
  );
}

const styles = StyleSheet.create({
  area:{
    flex: 1,
    margin: 25,
  },

  image: {
    width: 120,
    height: 120,
    marginBottom: 15,
    marginTop: 15,
    borderRadius: 15,
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
    marginBottom: 10,
  },

  btnGitHub:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginBottom: 10,
  },
  btnText:{
    paddingLeft: 10,
    color: '#333',
    fontWeight: "bold", 
  }
});
