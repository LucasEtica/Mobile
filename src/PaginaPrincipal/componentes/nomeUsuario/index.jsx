
import { Text, View, StyleSheet } from "react-native";

const NomeUsuario = (props) => {
    return <View style={styles.container}>
        <Text style={styles.texto}>
            Lucas Ribacki
        </Text>
    </View>
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#899670",
        padding: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        width: 400,
        position: "left",
        paddingTop: 30,
    },
    texto: {
        color: "white",
        fontSize: 20,
    }
  });

export default NomeUsuario;