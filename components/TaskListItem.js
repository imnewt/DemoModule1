import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class TaskListItem extends Component {
    render() {
        const { info, onPress } = this.props;
        return (
                <TouchableOpacity activeOpacity={.7} style={styles.container} onPress={onPress}>
                    <Text style={styles.name}>{info.name}</Text>
                </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#5d5dbe',
        borderRadius: 10,
        margin: 20,
        color: '#FFF',
    },
    name: {
        padding: 30,
        fontSize: 20,
        fontWeight: "700",
        color: "#FFF",
        textTransform: "uppercase",
        textAlign: 'center'
    }
})