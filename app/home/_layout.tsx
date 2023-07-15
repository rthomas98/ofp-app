import { Stack } from "expo-router";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from ".";
import { Ionicons, Feather } from '@expo/vector-icons'  // https://icons.expo.fyi/
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
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Donations') {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
              } else if (route.name === 'Fundraising') {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
              } else if (route.name === 'Inbox') {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
              }

  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            tabBarShowLabel: true,
          })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Donations" component={donationList} />
            <Tab.Screen name="Fundraising" component={myFundraising} />
            <Tab.Screen name="Inbox" component={inbox} />
            <Tab.Screen name="Profile" component={profile} />
        </Tab.Navigator>
    );
}