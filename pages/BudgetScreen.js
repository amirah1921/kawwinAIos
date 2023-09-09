import React, { useState } from "react";
import Background from "../component/Background";
import { View, Text, StyleSheet, Image } from "react-native";
import CustomTextInput from "../component/CustomTextInput";
import CustomButton from '../component/CustomButton';

const BudgetScreen = ({ navigation }) => {
  const [budget, setBudget] = useState(""); // Change "value" to "budget"

  // Handler for budget change
  const handleBudgetChange = (value) => {
    setBudget(value);
  };

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/rafiki.png")}
            style={styles.logo}
          />
        </View>
        <Text style={styles.text}>What's your estimated budget?</Text>
        {/* Replace CustomTextInput with CurrencyInput */}
         {/* <CurrencyInput
          placeholder="Budget"
          value={budget}
          onValueChange={handleBudgetChange}
          prefix="$"
          delimiter=","
          precision={2}
        /> */}
        <CustomTextInput
          placeholder="RM"
          value={budget}
          onChangeText={handleBudgetChange}
        />
        <CustomButton
      title={"next"}
      onPress={() => navigation.navigate("EventDate")}/>
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
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default BudgetScreen;
