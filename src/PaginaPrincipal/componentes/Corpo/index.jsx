
import { Text, View, StyleSheet } from "react-native";
import Elementos from "../Elementos";

const Corpo = (props) => {
    return (
        <View style={styles.container}>
            <Elementos />
        </View>
    )
};

const styles = StyleSheet.create({
   container: {
    width: 400,
    backgroundColor: "#899670",
    marginTop: 5,
    // paddingBottom: "100%",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 14,
    flexWrap: 'wrap',
   },
  });

export default Corpo;