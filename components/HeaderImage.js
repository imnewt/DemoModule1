import React from "react"
import { Image } from "react-native"
import HI from "../images/performance-management.png"

export default function HeaderImage() {
    return(
        <Image 
        resizeMode='stretch' 
        style={{width: "100%", height: 150}} 
        source={HI} 
        />
    )
}