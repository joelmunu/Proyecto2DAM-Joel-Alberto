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

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={{ backgroundColor: "#EDEBEB", height: "100%" }}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarStyle: {backgroundColor: '#D4D4D4', borderRadius: 20, margin: 20, },
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
        })}>
          <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false, tabBarLabel: () => { return null } }} />
          <Tab.Screen name="Rutines" component={RutinesScreen} options={{ headerShown: false, tabBarLabel: () => { return null } }} />
          <Tab.Screen name="Recipes" component={RecipesScreen} options={{ headerShown: false, tabBarLabel: () => { return null } }} />
          <Tab.Screen name="Plans" component={PlansScreen} options={{ headerShown: false, tabBarLabel: () => { return null } }} />
          <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false, tabBarLabel: () => { return null } }} />
        </Tab.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer >
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
