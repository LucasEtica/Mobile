import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Image, Alert } from 'react-native';
import NomeUsuario from './componentes/nomeUsuario';
import Corpo from './componentes/Corpo';
import ShowElemento from './componentes/ShowElemento';

const PaginaPrincipal = () => {
    const handlePress = () => {
        Alert.alert('Botão pressionado!');
        // Faça outras ações desejadas quando o botão for pressionado
      };

    const handlePress2 = () => {
        Alert.alert('Botão pressionado!');
        // Faça outras ações desejadas quando o botão for pressionado
      };

  return (
    <View style={styles.container}>
        <NomeUsuario />
        <TouchableOpacity onPress={handlePress} style={styles.botao}>
            <Text style={styles.textoBotao}>Nova nota</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress2} style={styles.botao}>
            <Text style={styles.textoBotao}>Nova lembrete</Text>
        </TouchableOpacity>
        <Corpo />
        {/* <ShowElemento /> */}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      paddingTop: '10%',
      paddingBottom: '300%',
      justifyContent: 'left',
      alignItems: 'center',
      backgroundColor: "#D6DFCC",
    },
    botao: {
        backgroundColor: '#899670',
        padding: 10,
        alignItems: 'center',
        width: 400,
        position: "left",
        marginTop: 5 
      },
      textoBotao: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
  });
  

export default PaginaPrincipal;