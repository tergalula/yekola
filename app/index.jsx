import React, { useState } from 'react'
import { View, Image, StyleSheet, ScrollView, Button, Text } from 'react-native'
import ColorList from '../components/ColorList'

const home = () => {

    //Objet de l'API
    let apiURL = [
      {
        id: 1,
        logo: "https://i.pinimg.com/736x/cd/3d/7b/cd3d7bb585cf451ab74423551d9ef4e1.jpg",
        name: "Air Jordan Vert",
        slider:
          "https://i.pinimg.com/736x/35/c6/6b/35c66b5f2aabc0e1e340d5771e1f02a9.jpg",
        commet:
          "Ai-Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, optio quibusdam! Culpa inventore consequuntur, maxime ab repellat fugiat voluptatibus non in, beatae pariatur, aliquam earum modi a placeat nesciunt. Quisquam!",
        prix: 700,
        devise: "$",
      },
      {
        id: 2,
        logo: "https://i.pinimg.com/236x/72/c1/fe/72c1fefc6dc893602d85d76257ea5196.jpg",
        name: "Addidas 20K",
        slider:
          "https://i.pinimg.com/736x/c3/89/42/c3894285a8b836673c28547e53342623.jpg",
        commet:
          "Addidas-Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, optio quibusdam! Culpa inventore consequuntur, maxime ab repellat fugiat voluptatibus non in, beatae pariatur, aliquam earum modi a placeat nesciunt. Quisquam!",
        prix: 150,
        devise: "$",
      },
      {
        id: 3,
        logo: "https://i.pinimg.com/236x/cb/a4/5c/cba45c297d76265b0f0b60ebd5d967bd.jpg",
        name: "PUMA 12A",
        slider:
          "https://i.pinimg.com/736x/56/8b/93/568b937661e7b792270ca667acc9ff3a.jpg",
        commet:
          "Puma-Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, optio quibusdam! Culpa inventore consequuntur, maxime ab repellat fugiat voluptatibus non in, beatae pariatur, aliquam earum modi a placeat nesciunt. Quisquam!",
        prix: 300,
        devise: "$",
      },
    ];
  
    return (
      <View style={styles.container}>
        <ScrollView horizontal={false} style={styles.horinzontlStyle}>
          {apiURL.map((itemaster) => (
            <View key={itemaster.id} style={styles.card}>
              <View style={styles.header}>
                <Image
                  style={styles.logo}
                  source={{
                    uri: itemaster.logo,
                  }}
                />
              </View>
              <View style={styles.productPicture}>
                <Image
                  style={styles.picture}
                  source={{
                    uri: itemaster.slider,
                  }}
                />
              </View>
              <View style={styles.productTxt}>
                <Text style={styles.TxtName}> {itemaster.name} </Text>
              </View>
              <View style={styles.productTitleDescription}>
                <Text style={styles.TxtTitleDescription}> Men Shoes</Text>
              </View>
              <View style={styles.productDescription}>
                <Text style={styles.TxtDescription}>{itemaster.commet}</Text>
              </View>
              <View style={styles.productColors}>
                <View style={styles.Color1}></View>
                <View style={styles.Color2}></View>
                <View style={styles.Color3}></View>
              </View>
              <View style={styles.productPrice}>
                <Text style={styles.TxtPrice}>
                  {itemaster.prix + "" + itemaster.devise}{" "}
                </Text>
              </View>
              <View style={styles.productAddToCart}>
                <View style={styles.bttn}>
                  <Text style={styles.addToCart}> ADD TO CART</Text>
                  {/* <Text style={styles.text} onPress={handlePress}>{message}</Text> */}
                  {/* <Button style={styles.addToCart} title="ADD TO CART" onClick={myfun}/> */}
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#47a8e1",
      padding: 20,
    },
    horinzontlStyle: {
      height: "auto",
    },
    card: {
      display: "flex",
      flexDirection: "column",
      width: "auto",
      height: 580,
      backgroundColor: "white",
      borderRadius: 20,
      marginTop: 50,
      overflow: "hidden",
    },
    header: {
      display: "flex",
      flexDirection: "column",
      width: "auto",
      height: "auto",
      alignItems: "center",
    },
    logo: {
      width: 50,
      height: 50,
      margin: "auto",
      paddingTop: 5,
      paddingBottom: 5,
    },
    productPicture: {
      display: "flex",
      flexDirection: "column",
      width: "auto",
      height: 200,
      backgroundColor: "red",
    },
    picture: {
      width: "auto",
      height: "100%",
    },
    productTxt: {
      display: "flex",
      flexDirection: "column",
      width: "auto",
      height: 60,
      justifyContent: "center",
    },
    TxtName: {
      fontSize: 25,
  
      fontWeight: 700,
      textAlign: "center",
    },
  
    productTitleDescription: {
      display: "flex",
      flexDirection: "column",
      width: "auto",
      height: 30,
    },
    TxtTitleDescription: {
      fontSize: 17,
  
      fontWeight: 800,
      textAlign: "center",
    },
    productDescription: {
      display: "flex",
      flexDirection: "column",
      width: "auto",
      height: 60,
      alignItems: "center",
    },
    TxtDescription: {
      fontSize: 12,
  
      width: "70%",
  
      textAlign: "center",
    },
    productColors: {
      display: "flex",
      flexDirection: "row",
      width: "auto",
      height: 60,
      gap: 15,
      justifyContent: "center",
      alignItems: "center",
    },
    Color1: {
      height: 40,
      width: 40,
      borderRadius: "50%",
      backgroundColor: "black",
    },
    Color2: {
      height: 40,
      width: 40,
      borderRadius: "50%",
      backgroundColor: "green",
    },
    Color3: {
      height: 40,
      width: 40,
      borderRadius: "50%",
      backgroundColor: "red",
    },
    productPrice: {
      display: "flex",
      flexDirection: "column",
      width: "auto",
      height: 50,
  
      justifyContent: "center",
    },
    TxtPrice: {
      textAlign: "center",
      fontSize: 30,
      fontWeight: "800",
      color: "#000",
    },
    productAddToCart: {
      display: "flex",
      flexDirection: "column",
      width: "auto",
      height: 60,
  
      justifyContent: "center",
      alignItems: "center",
    },
    bttn: {
      height: 50,
      width: "60%",
      //backgroundColor: "#ffeee6",
      //borderRadius: 40,
      justifyContent: "center",
      backgroundColor: "#1e90ff", // Couleur de fond du bouton
      //paddingVertical: 15,        // Espace vertical
      //paddingHorizontal: 30,      // Espace horizontal
      borderRadius: 40, // Bordure arrondie
      //elevation: 5,               // Ombre pour Android
      shadowColor: "#000", // Ombre pour iOS
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      textAlign: "center",
      margin: "auto",
      color: "#ffffff",
    },
    addToCart: {
      textAlign: "center",
      fontSize: 16,
      fontWeight: "800",
      color: "#fff",
    },
  });

export default home