// AppNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LocationEvent from "./LocationEvent";
import Status from "./StatusScreen";
import SignUpScreen from "./SignUpScreen";
import GenderScreen from "./GenderScreen";
import InterestSelectionScreen from "./InterestSelectionScreen";
import TermsConditionScreen from "./TermsConditionScreen";
import LogInScreen from "./LogInScreen";
import BudgetScreen from "./BudgetScreen";
import EventDate from "./EventDate";
import EventTime from "./EventTime";
import Introduction from "./Introduction";
import TodoList from "./TodoList";
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Introduction">
      <Stack.Screen name="TodoList" component={TodoList} options={{headerShown: false}}/>
      <Stack.Screen name="Introduction" component={Introduction} options={{headerShown: false}}/> 
      <Stack.Screen name="EventTime" component={EventTime} options={{headerShown: false}}/> 
      <Stack.Screen name="EventDate" component={EventDate} options={{headerShown: false}}/>
      <Stack.Screen name="Budget" component={BudgetScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Location" component={LocationEvent} options={{headerShown: false}}/>
      <Stack.Screen name="Status" component={Status}    options={{ headerShown: false }}/>
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Gender" component={GenderScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Interest" component={InterestSelectionScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Terms" component={TermsConditionScreen} options={{headerShown: false}}/>
      <Stack.Screen name="LogIn" component={LogInScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default AppNavigator;
