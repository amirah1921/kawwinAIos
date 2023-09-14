import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Background from '../component/Background';
import CustomButton from '../component/CustomButton';
const GenderScreen = ({ navigation }) => {
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
        <Text style={styles.text}>
          I have read and agree to the Terms of Service and the Privacy Policy.
        </Text>
        <CustomButton
          title="I Accept"
          onPress={() => navigation.navigate('Location')}
          width={200}
          height={50}
          backgroundColor="rgba(255, 0, 0, 0.6)"
        />

        <CustomButton
          title="Cancel"
          onPress={() => navigation.navigate('Status')}
          width={200}
          height={50}
          backgroundColor="rgba(0, 0, 0, 0.4)"
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    // Styles for logo container
  },
  text: {
    color: 'white',
    fontSize: 30,
    marginVertical: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    width: 260,
    backgroundColor: '#FFFF',
    borderRadius: 30,
    borderColor: '#00000',
    borderWidth: 1, // Border width
    marginTop: 10, // Add spacing between text and buttons
    alignItems: 'center', // Center the buttons horizontally
    padding: 15, // Add padding to the container
  },
  button: {
    color: '#FFFF',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 370,
    height: 290,
  },
});
export default GenderScreen;
