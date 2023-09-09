import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import InterestButton from '../component/InterestButton';
import Background from '../component/Background';
import CustomButton from '../component/CustomButton';

const interestsData = [
  { id: 1, name: 'Cooking', selected: false },
  { id: 2, name: 'Painting', selected: false },
  { id: 3, name: 'Photography', selected: false },
  { id: 4, name: 'Travel', selected: false },
  { id: 5, name: 'Fitness', selected: false },
  { id: 6, name: 'Reading', selected: false },
  { id: 7, name: 'Music', selected: false },
  { id: 8, name: 'Sports', selected: false },
  { id: 9, name: 'Gaming', selected: false },
  { id: 10, name: 'Art', selected: false },
];

const InterestSelectionScreen = ({navigation}) => {
  const [interests, setInterests] = useState(interestsData);

  const toggleInterestSelection = (interestId) => {
    setInterests((prevInterests) =>
      prevInterests.map((interest) =>
        interest.id === interestId
          ? { ...interest, selected: !interest.selected }
          : interest
      )
    );
  };

  return (
    <Background>
    <ScrollView contentContainerStyle={styles.container}>
    <Image
      source={require("../assets/interest.png")} // Update with your image path
      style={styles.logo}
    />
      <Text style={styles.introText}>Select your interests:</Text>
      <View style={styles.buttonContainer}>
        {interests.map((interest) => (
          <InterestButton
            key={interest.id}
            interest={interest}
            onPress={toggleInterestSelection}
          />
        ))}
      </View>
      <CustomButton
      title={"next"}
      onPress={() => navigation.navigate("Terms")}/>
    </ScrollView>

    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  introText: {
    marginTop: 20,
    fontSize: 30,
    color:"white",
    marginBottom: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 370,
    height: 290,
  },
});

export default InterestSelectionScreen;
