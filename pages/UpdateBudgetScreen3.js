import React, { useState } from "react";
import Background from "../component/Background";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from '../component/CustomButton';
import HeaderComponent from "../component/HeaderComponent";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";


const BudgetScreen = ({ navigation }) => {
  return (
    <Background>
      <HeaderComponent title="Update Spending" navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.text}>Type Payment</Text>
        <CustomButton
          title="Card"
          onPress={() => navigation.navigate('ViewBudget')}
          width={260}
          height={50}
          backgroundColor="#FFFF"
        />
        <CustomButton
          title="Cash"
          onPress={() => navigation.navigate('ViewBudget')}
          width={260}
          height={50}
          backgroundColor="#FFFF"
        />

        <CustomButton
          title="Transfer"
          onPress={() => navigation.navigate('ViewBudget')}
          width={260}
          height={50}
          backgroundColor="#FFFF"
        />
      </View>
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
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});

export default BudgetScreen;
