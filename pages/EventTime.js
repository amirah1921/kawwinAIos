import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Background from "../component/Background";
import CustomButton from '../component/CustomButton';
import { useNavigation } from '@react-navigation/native';

const EventTime = () => {
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const navigation = useNavigation();

  const handleChange = (event, time) => {
    if (event.type === 'set') {
      setSelectedTime(time || selectedTime);
    }
    setShowPicker(false);
  };

  return (
    <Background>
      <View style={styles.container}>
        <Image source={require('../assets/date.png')} style={styles.image} />
        <Text style={styles.text}>When is the event?</Text>
        <CustomText onPress={() => setShowPicker(true)} selectedTime={selectedTime} />
        {showPicker && (
          <DateTimePicker
            value={selectedTime}
            mode="time"  // Set the mode to 'time' to select time
            is24Hour={false}
            display="default"
            onChange={handleChange}
          />
        )}
        <CustomButton
            title={"next"}
            onPress={() => navigation.navigate("TodoList")}/>
      </View>
    </Background>
  );
};

const CustomText = ({ onPress, selectedTime }) => (
  <Text style={styles.customText} onPress={onPress}>
    {selectedTime.toLocaleTimeString()}
  </Text>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 360,
    height: 290, 
    margin: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    margin: 1,
    color: '#ffffff',
  },
  customText: {
    textAlign: 'center',
    fontSize: 24,
    margin: 1,
    color: '#ffffff',
  },
});

export default EventTime;