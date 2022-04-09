import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
 
class App extends Component{
  render(){
 
    let nomeapp = 'Meu Perfil';
    let img = 'https://avatars.githubusercontent.com/u/76491416?v=4';
 
    return(
      <View>
        <Text style={{color: '#6667AB', fontSize: 25, marginLeft: 15, marginBottom: 5, fontFamily: 'Montserrat'}}>{nomeapp}</Text>
 
        <Image
          source={{ uri: img }}
          style={{ width: 300, height: 300, marginLeft: 15, borderWidth: '5px', borderColor: '#6667AB', borderRadius: '5px'}}
        />

        <Text style={{color: '#6667AB', fontSize: 20, marginLeft: 15, marginTop: 10, fontFamily: 'Montserrat'}}>Dados pessoais:</Text>
        <Text style={{marginLeft: '15px', fontFamily: 'Montserrat'}}>Karoline Teodoro da Silva</Text>
        <Text style={{marginLeft: '15px', fontFamily: 'Montserrat'}}>27 anos</Text>
        <Text style={{marginLeft: '15px', fontFamily: 'Montserrat'}}>Cubatão/SP</Text>

        <Text style={{color: '#6667AB', fontSize: 20, marginLeft: 15, marginTop: 10, fontFamily: 'Montserrat'}}>Formação:</Text>
        <Text style={{marginLeft: '15px', fontFamily: 'Montserrat'}}>Sistemas para Internet</Text>
        <Text style={{marginLeft: '15px', fontFamily: 'Montserrat'}}>Faculdade Baixada Santista Rubens Lara</Text>
        <Text style={{marginLeft: '15px', fontFamily: 'Montserrat'}}>2019 - 2022</Text>

        <Text style={{color: '#6667AB', fontSize: 20, marginLeft: 15, marginTop: 10, fontFamily: 'Montserrat'}}>Experiência:</Text>
        <Text style={{marginLeft: '15px', fontFamily: 'Montserrat'}}>Designer Freelancer</Text>
        <Text style={{marginLeft: '15px', fontFamily: 'Montserrat'}}>KTS Design</Text>
        <Text style={{marginLeft: '15px', fontFamily: 'Montserrat'}}>out/2018 - atualmente</Text>
        <br></br>
        <Text style={{marginLeft: '15px', fontFamily: 'Montserrat'}}>Estágio - Instrutora de turma</Text>
        <Text style={{marginLeft: '15px', fontFamily: 'Montserrat'}}>SOS - Tecnologia e Educação </Text>
        <Text style={{marginLeft: '15px', fontFamily: 'Montserrat'}}>jan/2020 - jun/2020</Text>
        <br></br>
        <Text style={{marginLeft: '15px', fontFamily: 'Montserrat'}}>Social Media</Text>
        <Text style={{marginLeft: '15px', fontFamily: 'Montserrat'}}>Faculdade Baixada Santista Rubens Lara</Text>
        <Text style={{marginLeft: '15px', fontFamily: 'Montserrat'}}>out/2019 - fev/2020</Text>

        <Text style={{color: '#6667AB', fontSize: 20, marginLeft: 15, marginTop: 10, fontFamily: 'Montserrat'}}>Projetos:</Text>
        <Text style={{marginLeft: '15px', fontFamily: 'Montserrat'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
 
      </View>
    )
  }
}
 
export default App;