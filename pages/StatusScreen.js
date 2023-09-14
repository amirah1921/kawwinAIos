import React, { Component } from 'react';
import Background from '../component/Background';
import CustomButton from '../component/CustomButton';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Button,
  BackHandler,
  Image,
} from 'react-native';

const Status = ({ navigation }) => {
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
        <Text style={styles.text}>Who are you?</Text>
        <CustomButton
          title="Single"
          onPress={() => navigation.navigate('Gender')}
          width={260}
          height={50}
          backgroundColor="#FFFF"
        />
        <CustomButton
          title="Bride to be"
          onPress={() => navigation.navigate('Gender')}
          width={260}
          height={50}
          backgroundColor="#FFFF"
        />

        <CustomButton
          title="Married"
          onPress={() => navigation.navigate('Gender')}
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
  },
  button: {
    color: '#FFFF',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 333,
    height: 300,
  },
});

export default Status;
