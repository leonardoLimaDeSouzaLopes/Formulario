import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Picker, StyleSheet, Text, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-web';

export default function App() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [email, setEmail] = useState("");
  const [hobby, setHobby] = useState("");
  const [hobbiesSelecionados, setHobbiesSelecionados] = useState([]);

  return (
    <View style={styles.body}>
      <StatusBar style="auto" />
      <Image style={styles.imagem} source={require("./assets/brown-avatar.png")} />
      <View style={styles.container}>
        <Text style={styles.texto}>Dados Pessoais</Text>
        <TextInput style={styles.inputTexto} onChangeText={(nome) => setNome(nome)} placeholder="Digite Seu nome" />
        <TextInput style={styles.inputTexto} onChangeText={(telefone) => setTelefone(telefone)} placeholder="Digite Seu nome" />
        <TextInput style={styles.inputTexto} onChangeText={(endereco) => setEndereco(endereco)} placeholder="Digite Seu nome" />
        <TextInput style={styles.inputTexto} onChangeText={(email) => setEmail(email)} placeholder="Digite Seu nome" />
      </View>
      <View style={styles.container}>
        <Text style={styles.texto}>Outras Informações</Text>
        <Picker selectedvalue={selectedvalue} onValueChange={((itemValue) => setHobbiesSelecionados(itemValue))}>
          <Picker.item label="Programar" value="Programar" />
        </Picker>
      </View>
      <View style={styles.container}>
        <Text style={styles.texto}>Nome: {nome}</Text>
        <Text style={styles.texto}>Telefone: {telefone}</Text>
        <Text style={styles.texto}>Endereço: {endereco}</Text>
        <Text style={styles.texto}>Email: {email}</Text>
        <Text style={styles.texto}>Hobby:</Text>
        <Text style={styles.texto}>Aceito:</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    borderColor: "#000",
    marginTop: 20,
    borderWidth: 3,
    borderRadius: 20,
    padding: 10,
    paddingTop: 20,
  },
  imagem: {
    width: 128,
    height: 128,
    justifyContent: "flex-start",
    margin: 10,
    borderRadius: 50,
  },
  texto: {
    color: "#000",
    fontSize: 20,
  },
  inputTexto: {
    color: "#404040",
    borderColor: "#808080",
    fontSize: 13,
    marginTop: 10,
    borderWidth: 2,
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
});
