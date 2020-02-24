import React from "react"
import { ImageBackground } from "react-native";
import bg from "../images/gradient-bg.png"

export default function BackgroundImage(props) {
    return <ImageBackground source={bg} style={{width: '100%', height: '100%'}}>
        {props.children}
    </ImageBackground>
}