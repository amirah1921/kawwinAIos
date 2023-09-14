import React, { useState } from "react";
import Background from "../component/Background";
import { View, Text, StyleSheet, Image } from "react-native";
import CustomTextInput from "../component/CustomTextInput";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomButton from "../component/CustomButton";

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  // const handleKeyPress = (event) => {
  //   if (event.nativeEvent.key === 'Enter') {
  //     navigation.navigate("Gender", { password });
  //   }
  // };

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/work.png")} // Update with your image path
            style={styles.logo}
          />
        </View>
        <Text style={styles.text}>Sign up with new account</Text>
        <CustomTextInput
          placeholder="Username"
          value={username}
          onChangeText={handleUsernameChange}
        />
        <View style={styles.inputSpacer} />

        <CustomTextInput
          placeholder="Password"
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry={true}
          //onKeyPress={handleKeyPress}
        />
        <View style={styles.lineContainer}>
          <View style={styles.line} />
          <Text style={styles.textBlack}> Or Sign up with </Text>
          <View style={styles.line} />
        </View>
        <View style={styles.iconRow}>
          <Icon
            name="google"
            size={30}
            color="#DB4437"
            style={styles.icon}
            onPress={() => navigation.navigate("LogIn")}
          />
          <Icon
            name="apple"
            size={30}
            color="black"
            style={styles.icon}
            onPress={() => navigation.navigate("LogIn")}
          />
          <Icon
            name="facebook"
            size={30}
            color="blue"
            style={styles.icon}
            onPress={() => navigation.navigate("LogIn")}
          />
        </View>
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
    fontSize: 15,
    marginVertical: 20,
  },
  iconRow: {
    flexDirection: "row",
    marginBottom: 30,
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default SignUpScreen;
