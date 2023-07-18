import { Stack } from "expo-router";

export default function AuthLayout() {
    return <Stack>
        <Stack.Screen 
            name="index" 
            options={{
                headerShown: false,
            }}     
        />

        <Stack.Screen 
            name="signUp" 
            options={{
                headerShown: false,
            }}   
        />
        <Stack.Screen 
            name="plans" 
            options={{
                headerShown: false,
            }}   
        />
        <Stack.Screen 
            name="forgotPassword" 
            options={{
                headerShown: false,
            }}   
        />

        <Stack.Screen 
            name="resetPassword" 
            options={{
                headerShown: false,
            }}   
        />
    </Stack>
}