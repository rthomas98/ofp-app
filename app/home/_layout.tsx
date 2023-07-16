import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from ".";
import Ionicons from '@expo/vector-icons/Ionicons';
import donationList from "./donationList";
import myFundraising from "./myFundraising";
import inbox from "./inbox";
import profile from "./profile";
import { Button, Image } from 'react-native';

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
            tabBarStyle: {
                backgroundColor: '#fff',
                borderTopWidth: 0,
                elevation: 0,
                shadowOpacity: 0,
                height: 60,
                paddingBottom: 10,
            }
          })}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                headerTintColor: '#FF1843',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20,
                },
                headerStyle: {
                    backgroundColor: '#fff',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                },
                headerLeft: () => (
                    <Image 
                        source={require('../../assets/ofp-icon.png')} 
                        style={{ width: 40, height: 40, marginLeft: 10, marginBottom: 10 }}
                    />
                  ),
                headerRight: () => (
                    <Ionicons 
                    name="notifications-outline" 
                    size={24} 
                    color="#FF1843" 
                    style={{ marginRight: 10, marginBottom: 10, }} />
                ),
            }} />
            <Tab.Screen name="Donations" component={donationList} options={{
                headerTintColor: '#FF1843',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20,
                },
                headerStyle: {
                    backgroundColor: '#fff',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                },
                headerLeft: () => (
                    <Image 
                        source={require('../../assets/ofp-icon.png')} 
                        style={{ width: 40, height: 40, marginLeft: 10, marginBottom: 10 }}
                    />
                  ),
                headerRight: () => (
                    <Ionicons 
                    name="notifications-outline" 
                    size={24} 
                    color="#FF1843" 
                    style={{ marginRight: 10, marginBottom: 10, }} />
                ),
            }} />
            <Tab.Screen name="Fundraising" component={myFundraising} options={{
                headerTintColor: '#FF1843',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20,
                },
                headerStyle: {
                    backgroundColor: '#fff',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                },
                headerLeft: () => (
                    <Image 
                        source={require('../../assets/ofp-icon.png')} 
                        style={{ width: 40, height: 40, marginLeft: 10, marginBottom: 10 }}
                    />
                  ),
                headerRight: () => (
                    <Ionicons 
                    name="notifications-outline" 
                    size={24} 
                    color="#FF1843" 
                    style={{ marginRight: 10, marginBottom: 10, }} />
                ),
            }} />
            <Tab.Screen name="Inbox" component={inbox} options={{
                headerTintColor: '#FF1843',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20,
                },
                headerStyle: {
                    backgroundColor: '#fff',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                },
                headerLeft: () => (
                    <Image 
                        source={require('../../assets/ofp-icon.png')} 
                        style={{ width: 40, height: 40, marginLeft: 10, marginBottom: 10 }}
                    />
                  ),
                headerRight: () => (
                    <Ionicons 
                    name="notifications-outline" 
                    size={24} 
                    color="#FF1843" 
                    style={{ marginRight: 10, marginBottom: 10, }} />
                ),
            }} />
            <Tab.Screen name="Profile" component={profile} options={{
                headerTintColor: '#FF1843',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20,
                },
                headerStyle: {
                    backgroundColor: '#fff',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                },
                headerLeft: () => (
                    <Image 
                        source={require('../../assets/ofp-icon.png')} 
                        style={{ width: 40, height: 40, marginLeft: 10, marginBottom: 10 }}
                    />
                  ),
                headerRight: () => (
                    <Ionicons 
                    name="notifications-outline" 
                    size={24} 
                    color="#FF1843" 
                    style={{ marginRight: 10, marginBottom: 10, }} />
                ),
            }}/>
        </Tab.Navigator>
    );
}