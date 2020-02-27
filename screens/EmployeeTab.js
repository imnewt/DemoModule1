import React from "react"

import TabMainScreen from "../components/TabMainScreen"

export default function EmployeeTab(props) {
    const icons = [
        {
            name: "ios-person-add",
            title: "New",
            route: "SignUp",
            isLast: true
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
        <TabMainScreen title="Employee manage" icons={icons} func={handlePressToSignUp}/>
    )
}