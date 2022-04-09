import React, { Component } from 'react';
import { View, StyleSheet, Image, ScrollView, Text } from 'react-native';
 
class App extends Component{
  render(){

    let img1 = 'https://i.ibb.co/RSVvqSQ/colarmulherpoderosa.png';
    let img2 = 'https://i.ibb.co/VCFZfyf/kitaneis.png';
    let img3 = 'https://i.ibb.co/dgfVyJj/conjuntocute.png';
    let img4 = 'https://i.ibb.co/P4LsKB8/brincospower.png';

    return(
      <View style={styles.container}>
        <Text style={styles.tituloapp}>Queen - Acessórios Chiques </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.box1}>
            <Text style={styles.tituloproduto}> Colar BO$$</Text>
            <Image source={{ uri: img1}} style={styles.image} />
            <Text style={styles.descricao}> Um colar que vai fazer você se sentir poderosa por apenas: <strong>R$ 45</strong></Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.tituloproduto}> Kit Anéis</Text>
            <Image source={{ uri: img2}} style={styles.image} />
            <Text style={styles.descricao}> Anéis coloridos e super modernos por apenas: <strong>R$ 70</strong></Text>
          </View>
          <View style={styles.box3}>
            <Text style={styles.tituloproduto}> Conjunto Sweet</Text>
            <Image source={{ uri: img3}} style={styles.image} />
            <Text style={styles.descricao}> Conjunto delicado dourado de anéis e pulseira por apenas: <br/> <strong>R$ 75</strong></Text>  
          </View>
          <View style={styles.box4}>
          <Text style={styles.tituloproduto}> Brincos BO$$</Text>
          <Image source={{ uri: img4}} style={styles.image} />
            <Text style={styles.descricao}> Brincos elegantes e bem BO$$ por apenas: <strong>R$ 45</strong></Text>
          </View>
         
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10,
    margin: 20,
  },
  
  tituloapp:{
    fontSize: 45,
    fontWeight: "bold",
    fontFamily: 'Times New Roman',
    textAlign: 'center',
    color: '#C7231E',
    marginTop: 2,
    marginBottom: 25,
  },

  tituloproduto:{
    fontSize: 20,
    fontStyle: 'italic',
    fontFamily: 'Montserrat',
    textAlign: 'center',
    color: '#9F7E69',
    fontWeight: 'bold',
    padding: 10,
  },

  descricao:{
    fontSize: 20,
    fontFamily: 'Montserrat',
    color: '#9F7E69',
    textAlign: 'center',
    padding: 15,
  },

  image: {
    width: 180,
    height: 180,
    alignSelf: "center",
    marginBottom: 5,
  },

  box1:{
    backgroundColor: '#FBFAEE',
    height: 360,
    width: 280,
    margin: 5,
  },

  box2:{
    backgroundColor: '#FFEEE2',
    height: 360,
    width: 280,
    margin: 5,
  },

  box3:{
    backgroundColor: '#FBFAEE',
    height: 360,
    width: 280,
    margin: 5,
  },

  box4:{
    backgroundColor: '#FFEEE2',
    height: 360,
    width: 280,
    margin: 5,
  }
})
 
export default App;