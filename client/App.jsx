import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import ProfileScreen from './components/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import Ionicons from '@expo/vector-icons/Ionicons'
import RutinesScreen from './components/RutinesScreen';
import RecipesScreen from './components/RecipesScreen';
import PlansScreen from './components/PlansScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [firstLogin, setFirstLogin] = useState(true)

  const verifyFirstLogin = async () => {
    try {
      const value = await AsyncStorage.getItem('firstLogin')
      if (value === null || value === 'true') {
        await AsyncStorage.setItem('firstLogin', 'true')
        return true
      }
      return false
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    const verify = async () => {
      const firstLogin = await verifyFirstLogin()
      setFirstLogin(firstLogin)
    }
    verify()
  }, [])

  return (
    <NavigationContainer>
      {firstLogin ? (
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen
            name="Register"
            component={() => <RegisterScreen setFirstLogin={setFirstLogin}/>}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={() => <LoginScreen setFirstLogin={setFirstLogin}/>}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      ) :
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarStyle: { backgroundColor: '#D4D4D4', borderRadius: 20, margin: 20, },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Rutines') {
              iconName = focused ? 'barbell' : 'barbell-outline';
            } else if (route.name === 'Recipes') {
              iconName = focused ? 'nutrition' : 'nutrition-outline';
            } else if (route.name === 'Plans') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FF8000',
          tabBarInactiveTintColor: '#39393B',
        })} initialRouteName='Home'>
          <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false, tabBarLabel: () => { return null } }} />
          <Tab.Screen name="Rutines" component={RutinesScreen} options={{ headerShown: false, tabBarLabel: () => { return null } }} />
          <Tab.Screen name="Recipes" component={RecipesScreen} options={{ headerShown: false, tabBarLabel: () => { return null } }} />
          <Tab.Screen name="Plans" component={PlansScreen} options={{ headerShown: false, tabBarLabel: () => { return null } }} />
          <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false, tabBarLabel: () => { return null } }} />
        </Tab.Navigator>
      }

      < StatusBar style="auto" />
    </NavigationContainer>
  )



  // if (firstLogin)
  //   return (
  //     <NavigationContainer>
  //       <Stack.Navigator  initialRouteName='Welcome'>
  //         <Stack.Screen
  //           name="Register"
  //           component={RegisterScreen}
  //           options={{
  //             headerShown: false,
  //             initialParams: {handleLogin}
  //           }}
  //         />
  //         <Stack.Screen
  //           name="Welcome"
  //           component={WelcomeScreen}
  //           options={{
  //             headerShown: false,
  //           }}
  //         />
  //         <Stack.Screen
  //           name="Login"
  //           component={LoginScreen}
  //           options={{
  //             headerShown: false,
  //           }}
  //         />
  //       </Stack.Navigator>
  //       <StatusBar style="auto" />
  //     </NavigationContainer >
  //   );
  // else
  //   return (
  //     <View style={{ backgroundColor: "#EDEBEB", height: "100%" }}>
  //       <NavigationContainer>
  //         <Tab.Navigator screenOptions={({ route }) => ({
  //           tabBarStyle: { backgroundColor: '#D4D4D4', borderRadius: 20, margin: 20, },
  //           tabBarIcon: ({ focused, color, size }) => {
  //             let iconName;

  //             if (route.name === 'Home') {
  //               iconName = focused
  //                 ? 'home'
  //                 : 'home-outline';
  //             } else if (route.name === 'Rutines') {
  //               iconName = focused ? 'barbell' : 'barbell-outline';
  //             } else if (route.name === 'Recipes') {
  //               iconName = focused ? 'nutrition' : 'nutrition-outline';
  //             } else if (route.name === 'Plans') {
  //               iconName = focused ? 'book' : 'book-outline';
  //             } else if (route.name === 'Profile') {
  //               iconName = focused ? 'person' : 'person-outline';
  //             }
  //             return <Ionicons name={iconName} size={size} color={color} />;
  //           },
  //           tabBarActiveTintColor: '#FF8000',
  //           tabBarInactiveTintColor: '#39393B',
  //         })} initialRouteName='Home'>
  //           <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false, tabBarLabel: () => { return null } }} />
  //           <Tab.Screen name="Rutines" component={RutinesScreen} options={{ headerShown: false, tabBarLabel: () => { return null } }} />
  //           <Tab.Screen name="Recipes" component={RecipesScreen} options={{ headerShown: false, tabBarLabel: () => { return null } }} />
  //           <Tab.Screen name="Plans" component={PlansScreen} options={{ headerShown: false, tabBarLabel: () => { return null } }} />
  //           <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false, tabBarLabel: () => { return null } }} />
  //         </Tab.Navigator>

  //         <StatusBar style="auto" />
  //       </NavigationContainer >
  //     </View>
  //   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
