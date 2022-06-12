import React, {useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../../../src/services/api.js';

export default function Filmes({navigation}) {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async()=>{
    const response = await api.get("r-api/?api=filmes");
    setFilmes(response.data)
    setLoading(false);
  },[])

    if(loading) {
      return(
        <View style={{alignItems: 'center', justifyContent: 'center', flex:1}}>
          <ActivityIndicator color="#09A6FF" size={40}/>
        </View>
      )
    }else{
    return (
      <View style={styles.container}>
        <View style={styles.row}> 
          <Text style={styles.title}>Filmes </Text>
          <MaterialCommunityIcons style={{marginLeft: 5, color: "#DD403A"}} name='movie-open-outline' size={45} />
        </View>

        <FlatList 
          data={filmes}
          keyExtractor={item => item.id.toString() }
          renderItem={ ({item}) => (
            <View style={styles.container2}>
            <ScrollView>
                <View style={styles.line}>
                    <Text style={styles.titleFilm}>
                        {item.nome}
                    </Text>
                    <TouchableOpacity style={styles.line2} 
                        onPress={()=>{navigation.navigate('Sinopse', {sinopse: item.sinopse, nome: item.nome} )}}>
                        <Text style={styles.text}>
                                Leia Mais
                        </Text>
                        <MaterialCommunityIcons name='bookmark-plus-outline' size={25} style={{color: "#F5C906"}} />
                    </TouchableOpacity>
                </View>
                <Image source={{uri: item.foto}} 
                style={styles.img}/>
            </ScrollView>
        </View>
          ) }
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 35,
    paddingBottom: 100,
  },
  container2: {
    marginBottom: 50,
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    color: '#53599A',
    fontWeight: 'bold',
    marginBottom: 50,
  },
  titleFilm: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 10,
  },
  text: {
    fontSize: 18,
    marginRight: 10,
    color: '#FFFFFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: "center"
  },
  line: {
    flexDirection: "row", 
    justifyContent: "space-between",
  },
  line2: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#53599A',
      padding: 10,
      borderRadius: 5,
  },
  img: {
    width: 300, 
    height: 200,
    marginTop: 10,
  }
});