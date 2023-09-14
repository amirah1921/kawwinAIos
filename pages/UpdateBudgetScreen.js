import React, { useState } from "react";
import Background from "../component/Background";
import { View, Text, StyleSheet, picker} from "react-native";
import CustomTextInput from "../component/CustomTextInput";
import HeaderComponent from "../component/HeaderComponent";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";


const BudgetScreen = ({ navigation }) => {
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); // Initialize the selectedCategory 

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  return (
    <Background>
      <HeaderComponent title="Update Spending" navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.text}>Category</Text>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(itemValue) => setSelectedCategory(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Photography" value="Photography" />
          <Picker.Item label="Planning" value="Planning" />
          <Picker.Item label="Fashion" value="Fashion" />
          <Picker.Item label="Caterer" value="Caterer" />
          <Picker.Item label="Engagement Party" value="Engagement Party" />
          <Picker.Item label="Honeymoon" value="Honeymoon" />
          <Picker.Item label="Reception" value="Reception" />
          <Picker.Item label="Wedding Favor" value="Wedding Favor" />
          <Picker.Item label="Rehearsal" value="Rehearsal" />
          <Picker.Item label="Music" value="Music" />
        </Picker>
        <Text style={styles.text}>Description</Text>
        <CustomTextInput
          value={description}
          onChangeText={handleDescriptionChange}
        />
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("UpdateBudget2")}
      >
        <Ionicons name="add-circle-outline" size={30} color="white" />
      </TouchableOpacity>

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
  picker: {
    borderRadius: 1,
    borderWidth: 1, // Border width
    marginTop: 10, // Add spacing between text and buttons
    alignItems: "center", // Center the buttons horizontally
    padding: 10, // Add padding to the container
    width: 260,
    height: 45,
    color: "black",
  },
});

export default BudgetScreen;
