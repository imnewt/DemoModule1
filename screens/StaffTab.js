import React from "react"

import TabMainScreen from "../components/TabMainScreen"

export default function StaffTab(props) {
    const icons = [
        {
            name: "ios-person-add",
            title: "New",
            route: "SignUp"
        },
        {
            name: "ios-build",
            title: "Edit",
            route: ""
        },
        {
            name: "ios-trash",
            title: "Delete",
            route: "",
            isLast: true
        }
    ]

    handlePressToSignUp = () => {
        const { navigation } = props;
        navigation.navigate("SignUp");
    }

    return(
        <TabMainScreen title="Staff manage" icons={icons} func={handlePressToSignUp}/>
    )
}