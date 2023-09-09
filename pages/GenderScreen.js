import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Background from "../component/Background";
import CustomButton from "../component/CustomButton";
const GenderScreen = ({navigation}) => {

    return (
        <Background>
          <View style={styles.container}>
            <View style={styles.logoContainer}>
            <Image
      source={require("../assets/gender.png")} // Update with your image path
      style={styles.logo}
    />
            </View>
            <Text style={styles.text}>Select your gender</Text>
            <CustomButton
              title="Male"
              onPress={() => navigation.navigate("Interest")}
              width={260}
              height={50}
              backgroundColor="#FFFF"
            />
  
            <CustomButton
              title="Female"
              onPress={() => navigation.navigate("Interest")}
              width={260}
              height={50}
              backgroundColor="#FFFF"
            />
  
          </View>
        </Background>
      );
    
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    logoContainer: {
      // Styles for logo container
    },
    text: {
      color: "white",
      fontSize: 30,
      marginVertical: 20,
    },
    buttonContainer: {
      width: 260,
      backgroundColor: "#FFFF",
      borderRadius: 30,
      borderColor: "#00000",
      borderWidth: 1, // Border width
      marginTop: 10, // Add spacing between text and buttons
      alignItems: "center", // Center the buttons horizontally
      padding: 15, // Add padding to the container
    },
    button: {
      color: "#FFFF",
    },
    logoContainer: {
      alignItems: "center",
      justifyContent: "center",
    },
    logo: {
      width: 370,
      height: 290,
    },
  });
export default GenderScreen