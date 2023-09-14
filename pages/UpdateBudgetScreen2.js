import React, { useState } from "react";
import Background from "../component/Background";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import CustomTextInput from "../component/CustomTextInput";
import HeaderComponent from "../component/HeaderComponent";
import { Ionicons } from "@expo/vector-icons";

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

const BudgetScreen = ({ navigation }) => {
  const [budget, setBudget] = useState("");

  // Handler for budget change
  const handleBudgetChange = (value) => {
    setBudget(value);
  };

  // Function to handle the button press
  const handleSaveButtonPress = () => {
    // You can implement logic here to save/update the budget data, e.g., send it to an API or store it locally.
    // For now, we'll just log the budget value.
    console.log("Budget Saved:", budget);

    // You can also navigate to another screen or perform any other necessary actions.
    navigation.navigate("UpdateBudget3");
  };

  return (
    <Background>
      <BackgroundImage source={require("../assets/budget.png")} opacity={0.3}>
        <HeaderComponent title="Update Spending" navigation={navigation} />

        <View style={styles.container}>
          <Text style={styles.text}>Budget Total</Text>
          <CustomTextInput
            placeholder="RM"
            value={budget}
            onChangeText={handleBudgetChange}
          />
        </View>

        {/* Save Button */}
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSaveButtonPress}
        >
          <Ionicons name="save" size={30} color="white" />
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </BackgroundImage>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "start",
    paddingHorizontal: 20,
  },
  text: {
    color: "white",
    fontSize: 24,
    marginVertical: 30,
    fontFamily: "Poppins",
  },
  saveButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    marginLeft: 5,
  },
});

export default BudgetScreen;
