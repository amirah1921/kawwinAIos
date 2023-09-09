import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomTextInput = ({ value, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      placeholderTextColor="#FFFF"
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      
      
    />
  );
};

const styles = StyleSheet.create({
  input: {
    
    width: 340,
    height: 45,
    borderWidth: 1,
    padding: 10,
    borderRadius: 26,
    color: "white",
   // marginBottom: 10,
    
  },
  
});

export default CustomTextInput;
