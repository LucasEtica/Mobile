import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const InputTextLogin = () => {
  const [texto, setTexto] = useState('');
  const [texto2, setTexto2] = useState('');
  const navigation = useNavigation();

  const handleInputChange = (novoTexto) => {
    setTexto(novoTexto);
  };

  const handleInputChange2 = (novoTexto2) => {
    setTexto2(novoTexto2);
  };

  return (
    <View style={styles.container}>
         <Image
        source={require('../../img/lembrei.png')}
        style={styles.imagem}
      />
      <TextInput
        placeholder="Login"
        onChangeText={handleInputChange}
        value={texto}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        onChangeText={handleInputChange2}
        value={texto2}
        style={styles.input}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('PaginaPrincipal')}
        style={styles.button}>
        <Text style={{ color: 'white' }}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: '60%',
    paddingBottom: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#D6DFCC",
  },
  input: {
    borderRadius: 20,
    backgroundColor: '#899670',
    marginBottom: 10,
    padding: 10,
    width: '80%',
    color: "white",
  },
  button: {
    borderRadius: 16,
    backgroundColor: "#899670",
    padding: 10,
    width: '20%',
    alignItems: 'center',
    marginLeft: "60%",
  },
  imagem: {
    width: 400, // Largura desejada da imagem
    height: 200, // Altura desejada da imagem
    resizeMode: 'contain', // 'contain', 'cover', 'stretch', 'center' são opções para controlar como a imagem é redimensionada
  },
  textoSemConta: {
    color: "#899670",
    marginTop: 200,
    marginLeft: 230,

  }
});

export default InputTextLogin;