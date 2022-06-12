import React from 'react';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import { View, ScrollView, Text, TextInput, Switch, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

function Home (){

  const [nome, setNome] = useState();
  const [idade, setIdade] = useState();
  const [sexo, setSexo] = useState('masculino');
  const [escolaridade, setEscolaridade] = useState();
  const [limite, setLimite] = useState();
  const [brasileiro, setBrasileiro] = useState(false);

  const navigation = useNavigation();

  function enviar() {
    navigation.navigate('Info', {nome, idade, sexo, escolaridade, limite, brasileiro});
  }
  
  return(
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>Nome: </Text>
        <TextInput style={styles.input} 
          placeholder='Digite seu nome completo'
          onChangeText={ (texto) => setNome(texto) }
        />

        <Text style={styles.text}>Idade: </Text>
        <TextInput style={styles.input}
          keyboardType='numeric'
          placeholder='Digite sua idade'
          onChangeText={ (texto) => setIdade(texto) }
        />

        <Text style={styles.text}>Sexo: </Text>
        <Picker
          selectedValue={sexo}
          onValueChange={(texto) => setSexo(texto)} 
          enabled={true} 
          style={styles.optionsexo}
        >
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
          <Picker.Item label="Outro" value="Outro" />
        </Picker>

        <Text style={styles.text}>Escolaridade: </Text>
        <Picker
          selectedValue={escolaridade}
          onValueChange={(texto) => setEscolaridade(texto)} 
          enabled={true} 
          style={styles.optionescolaridade}
        >
          <Picker.Item label="Ensino fundamental incompleto" value="Ensino fundamental incompleto" />
          <Picker.Item label="Ensino fundamental completo" value="Ensino fundamental completo" />
          <Picker.Item label="Ensino médio incompleto" value="Ensino médio incompleto" />
          <Picker.Item label="Ensino médio completo" value="Ensino médio completo" />
          <Picker.Item label="Ensino superior incompleto" value="Ensino superior incompleto" />
          <Picker.Item label="Ensino superior completo" value="Ensino superior completo" />
        </Picker>

        <Text style={styles.text}>Seu limite: </Text>
        <Slider 
          style={{width: 200}}
          minimumValue={0}
          maximumValue={10000}
          onValueChange={(valor) => setLimite(valor)}
          value={limite}
          step={100}
          minimumTrackTintColor='#1BB959'
          thumbTintColor='#1BA4B9'
        />
        <Text style={styles.text}>{limite}</Text>

        <Text style={styles.text}>Você é brasileiro? </Text>
        <Switch 
          value={brasileiro}
          onValueChange={() => setBrasileiro(previousState => !previousState)}
          thumbColor='#1BA4B9'
        />
      
        <Pressable  onPress={enviar}>
          <Text style={styles.button}>
            Confirmar
          </Text>
        </Pressable>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 40,
  },
  text:{
    color: '#000',
    fontSize: 20,
    margin: 10,
    fontFamily: 'Poppins',
  },
  input:{
    height: 50,
    borderRadius: 5, 
    borderWidth: 1,
    paddingLeft: 10,
    marginVertical: 10,
    marginHorizontal: 4,
    fontSize: 15,
  },
  button: {
    marginTop: 30,
    padding: 10,
    marginHorizontal: 2,
    backgroundColor: '#89A0A9',
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
    borderRadius: 30,
  },
  optionsexo:{
    height: 50,
    borderRadius: 5, 
    borderWidth: 1,
    paddingLeft: 10,
    marginVertical: 10,
    marginHorizontal: 4,
    fontSize: 15,
  },
  optionescolaridade:{
    height: 50,
    borderRadius: 5, 
    borderWidth: 1,
    paddingLeft: 10,
    marginVertical: 10,
    marginHorizontal: 4,
    fontSize: 15,
  }
})

export default Home;