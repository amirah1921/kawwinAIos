import Status from "./pages/StatusScreen";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './pages/AppNavigator'; // Import your navigator

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;