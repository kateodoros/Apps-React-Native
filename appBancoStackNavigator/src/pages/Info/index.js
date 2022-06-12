import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Info({route}) {

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Nome: {route.params?.nome}</Text>

            <Text style={styles.text}>Idade: {route.params?.idade}</Text>

            <Text style={styles.text}>Sexo: {route.params?.sexo}</Text>

            <Text style={styles.text}>Escolaridade: {route.params?.escolaridade}</Text>

            <Text style={styles.text}>Limite: {route.params?.limite}</Text>

            <Text style={styles.text}>Brasileiro: {route.params?.brasileiro === true ? 'Sim' : 'Não'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      margin: 3,
    },
    text:{
      fontFamily: 'Poppins',
      color: '#000',
      fontSize: 18,
      marginTop: 10,
      marginLeft: 20,
    },
})

export default Info;