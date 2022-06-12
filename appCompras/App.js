import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, TextInput, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import * as SQLite from 'expo-sqlite';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
 
const db = SQLite.openDatabase({
  name: "rn_sqlite",
});
 
const App = () => {
  const [produto, setProduto] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [quantidade, setQuantidade] = useState("");
 
  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS produtos (id INTEGER PRIMARY KEY AUTOINCREMENT, quantidade INT, nome VARCHAR(20))`,
        [],
        (sqlTxn, res) => {
          console.log("Tabela criada com sucesso!");
        },
        error => {
          console.log("error on creating table " + error.message);
        },
      );
    });
  };

  const deleteProduto = (id) => {
    db.transaction(tx => {
      tx.executeSql(`DELETE FROM produtos WHERE id = ?`, [id],
        (sqlTxn, res) => {
          console.log(`${produto} produtos deletado com sucesso!`);
          setProdutos("");
          getProdutos();
        }, error => {
          console.log("Erro ao deletar um produto " + error.message);
        },
      )
    })
  }

  const incluirProduto = () => {
    if (!produto || !quantidade) {
      alert("Informe o produto e sua quantidade");
      return false;
    }
 
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO produtos (quantidade,nome) VALUES (?,?)`,
        [quantidade, produto],
        (sqlTxn, res) => {
          console.log(` ${quantidade} ${produto} produto adicionada com sucesso!`);
          getProdutos();
          setProduto("");
          setQuantidade("");
        },
        error => {
          console.log("Erro ao inserir uma produto " + error.message);
        },
      );
    });
  };
 
  const getProdutos = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM produtos`,
        [],
        (sqlTxn, res) => {
          console.log("Produtos lidos com sucesso!");
          let len = res.rows.length;
 
          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, quantidade: item.quantidade, nome: item.nome});
            }
 
            setProdutos(results);
          }
        },
        error => {
          console.log("Erro ao obter Produtos " + error.message);
        },
      );
    });
  };
 
  const renderProduto = ({ item }) => {
    return (
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "#A0A0A0",
      }}>
          <View style={{flexDirection: "row"}}>
            <Text style={{ fontFamily: 'Poppins', fontSize: 20, color: '#9400D3', fontWeight: 'bold' }}>{item.quantidade} </Text>
            <Text style={{ fontFamily: 'Poppins', fontSize: 20, color: '#494949', }}>{item.nome}</Text>
          </View>

          <View>
            <TouchableOpacity onPress={() => {deleteProduto(item.id)}}>
              <FontAwesome name='trash' size={25} style={{color: "#f4394e"}}/>
            </TouchableOpacity>
          </View>
      </View>
    );
  };
 
  useEffect(() => {
    async function fetchData() {
      await createTables();
      await getProdutos();
    }
    fetchData();
  }, []);


  return (
    <View style={styles.container}>

      <Text style={styles.title}>Lista de compras</Text>
 
      <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>

        <TextInput style={styles.input}
          placeholder="Qtd"
          value={quantidade}
          onChangeText={setQuantidade}
          keyboardType='numeric'
        />

        <TextInput style={styles.input2}
          placeholder="Produto"
          value={produto}
          onChangeText={setProduto}
        />
  
      <View style={{alignItems: 'center', marginTop: 20, marginBottom: 20}}>
        <TouchableOpacity style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            }}
            onPress={incluirProduto}
            >
            <FontAwesome name='cart-plus' size={30} style={{color: "#2BCC26"}} />
          </TouchableOpacity>
      </View>
    </View>

      <FlatList
        data={produtos}
        renderItem={renderProduto}
        key={t => t.id}
      />
    </View>
  );
};
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 12,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Poppins',
    color: '#8A2BE2',
    fontWeight: 'bold',
    padding: 15,
  },
  input: {
    width: 60,
    marginRight: 5,
    padding: 10,
    color: 'black',
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 5,
    fontFamily: 'Poppins',
  },
  input2:{
    width: 290,
    marginRight: 5,
    padding: 10,
    color: 'black',
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 5,
    fontFamily: 'Poppins',
  },
});

export default App;