import React from "react"
import TabMainScreen from "../components/TabMainScreen"
import AsyncStorage from "@react-native-community/async-storage";

export default function SettingsTab(props) {
    const icons = [
        {
            name: "ios-lock",
            title: "Change password",
            route: "",
            isLast: true
        },
        {
            name: "ios-log-out",
            title: "Log out",
            route: "SignIn",
            isLast: true
        }
    ]

    handlePressToSignIn = async () => {
        const { navigation } = props;
        await AsyncStorage.removeItem("user");
        await navigation.navigate("SignIn");
    }

    return(
        <TabMainScreen title="Settings" icons={icons} func={handlePressToSignIn}/>
    )
}