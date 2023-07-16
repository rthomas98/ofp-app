import { Stack } from "expo-router";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from ".";
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import donationList from "./donationList";
import myFundraising from "./myFundraising";
import inbox from "./inbox";
import profile from "./profile";

export default function HomeLayout() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home-sharp'
                  : 'home-outline';
              } else if (route.name === 'Donations') {
                iconName = focused ? 'cash' : 'cash-outline';
              } else if (route.name === 'Fundraising') {
                iconName = focused ? 'bar-chart' : 'bar-chart-outline';
              } else if (route.name === 'Inbox') {
                iconName = focused ? 'mail' : 'mail-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'body' : 'body-outline';
              }

  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#FF1843',
            tabBarInactiveTintColor: '#2C3A4B',
            tabBarShowLabel: true,
          })}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                headerTintColor: '#FF1843',
            }} />
            <Tab.Screen name="Donations" component={donationList} />
            <Tab.Screen name="Fundraising" component={myFundraising} />
            <Tab.Screen name="Inbox" component={inbox} />
            <Tab.Screen name="Profile" component={profile} />
        </Tab.Navigator>
    );
}