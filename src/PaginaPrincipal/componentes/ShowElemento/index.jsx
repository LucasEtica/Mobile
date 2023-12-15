
import { Text, View, StyleSheet, TouchableOpacity, Alert, Image } from "react-native";

const ShowElemento = (props) => {

    const handlePress2 = () => {
        Alert.alert('Botão pressionado!');
        // Faça outras ações desejadas quando o botão for pressionado
      };
    const handlePress3 = () => {
    Alert.alert('Botão pressionado!');
    // Faça outras ações desejadas quando o botão for pressionado
    };

    return (
        <>
          <View style={styles.container}>
            <View style={styles.titulo}>
              <Text style={styles.textTitulo}>Faculdade</Text>
            </View>
            <View style={styles.corpoShowELemento}> 
                <Text style={styles.textTitulo}>
                A jornada acadêmica na faculdade é uma experiência repleta de aprendizado e desafios. Durante esse período, é comum depararmo-nos com inúmeras informações, prazos e tarefas. A habilidade de lembrar e gerenciar o que precisa ser feito torna-se crucial. É fundamental desenvolver métodos eficazes de organização e, muitas vezes, a simplicidade de anotar tarefas em um lugar visível ou utilizar aplicativos de lembretes pode ser a chave para navegar com sucesso pelos compromissos acadêmicos e extracurriculares, assegurando uma experiência universitária mais produtiva e enriquecedora.
                </Text>
            </View>
            <View style={styles.viewEditExcl}>
                <TouchableOpacity onPress={handlePress2} style={styles.botaoSeta}>
                    <Image source={require('../../../img/Seta.png')} style={styles.imgSera}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePress2} style={styles.botaoEditar}>
                    <Image source={require('../../../img/Edit.png')} style={styles.img}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePress3} style={styles.botaoDelete}>
                    <Image source={require('../../../img/Delete.png')} style={styles.img}></Image>
                </TouchableOpacity>
            </View>
          </View>
        </>
    )
};

const styles = StyleSheet.create({
   container: {
    backgroundColor: "#899670",
    width: 120,
    height: 600,
    flexDirection: 'row',
    flex: 0,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 15,
    padding: 10,
    justifyContent: 'center',
    marginTop: 10,
    width: 400,
    flexWrap: 'wrap',
    
  },
  titulo: {
    backgroundColor: "#D6DFCC", 
    flexDirection: 'row',
    width: '100%',
    height: 50,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
   },
   textTitulo: {
    color: "#899670",
    fontWeight: 'bold',
   },
   corpoShowELemento: {
    backgroundColor: "#D6DFCC", 
    flexDirection: 'row',
    width: '100%',
    height: 480,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    // alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    padding: 10,
},
botaoEditar: {
    width: 40,
    height: 40,
    backgroundColor: "blue",
    marginTop: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
},
img: {
    width: 30,
    height: 30,
},
botaoDelete: {
    marginLeft: 5,
    width: 40,
    height: 40,
    backgroundColor: "red",
    marginTop: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
},
botaoSeta: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    marginTop: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
}, 
imgSera: {
    width: 40,
    height: 40,
},
viewEditExcl: {
    width: "10%",
    justifyContent: 'left',
    alignItems: 'left',
    flexDirection: 'row',
    marginLeft: 150,
},
  });

export default ShowElemento;