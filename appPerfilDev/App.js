import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import api from './src/services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      perfil: [],
      perfilValor: '',
      valorRetorno: ''
    }
    this.retorno = this.retorno.bind(this);
  }

  async retorno() {
    let valorPerfil = this.state.perfilValor;
    const response = await api.get(valorPerfil);
    this.setState({
      perfil: response.data
    });
    this.setState({
      valorRetorno: `
        Id: ${this.state.perfil.id} \n
        Nome: ${this.state.perfil.name} \n
        Repositórios: ${this.state.perfil.public_repos} \n
        Seguidores: ${this.state.perfil.followers} \n
        Seguindo: ${this.state.perfil.following} \n
      `
    })
    Keyboard.dismiss();
  }


  render() {
  
  let img = this.state.perfil.avatar_url ? this.state.perfil.avatar_url : "https://polybit-apps.s3.amazonaws.com/stdlib/users/github/profile/image.png?1564539704050"

  return (
    <View style={styles.container}>

      <View style={styles.row}> 
        <Text style={styles.titulo}>GitHub Profile </Text>
        <Feather style={{marginLeft: 3}} name='github' size={35} />
      </View>

      <View style={styles.row}>
          <TextInput 
            placeholder="Informe o usuário: "
            style={styles.input}
            onChangeText={(value) => this.setState({perfilValor: value})}
          />

          <TouchableOpacity onPress={this.retorno}>
            <Feather style={{marginLeft: 7}} name='plus' size={40} />
          </TouchableOpacity>
      </View>      

      <View style={{
        justifyContent: 'left',
        alignItems: 'left',
        marginTop: 50
      }}>
      <Image source={{uri: img}} 
        style= {{width: 100, height: 100, justifyContent: 'left', borderRadius: 35}} 
      />
      </View>

      <Text style={styles.retornotxt}>
        {this.state.valorRetorno}
      </Text>

    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  
  titulo: {
    fontSize: 30,
    textAlign: 'left',
    marginBottom: 30,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'left',
  },

  input:{
    height: 45,
    borderWidth: 1,
    fontSize: 20,
    padding: 10,
    width: 300,
  },

  retornotxt: {
    fontFamily: 'Poppins',
    fontSize: 15,
  },
});

export default App;