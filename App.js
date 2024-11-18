import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

// Import màn hình
import SignInScreen from './SignInScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import SignUpScreen from './SignUpScreen';
import Dashboard from './Dashboard';
import HealthDashboard from './HealthDashboard';
import StepDetailsScreen from './StepDetailsScreen';
import SleepTrackerScreen from './SleepTrackerScreen ';
import CycleTrackerScreen from './CycleTrackerScreen';
import NutritionTracker from './NutritionTracker';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen 
          name="SignIn" 
          component={SignInScreen} 
        />
        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPasswordScreen} 
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen} 
        />
         <Stack.Screen 
          name="Dashboard" 
          component={Dashboard} 
         
        />
        <Stack.Screen 
          name="HealthDashboard" 
          component={HealthDashboard} 
        />
        <Stack.Screen name="StepDetailsScreen" 
        component={StepDetailsScreen} />

        <Stack.Screen name="SleepTrackerScreen" 
        component={SleepTrackerScreen} />
         <Stack.Screen name="CycleTrackerScreen" 
        component={CycleTrackerScreen} />
          <Stack.Screen name="NutritionTracker" 
        component={NutritionTracker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};