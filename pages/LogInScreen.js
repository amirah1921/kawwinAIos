import React, { useState } from "react";
import Background from "../component/Background";
import { View, Text, StyleSheet, Image } from "react-native";
import CustomTextInput from "../component/CustomTextInput";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomButton from "../component/CustomButton";

const LogInScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.text}>
          Hello, Welcome Back{"\n"}
          <Text style={styles.subtitleText}>Happy to see you again,
                to use your{"\n"}account pleace login first.</Text>
          </Text>
          <Image
          source={require("../assets/sitting.png")} 
          style={styles.logo}
          />
        </View>
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
        />
        <CustomButton
          title={"Login"}
          height={42}
          width={140}
          backgroundColor={"rgba(119, 31, 152, 0.6)"}
          onPress={() => navigation.navigate("Location")}
        />
        <View style={styles.lineContainer}>
          <View style={styles.line} />
          <Text style={styles.textBlack}> Login with </Text>
          <View style={styles.line} />
        </View>
        <View style={styles.iconRow}>
          <Icon
            name="google"
            size={30}
            color="#DB4437"
            style={styles.icon}
            onPress={() => navigation.navigate("Location")}
          />
          <Icon
            name="apple"
            size={30}
            color="black"
            style={styles.icon}
            onPress={() => navigation.navigate("Location")}
          />
          <Icon
            name="facebook"
            size={30}
            color="blue"
            style={styles.icon}
            onPress={() => navigation.navigate("Location")}
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
    padding: 10
  },
  logoContainer: {
   
    flexDirection: "row",
     alignItems: "center",
     justifyContent: "center",
  },
  logo: {
    width: 140,
    height: 239,
  },
  text: {
    color: "white",
    fontSize: 24,
    marginVertical: 20,
  },
  subtitleText: {
    color: "white",
    fontSize: 14,
    marginBottom: 10,
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

export default LogInScreen;
