
import { Text, View, StyleSheet } from "react-native";

const Elementos = (props) => {
    return (
        <>
          <View style={styles.container}>
            <View style={styles.titulo}>
              <Text style={styles.textTitulo}>Faculdade</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.titulo}>
              <Text style={styles.textTitulo}>Trabalho</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.titulo}>
              <Text style={styles.textTitulo}>Carro</Text>
            </View>zz
          </View>
          <View style={styles.container}>
            <View style={styles.titulo}>
              <Text style={styles.textTitulo}>Escola</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.titulo}>
              <Text style={styles.textTitulo}>Carro</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.titulo}>
              <Text style={styles.textTitulo}>Gatos</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.titulo}>
              <Text style={styles.textTitulo}>Mercado</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.titulo}>
              <Text style={styles.textTitulo}>Livro</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.titulo}>
              <Text style={styles.textTitulo}>Familia</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.titulo}>
              <Text style={styles.textTitulo}>Escola</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.titulo}>
              <Text style={styles.textTitulo}>Escola</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.titulo}>
              <Text style={styles.textTitulo}>Escola</Text>
            </View>
          </View>
        </>
    )
};

const styles = StyleSheet.create({
   container: {
    backgroundColor: "#D6DFCC",
    width: 120,
    height: 150,
    flexDirection: 'row',
    flex: 0,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 15,
    padding: 10,
    justifyContent: 'center',
    
  },
  titulo: {
    backgroundColor: "#899670",
    flexDirection: 'row',
    width: 100,
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
   },
   textTitulo: {
    color: "white",
    fontWeight: 'bold',
   }
  });

export default Elementos;