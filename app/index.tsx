import { StyleSheet, Text, View } from "react-native";
import { Redirect } from "expo-router";

export default function Page() {
    return <Redirect href={'/profileSetup/selectInterest'} />;

}

const styles = StyleSheet.create({
  
});
