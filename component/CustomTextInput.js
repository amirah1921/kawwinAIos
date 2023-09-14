import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomTextInput = ({ value, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      placeholderTextColor="#000000"
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adding opacity of 80%
    width: 260,
    height: 45,
    borderWidth: 1,
    padding: 10,
    borderRadius: 1,
    color: 'black',
    fontFamily: "Roboto",
    fontSize: 16,
  },
});

export default CustomTextInput;
