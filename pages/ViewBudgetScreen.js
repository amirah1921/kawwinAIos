import React, { useState } from "react";
import Background from "../component/Background";
import { View, Text, StyleSheet, FlatList, Alert } from "react-native"; // Import Alert
import HeaderComponent from "../component/HeaderComponent";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import LineGraph from "../component/LineGraph";
import { Swipeable } from "react-native-gesture-handler";
import SwipeDeleteButton from "../component/SwipeDeleteButton";

const BudgetScreen = ({ navigation }) => {
  const [budgetData, setBudgetData] = useState([
    {
      id: 1,
      category: "Food",
      description: "Groceries",
      budget: 3000,
      payment: "Card",
      month: "August",
    },
    {
      id: 2,
      category: "Entertainment",
      description: "Movie night",
      budget: 3000,
      payment: "Card",
      month: "September",
    },
    {
      id: 3,
      category: "Music",
      description: "Karaoke",
      budget: 2000,
      payment: "Card",
      month: "September",
    },
  ]);

  // Group data by month and calculate total budget for each month
  const groupDataByMonth = () => {
    const groupedData = {};
    budgetData.forEach((item) => {
      if (!groupedData[item.month]) {
        groupedData[item.month] = 0;
      }
      groupedData[item.month] += item.budget;
    });
    return groupedData;
  };

  // Get the grouped data by month
  const budgetByMonth = groupDataByMonth();

  // Function to delete a budget item
  const deleteBudgetItem = (itemId) => {
    // Show a confirmation popup
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this budget item?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            const updatedBudgetData = budgetData.filter((item) => item.id !== itemId);
            setBudgetData(updatedBudgetData);
          },
        },
      ]
    );
  };

  // Get the current month
  const currentMonth = new Date().toLocaleString("en-US", { month: "long" });

  return (
    <Background>
      <HeaderComponent title="My Spending" navigation={navigation} />
      <View style={styles.container}>
        {/* Display the line graph */}
        <LineGraph data={budgetByMonth} />

        {/* Display total budget for the current month */}
        {budgetByMonth[currentMonth] && (
          <View style={styles.monthlyBudget}>
            <Text>Budget for {currentMonth}</Text>
            <Text>Total Budget: RM{budgetByMonth[currentMonth]}</Text>
          </View>
        )}

        {/* Display retrieved data for the current month in a FlatList */}
        <Text style={styles.text}>Your Budget</Text>
        <FlatList
          data={budgetData.filter((item) => item.month === currentMonth)}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Swipeable
              renderRightActions={(progress, dragX) => (
                <SwipeDeleteButton
                  progress={progress}
                  dragX={dragX}
                  onDelete={() => deleteBudgetItem(item.id)}
                />
              )}
            >
              <View style={styles.budgetItem}>
                <View style={styles.budgetItemContent}>
                  <Text>{item.category}</Text>
                  <Text>Budget: RM{item.budget}</Text>
                  <Text>{item.payment}</Text>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.editButton}
                    onPress={() => {
                      navigation.navigate("UpdateBudget2");
                    }}
                  >
                    <Ionicons name="pencil" size={24} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            </Swipeable>
          )}
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
    marginVertical: 10,
    fontFamily: "Poppins",
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  budgetItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginVertical: 5,
    width: 330,
  },
  budgetItemContent: {
    flex: 1,
  },
  editButton: {
    backgroundColor: "grey",
    borderRadius: 5,
    padding: 5,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: "red",
    borderRadius: 5,
    padding: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  monthlyBudget: {
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginVertical: 10,
    width: 330,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default BudgetScreen;
