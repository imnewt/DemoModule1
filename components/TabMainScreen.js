import React from "react"
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"

const db = require("../db.json")

export default function TabMainScreen(props) {
    const { title, icons, func, user } = props;
    console.log(user)
    countAll = (tasks, status) => {
        return tasks.filter(item => item.status === status).length
    }

    count = (tasks, status, user) => {
        return tasks.filter(item => item.status === status && item.handle === user.name).length
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            { 
                title === "Your tasks"
                ?   user.isAdmin 
                    ?   <Text style={[styles.num, {fontStyle: "italic"}]}>38% of your tasks has been done...</Text>
                    :   <Text style={[styles.num, {fontStyle: "italic"}]}>You have 2 undo tasks left...</Text>
                : null
            }
            <FlatList 
                style={styles.iconBlock}
                data={icons}
                renderItem={({ item, index }) => 
                    <View style={[styles.icon, index % 2 != 0 && styles.noBorderRight, item.isLast && styles.noBorderBottom]}>
                        <TouchableOpacity style={{ alignItems: "center" }} onPress={() => func(db.tasks, item.title.toLowerCase(), item.route, user)}>
                            <Ionicons name={item.name} size={40} color="#094074" />
                            <Text style={styles.iconTitle}>{item.title}</Text>
                            { 
                                ["Undone","Doing","Done"].includes(item.title) 
                                ?   user.isAdmin 
                                    ?   <Text style={styles.num}>({countAll(db.tasks, item.title.toLowerCase())})</Text>
                                    :   <Text style={styles.num}>({count(db.tasks, item.title.toLowerCase(), user)})</Text>
                                : null
                            }
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
        paddingTop: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        color: "#3A3042",
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
    },
    num: {
        marginTop: 5,
        fontSize: 16,
        color: '#999'
    }
})