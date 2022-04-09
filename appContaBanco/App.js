import React, { Component } from 'react';
import {  View, Text, StyleSheet, Switch, Picker, TextInput, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexo: 0,
      sexos: [
        {sexoNome: 'Masculino', valor: 1},
        {sexoNome: 'Feminino', valor: 2},
        {sexoNome: 'Outro', valor: 3},
      ],
      escolaridade: 0,
      escolaridades: [
        {escolaridadeNome : 'Ensino Fundamental Incompleto', valor: 4},
        {escolaridadeNome : 'Ensino Fundamental Completo', valor: 5},
        {escolaridadeNome : 'Ensino Médio Incompleto', valor: 5},
        {escolaridadeNome : 'Ensino Médio Completo', valor: 6},
        {escolaridadeNome : 'Ensino Superior Incompleto', valor: 7},
        {escolaridadeNome : 'Ensino Superior Completo', valor: 8}
      ],
      limite: 250,
      brasileiro: false,
      estudante: false,
    };

    this.enviarDados = this.enviarDados.bind(this);

  }

  //Metodo que é chamado quando você clica no botao Abrir Conta
  enviarDados(){

    if(this.state.nome === '' || this.state.idade === ''){
      alert('Preencha todos dados corretamente!')
      return;
    }

    alert(
      'Conta aberta com sucesso!! \n\n' + 
      'Nome: '+this.state.nome + '\n' + 
      'Idade: ' + this.state.idade + '\n' +
      'Sexo: '+ this.state.sexos[this.state.sexo].sexoNome + ' \n' +
      'Escolaridade: '+ this.state.escolaridades[this.state.escolaridade].escolaridadeNome + ' \n' +
      'Limite Conta: ' + this.state.limite.toFixed(2) + '\n' +
      'Brasileiro: ' + ((this.state.brasileiro)? 'Ativo' : 'Inativo') + '\n' +
      'Conta Estudante: ' + ((this.state.estudante)? 'Ativo' : 'Inativo')
      );
  }


  render(){

    //Retorna os items do Picker do sexo M ou F
    let sexoItems = this.state.sexos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.sexoNome}/>
    }); 

    //Retorna os items do Picker da escolaridade
     let escolaridadeItems = this.state.escolaridades.map((v, k) => {
    return <Picker.Item key={k} value={k} label={v.escolaridadeNome}/>
    }); 
    

    return(
      <View style={styles.container}>
      <Text style={styles.bancoLogo}>Abertura de conta</Text>

      <View style={styles.areaFormulario}>

   
        <Text style={styles.textoNome}>Nome:</Text>
        <TextInput style={styles.input}
            placeholder="Digite seu nome"
            underlineColorAndroid="transparent"
            onChangeText={(texto) => this.setState({nome: texto})}
            
        />

        <Text style={styles.textoNome}>Idade:</Text>
        <TextInput style={styles.input}
            
            placeholder="Digite sua idade"
            underlineColorAndroid="transparent"
            onChangeText={(texto) => this.setState({idade: texto})}
            keyboardType="numeric" // Deixando teclado apenas numerico
        />
     
        <View style={styles.areaSexo}>  
          <Text style={styles.textoNome}>Sexo:</Text>
          <Picker style={styles.pickerSexo} 
                  selectedValue={this.state.sexo} 
                  onValueChange={(itemValue, itemIndex) => this.setState({sexo: itemValue})}>  
                            
          {sexoItems}          
          </Picker>
        </View>

        <View style={styles.areaEscolaridade}>  
          <Text style={styles.textoNome}>Escolaridade:</Text>
          <Picker style={styles.pickerEscolaridade} 
                  selectedValue={this.state.escolaridade} 
                  onValueChange={(itemValue, itemIndex) => this.setState({escolaridade: itemValue})}>          
          {escolaridadeItems}          
          </Picker>
        </View>

        <View style={styles.limiteArea}>
              <Text style={styles.textoNome}>Seu Limite:</Text>
              <Text style={styles.limiteTexto}>R$ {this.state.limite.toFixed(0)}</Text>
        </View> 

        <View style={styles.areaSlider}>
            <Slider 
              minimumTrackTintColor="#3A1772" 
              minimumValue={250} 
              maximumValue={4000}
              value={this.state.limite}
              onValueChange={(limite)=> this.setState({limite: limite})}
            />
        </View>

        <View style={styles.areaBrasileiro}>
          <Text style={styles.textoNome}>Brasileiro(a) ?:</Text>
          <Switch 
          style={{paddingTop: 15}}
          trackColor="#DCDCDC" 
          value={this.state.brasileiro} 
          onValueChange={(valorBrasileiro) => this.setState({brasileiro: valorBrasileiro})}
          />
        </View>

        <View style={styles.areaEstudante}>
          <Text style={styles.textoNome}>Estudante ?:</Text>
          <Switch 
          style={{paddingTop: 15}}
          trackColor="#DCDCDC" 
          value={this.state.estudante} 
          onValueChange={(valorEstudante) => this.setState({estudante: valorEstudante})}
          />
        </View>
      
        <TouchableOpacity style={styles.botao} onPress={this.enviarDados} underlayColor="#000000">
            <Text style={styles.botaoTexto}>Abrir Conta</Text>
        </TouchableOpacity>
  

      </View>

      </View>    
    );

  }

}

const styles = StyleSheet.create({
  container:{
    paddingTop: 20,
    flex: 1,
  },

  areaFormulario:{
    flexDirection: 'column',
    margin: 40,
  },

  bancoLogo:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000'
  },

  textoNome:{
    fontSize: 17,
    color: '#000000',
    fontWeight: 'bold',
  },

  input:{
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#999999',
    backgroundColor: '#EEEEEE',
    color: '#000000',
    height: 38,
    padding: 10,
    marginBottom: 5,
    marginTop: 5,
  },

 areaSexo:{
  flexDirection: 'row',
   alignItems: 'center',
   marginBottom: 10,
   marginTop: 10,
 },
 
pickerEscolaridade:{
  flex: 1,
  alignItems: 'center',
  marginBottom: 10,
  marginTop: 10,
  },
  
limiteArea:{
  flexDirection:'row',
  paddingBottom: 5,
},

limiteTexto:{
  color: '#FF0000',
  fontSize: 17,
  fontWeight: 'bold',
  paddingLeft: 5,
},

areaBrasileiro:{
  flexDirection: 'row', 
  alignItems: 'center'
},

areaEstudante:{
  flexDirection: 'row', 
  alignItems: 'center'
},

botao:{
 height: 40,
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: '#3A1772',
 borderRadius: 150,
 margin: 30
},

botaoTexto:{
   fontSize: 20,
   fontWeight: 'bold',
   color: '#FFFFFF'
},

});