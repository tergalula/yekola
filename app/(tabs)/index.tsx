import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TextInput } from "react-native";

const App = () => {

  //Code Js ici 
  let nom = "Lula"
  var prenom = "Dries" 
  const postnom = "Yekola"

  const [nombre, setnombre] = useState(7)
  const [name, setname] = useState("Brown")

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.box}>
        <Text style={styles.title}>yekola {nombre} </Text>
      </View>

      <View style={styles.box1}>
        <Text style={styles.title}>Body {nom+' - '+postnom} </Text>
        <Button style={styles.main} title='Valider' onPress={()=>setnombre(nombre + 10)}></Button>
        <Text style={styles.buttonText} onPress={()=>setnombre(nombre + 20)}>Appuyer ici</Text>
      </View>

      <View style={styles.box2}>
        <Text> Enter your Name please : </Text>
        <TextInput style={styles.input} placeholder="Enter your name" onChangeText={(text)=>setname(text)}></TextInput>
        <Text style={styles.title4}> My name is : {name} </Text>
      </View>

      <View style={styles.box3}>
        <Text style={styles.title}>Body-3 {prenom} {postnom} </Text>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d0d3d4",
    padding: "auto",
    width: "auto",
  },
  input: {
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    backgroundColor: "#fff",
    width: "auto"
  },
  title4: {
    color: "#000",
    fontSize: 28,
    margin: "auto",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "capitalize",
  },
  title: {
    color: "#fff",
    fontSize: 28,
    // marginTop: 40,
    margin: "auto",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  buttonText: {
    backgroundColor: '#1e90ff', // Couleur de fond du bouton
    paddingVertical: 15,        // Espace vertical
    paddingHorizontal: 30,      // Espace horizontal
    borderRadius: 30,           // Bordure arrondie
    elevation: 5,               // Ombre pour Android
    shadowColor: '#000',        // Ombre pour iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width: "40%",
    textAlign: "center",
    margin: "auto"
  },
  box: {
    backgroundColor: "#900C3F",
    width: "100%",
    height: 100,
    padding: "auto",
    shadowColor: '#000',
    shadowRadius: 20
  },
  box1: {
    backgroundColor: "#edbb99",
    marginTop: 10,
    width: "98%",
    borderRadius: 10,
    height: 200,
    margin: "auto",
    shadowColor: '#000',
    shadowRadius: 20
  },
  box2: {
    backgroundColor: "#edbb99",
    marginTop: 10,
    width: "98%",
    borderRadius: 10,
    height: 200,
    margin: "auto",
    shadowColor: '#000',
    shadowRadius: 20
  },
  box3: {
    backgroundColor: "#edbb99",
    marginTop: 10,
    width: "98%",
    borderRadius: 10,
    height: 200,
    margin: "auto",
    shadowColor: '#000',
    shadowRadius: 20
  },
});

export default App;