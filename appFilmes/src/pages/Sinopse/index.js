import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export default function Sinopse({route}) {
    const navigation = useNavigation();
   return (
     <View style={styles.container}>

        <View style={styles.row}> 
          <Text style={styles.title}>{route.params?.nome}</Text>
          <Feather style={{marginLeft: 10, color:"#DD403A"}} name='film' size={35} />
        </View>
        
        <View>
            <Text style={styles.titleFilm}>
                Sinopse
            </Text>

            <Text style={styles.text}>
                {route.params?.sinopse}
            </Text>
        </View>

        <TouchableOpacity style={styles.line}
            onPress={() => {
            navigation.goBack();
            }}
        >
            <AntDesign name='back' size={25} />
            <Text style={styles.text}>
                Voltar
            </Text>
        </TouchableOpacity>

    </View>
   )
}

const styles = StyleSheet.create({
  container: {
    margin: 35,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: '#53599A',
    fontWeight: 'bold',
    marginBottom: 50
  },
  row: {
    flexDirection: 'row',
    justifyContent: "center"
  },
  text: {
    fontSize: 18,
    margin: 20,
    textAlign: 'justify'
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  titleFilm: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 20,
  },
});