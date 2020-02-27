import React from "react"
import { ImageBackground } from "react-native";
import bg from "../images/linear.png"

export default function BackgroundImage(props) {
    return <ImageBackground source={{uri: 'https://wallpaperaccess.com/full/862208.jpg'}} style={{width: '100%', height: '100%'}}>
        {props.children}
    </ImageBackground>
}