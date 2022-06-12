import React, { useEffect, useState } from 'react';
import { View,Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import * as SQLite from 'expo-sqlite';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const db = SQLite.openDatabase({
  name: "rn_sqlite",
});

const App = () => {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const createTables = () => {
    db.transaction((txn) => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20))`,
        [],
        (sqlTxn, res) => {
          console.log('Oba! Sua tarefa foi deletada.');
        },
        (error) => {
          console.log('Ops! Erro ao deletar a tarefa. ' + error.message);
        }
      );
    });
  };

  const deleteTarefa = (id) => {
    db.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM tarefas WHERE id = ?`,
        [id],
        (sqlTxn, res) => {
          console.log(`${tarefa} Oba! Sua tarefa foi deletada.`);
          setTarefas('');
          getTarefas();
        },
        (error) => {
          console.log('Ops! Erro ao deletar a tarefa. ' + error.message);
        }
      );
    });
  };

  const incluirTarefa = () => {
    if (!tarefa) {
      alert('Insira uma tarefa');
      return false;
    }

    db.transaction((txn) => {
      txn.executeSql(
        `INSERT INTO tarefas (nome) VALUES (?)`,
        [tarefa],
        (sqlTxn, res) => {
          console.log(`${tarefa} Oba! Sua tarefa foi deletada.`);
          getTarefas();
          setTarefa('');
        },
        (error) => {
          console.log('Ops! Erro ao deletar a tarefa. ' + error.message);
        }
      );
    });
  };

  const getTarefas = () => {
    db.transaction((txn) => {
      txn.executeSql(
        `SELECT * FROM tarefas`,
        [],
        (sqlTxn, res) => {
          console.log('As tarefas foram lidas!');
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome });
            }

            setTarefas(results);
          }
        },
        (error) => {
          console.log('Erro ao ler as tarefas. ' + error.message);
        }
      );
    });
  };

  const renderTarefa = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 10,
          paddingHorizontal: 10,
          borderBottomWidth: 1,
          borderColor: '#A0A0A0',
        }}>
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              marginRight: 9,
              fontSize: 20,
              color: '#192c89',
              fontWeight: 'bold',
              fontFamily: 'Poppins',
            }}>
            {item.id}.
          </Text>
          <Text style={{ fontSize: 20, color: '#1d1f21', fontFamily: 'Poppins' }}>
            {item.nome}
          </Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              deleteTarefa(item.id);
            }}>
            <FontAwesome
              name="trash"
              size={30}
              style={{ color: '#f4394e' }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  useEffect(() => {
    async function fetchData() {
      await createTables();
      await getTarefas();
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          marginHorizontal: 2,
          marginBottom: 20,
          borderWidth: 1,
          borderRadius: 5,
        }}>
        <TextInput
          placeholder="Insira uma tarefa"
          value={tarefa}
          onChangeText={setTarefa}
          style={{ marginHorizontal: 10, color: 'black', fontSize: 18 }}
        />

        <View
          style={{
            alignItems: 'flex-end',
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 'auto',
            marginRight: 10,
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={incluirTarefa}>
            <MaterialIcons
              name="add"
              size={30}
              style={{ color: '#2b46c1' }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList data={tarefas} renderItem={renderTarefa} key={(t) => t.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 12,
  },
  input:{
    flexDirection: 'row',
    marginTop: 15,
    marginHorizontal: 2,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 5,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 25,
    color: '#2b46c1',
    fontWeight: 'bold',
    padding: 5,
  },
});

export default App;