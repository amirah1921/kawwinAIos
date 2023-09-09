import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from '../component/CustomButton';

const Introduction = () => {
  const [showIntro, setShowIntro] = useState(false);
  const navigation = useNavigation();

  const slides = [
    {
      key: 's1',
      title: 'Personalized Recommendations',
      text: 'AI-Driven suggestion based on couples preferences and budget',
      gradientColors: ["#101014", "#6534C9", "#8247C5", "#FFE8D2"],
      imageAboveTitle: require('../assets/introduction1.png'),
    },
    {
      key: 's2',
      title: 'Budget Tracker',
      text: 'Realtime tracking and optimization of wedding expenses',
      gradientColors: ["#101014", "#6534C9", "#8247C5", "#FFE8D2"],
      imageAboveTitle: require('../assets/Introduction2.png'),
    },
    {
      key: 's3',
      title: 'Timeline Management',
      text: 'Seamless organization of tasks and deadlines',
      gradientColors: ["#101014", "#6534C9", "#8247C5", "#FFE8D2"],
      imageAboveTitle: require('../assets/Introduction3.png'),
    },
    {
      key: 's4',
      title: 'Ask Anything with AI Assistant',
      text: 'Act as peronal advisor',
      gradientColors: ["#101014", "#6534C9", "#8247C5", "#FFE8D2"],
      imageAboveTitle: require('../assets/Introduction4.png'),
    },
    {
      key: 's5',
      title: 'Vendor Matching',
      text: 'AI Assistant vendor suggestion based on couples requirement',
      gradientColors: ["#101014", "#6534C9", "#8247C5", "#FFE8D2"],
      imageAboveTitle: require('../assets/Introduction5.png'),
    },
  ];

 const RenderNextButton = () => {
  return (
    <TouchableOpacity style={styles.sliderButtonContainer}>
      <View style={styles.sliderButton} />
    </TouchableOpacity>
  );
};

  const onDone = () => {
    console.log("test")
    setShowIntro(true);
  };

  if (showIntro) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => (
          <LinearGradient
              colors={item.gradientColors}
              style={styles.slideContainer}
            >
          <View style={styles.introSlide}>
            <Image source={item.imageAboveTitle} style={styles.smallImage} />
            <View style={styles.introContent}>
              <Text style={styles.introTitle}>{item.title}</Text>
              <Text style={styles.introText}>{item.text}</Text>
            </View>
          </View>
          </LinearGradient>
        )}
        renderNextButton={RenderNextButton}
        onDone={() => navigation.navigate("LogIn")}
      />
      
    );
  }

  return (
    <View style={styles.splashContainer}>
      <Image source={require('../assets/Wedding.png')} style={styles.backgroundImage} />
      <View style={styles.introContent}>
        <Text style={styles.splashTitle}>Kawwin.Ai</Text>
        <Text style={styles.introText}>Empowering Couples to Plan Their Dream Weddings with AI</Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={onDone}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  introContent: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 0.5,
  },
  splashTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonContainer: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  introSlide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  introTitle: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
  },
  introText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallImage: {
    width: 370,
    height: 290,
  },
});

export default Introduction;