import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class TaskListItem extends Component {
    render() {
        const { info } = this.props;
        return (
            <TouchableOpacity activeOpacity={.7} style={styles.container}>
                <Text style={styles.name}>{info.name}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        paddingHorizontal: 32,
        paddingVertical: 32,
        borderRadius: 5,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#DDD'
    },
    name: {
        fontSize: 18,
        fontWeight: '700'
    }
})