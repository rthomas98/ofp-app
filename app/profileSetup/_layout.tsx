import { Stack, Link } from "expo-router";
import { Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import React from "react";

export default function ProfileSetupLayout() {
    return (
        <Stack>
            <Stack.Screen 
                name="index" 
                options={{
                    headerShown: true,
                    title: 'Fill Your Profile',
                    headerLeft: (props) => (
                        <Link href={'/auth/plans'}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name="arrow-back-outline" size={24} color="#FF1843" />
                            </View>
                        </Link>
                    ),
                }} 
            />
            <Stack.Screen 
                name="selectInterest" 
                options={{
                    headerShown: true,
                    title: 'Select Your Interest',
                    headerLeft: (props) => (
                        <Link href={'/profileSetup/selectInterest'}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name="arrow-back-outline" size={24} color="#FF1843" />
                            </View>
                        </Link>
                    ),
                }} 
            />
        </Stack>
    );
}
