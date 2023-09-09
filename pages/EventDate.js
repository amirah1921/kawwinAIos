// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import Background from "../component/Background";
import { useNavigation } from '@react-navigation/native';

//import CalendarPicker from the package we installed
import CalendarPicker from 'react-native-calendar-picker';
import CustomButton from '../component/CustomButton';

const EventDate = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const logoImage = require('../assets/date.png');
  const navigation = useNavigation();


  const onDateChange = (date, type) => {
    //function to handle the date change
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };

  return (
    <Background>
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={logoImage} style={styles.logo} />
        </View>
        <Text style={styles.titleStyle}>
          When is the Event ?
        </Text>
        <CalendarPicker 
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={new Date()}
          maxDate={new Date(2050, 6, 3)}
          weekdays={
            [
              'Mon', 
              'Tue', 
              'Wed', 
              'Thur', 
              'Fri', 
              'Sat', 
              'Sun'
            ]}
          months={[
            'January',
            'Febraury',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ]}
          previousTitle="<"
          nextTitle=">"
          todayBackgroundColor="#e6ffe6"
          selectedDayColor="#66ff33"
          selectedDayTextColor="#ffffff"
          scaleFactor={375}
          textStyle={{
            fontSize: 20,
            fontFamily: 'Arial',
            color: 'black',
          }}
          onDateChange={onDateChange}
        />
      </View>
      <CustomButton
      title={"next"}
      onPress={() => navigation.navigate("EventTime")}/>
    </SafeAreaView>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 30,
    padding: 16,
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 30,
    margin: 1,
    color: '#ffffff',
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
 },
 logo: {
   width: 370,
   height: 290,
 },
});
export default EventDate;