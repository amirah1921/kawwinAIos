import React, { useState } from "react";
import Background from "../component/Background";
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity } from "react-native";
import CustomTextInput from "../component/CustomTextInput";
import CustomButton from '../component/CustomButton';

const LocationEvent = ({ navigation }) => {
  const [location, setLocation] = useState("");

  const handleLocationChange = (text) => {
    setLocation(text);
  };

  const handleSearchGoogleMaps = () => {
    const query = encodeURIComponent(location); // Encode the location query
    const url = `https://www.google.com/maps/search/?api=1&query=${query}`;
    Linking.openURL(url);
  };

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/rafiki.png")} // Update with your image path
            style={styles.logo}
          />
        </View>
        <Text style={styles.text}>Where is the location ?</Text>
        <CustomTextInput
          placeholder="Location"
          value={location}
          onChangeText={handleLocationChange}
        />
        <TouchableOpacity style={styles.googleMapsLink} onPress={handleSearchGoogleMaps}>
          <Text style={styles.linkText}>Search on Google Maps</Text>
        </TouchableOpacity>
      <CustomButton
      title={"next"}
      onPress={() => navigation.navigate("Budget")}/>
      </View>
    </Background>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
     alignItems: "center",
     justifyContent: "center",
  },
  logo: {
    width: 370,
    height: 290,
  },
  text: {
    color: "white",
    fontSize: 30,
    marginVertical: 20,
  },
  inputSpacer: {
    height: 10, // Adjust the height as needed
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginBottom: 15,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "white",
  },
  textBlack: {
    color: "white",
    fontSize: 30,
    marginVertical: 20,
  },
  iconRow: {
    flexDirection: "row",
    marginBottom: 30,
  },
  icon: {
    marginHorizontal: 10,
  },
  googleMapsLink: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#DB4437",
    borderRadius: 5,
  },
  linkText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default LocationEvent;