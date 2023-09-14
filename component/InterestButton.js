import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const InterestButton = ({ interest, onPress }) => {
  const buttonStyle = interest.selected ? styles.selectedButton : styles.button;

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={() => onPress(interest.id)}
    >
      <Text style={styles.buttonText}>{interest.name}</Text>
      <Icon
        name={interest.selected ? 'minus' : 'plus'}
        size={20}
        color="black"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#EFEFEF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 1,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: "#8247C5",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    marginRight: 5,
  },
});

export default InterestButton;
