import React, { useState } from "react";
import Background from "../component/Background";
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity } from "react-native";
import CustomTextInput from "../component/CustomTextInput";
import CustomButton from '../component/CustomButton';

const BackgroundImage = ({ source, opacity, children }) => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={source}
        style={[StyleSheet.absoluteFill, { opacity, width: '100%', height: '100%' }]}
        resizeMode="cover"
      />
      {children}
    </View>
  );
};

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
    <BackgroundImage source={require("../assets/Location.png")} opacity={0.3}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
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
          title={"Next"}
          onPress={() => navigation.navigate("Budget")}
        />
      </View>
    </BackgroundImage>
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
  text: {
    color: "white",
    fontSize: 30,
    marginVertical: 30,
    fontFamily: "Roboto",
  },
  googleMapsLink: {
    width: 260,
    height: 45,
    marginTop: 10,
    padding: 10,
    backgroundColor: "rgba(119, 31, 152, 0.6)",
    borderRadius: 1,
  },
  linkText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",

  },
});

export default LocationEvent;
