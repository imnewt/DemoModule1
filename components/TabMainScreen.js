import React from "react"
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"

const db = require("../db.json")

export default function TabMainScreen(props) {
    const { title, icons, func, user } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                style={styles.iconBlock}
                data={icons}
                renderItem={({ item, index }) => 
                    <View style={[styles.icon, index % 2 != 0 && styles.noBorderRight, item.isLast && styles.noBorderBottom]}>
                        <TouchableOpacity style={{ alignItems: "center" }} onPress={() => func(db.tasks, item.title.toLowerCase(), item.route, user)}>
                            <Ionicons name={item.name} size={40} color="#094074" />
                            <Text style={styles.iconTitle}>{item.title}</Text>
                        </TouchableOpacity>
                    </View>
                }
                keyExtractor={item => item.name}
                numColumns={2}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        color: "#000",
        textTransform: "uppercase"
    },
    iconBlock: {
        marginTop: 20
    },
    icon: {
        paddingVertical: 40,
        width: 180,
        borderColor: "#3C6997",
        borderRightWidth: 1,
        borderBottomWidth: 1
    },
    noBorderRight: {
        borderRightWidth: 0,
    },
    noBorderBottom: {
        borderBottomWidth: 0
    },
    iconTitle: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: "700",
        color: "#094074"
    }
})