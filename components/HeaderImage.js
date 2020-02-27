import React from "react"
import { Image } from "react-native"

export default function HeaderImage() {
    return(
        <Image 
        resizeMode='stretch' 
        style={{width: "100%", height: 150}} 
        source={{uri: 'https://cosmos-production-assets.s3.amazonaws.com/file/spina/photo/11627/image_170824_BlackHoles_Thumb.jpg'}} 
        />
    )
}