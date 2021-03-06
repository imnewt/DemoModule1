import React from "react"
import { ImageBackground, Text } from "react-native"
import HI from "../images/test.jpg"
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
            <Text style={{fontSize: 20, marginTop: 50, marginLeft: 18}}>Hi <Text style={{fontWeight: "700", fontStyle: "italic"}}>John Smith</Text>!</Text>
        </ImageBackground>
    )
}