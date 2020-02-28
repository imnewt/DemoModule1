import React from "react"
import { Image, View, StyleSheet, ImageBackground } from "react-native"
import HI from "../images/performance-management.png"
import Ionicons from "react-native-vector-icons/Ionicons"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"



export default function HeaderImage() {
    const navigation = useNavigation();
    return(
        <ImageBackground 
            resizeMode='stretch' 
            style={{width: "100%", height: 150}} 
            source={HI} 
        >
            <TouchableOpacity style={{marginTop: 12, marginLeft: 18}} onPress={() => navigation.openDrawer()}>
                <Ionicons name="ios-menu" size={40} color="#000"/>
            </TouchableOpacity>
        </ImageBackground>
    )
}