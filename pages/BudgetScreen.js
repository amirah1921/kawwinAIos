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
            source={require('../assets/robotAI.png')} // Update with your image path
            style={styles.logo}
            resizeMode="contain"
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
      title={"Next"}
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
});

export default BudgetScreen;
