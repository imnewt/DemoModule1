import React from "react"
import { ImageBackground } from "react-native";
import bg from "../images/gradient-bg.png"

export default function BackgroundImage(props) {
    return <ImageBackground source={{uri: 'https://phonewallpaper.net/wp-content/uploads/2018/11/Gradient-Background-Wallpaper-469x832.jpg'}} style={{width: '100%', height: '100%'}}>
        {props.children}
    </ImageBackground>
}