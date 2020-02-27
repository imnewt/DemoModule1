import React from "react"

import TabMainScreen from "../components/TabMainScreen"

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

    handlePressToSignIn = () => {
        const { navigation } = props;
        navigation.navigate("SignIn");
    }

    return(
        <TabMainScreen title="Settings" icons={icons} func={handlePressToSignIn}/>
    )
}