import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SwipeDeleteButton = ({ progress, dragX, onDelete }) => {
  return (
    <View
      style={{
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingRight: 20,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 5,
      }}
    >
      <TouchableOpacity onPress={onDelete}>
        <Ionicons name="trash" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default SwipeDeleteButton;
