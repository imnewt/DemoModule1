import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Invest extends Component{
    render() {
      return(
        <View style={styles.container}>
          <Text>Investment Management</Text>
        </View>
      )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})