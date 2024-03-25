import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { CheckBox, Image, Picker, StyleSheet, Text, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-web';

export default function App() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [email, setEmail] = useState("");
  const [hobby, setHobby] = useState("");
  const [hobbiesSelecionados, setHobbiesSelecionados] = useState([]);
  const [aceitamentoDosTermos, setAceitamentoDosTermos] = useState(false);
  const [corAceito] = "#00ff00";

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
        <Picker style={styles.picker} label="Programar" value="Programar" />
        <View style={styles.checkBoxLabel}>
          <CheckBox style={styles.checkBox} value={aceitamentoDosTermos} onValueCharge={setAceitamentoDosTermos} color={aceitamentoDosTermos ? corAceito : undefined} />
          <Text style={styles.textoPequeno}>Aceita os termos de Serviço</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.texto}>Nome: {nome}</Text>
        <Text style={styles.texto}>Telefone: {telefone}</Text>
        <Text style={styles.texto}>Endereço: {endereco}</Text>
        <Text style={styles.texto}>Email: {email}</Text>
        <Text style={styles.texto}>Hobby:</Text>
        <Text style={styles.texto}>Aceito: {aceitamentoDosTermos ? "👍" : "👎"}</Text>
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
    width: "95%",
    marginTop: 20,
    marginHorizontal: "2.5%",
    borderWidth: 3,
    borderRadius: 20,
    padding: 10,
    paddingTop: 20,
  },
  imagem: {
    width: 192,
    height: 192,
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
  picker: {
    color: "#404040",
    borderColor: "#808080",
    fontSize: 13,
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  checkBoxLabel: {
    marginTop: 10,
    flexDirection: "row",
    textAlign: "center"
  },
  checkBox: {
    marginRight: 5,
  },
  textoPequeno: {
    color: "#404040",
    fontSize: 13,
  },
});

