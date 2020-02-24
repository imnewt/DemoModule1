import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AirbnbRating, Slider  } from 'react-native-elements';
const hihi=100
export default class TaskDetail extends Component {

    state = {
        value: 0
    }

    componentDidMount() {
        const { info } = this.props;
        this.setState({value: info.percent})
    }

    render() {
        const { info } = this.props;
        return (
            // <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
            //     <Slider
            //         value={this.state.value}
            //         onValueChange={value => this.setState({ value })}
            //     />
            // </View>
            <View style={styles.container}>
                <Text style={styles.taskName}>{info.name}</Text>
                <Text style={styles.peopleDoing}>Người thực hiện: {info.for ? info.for : 'Chưa có'}</Text>
                <Text style={styles.taskDetail} numberOfLines={5} ellipsizeMode='tail'>{info.detail}</Text>
                {/* <Text style={styles.text}>{info.percent}</Text> */}
                {/* <>
                {
                    info.status === 'dahoanthanh' || info.status === 'dagiao' ?
                    <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
                        <Slider
                        maximumValue={hihi}
                            value={this.state.value}
                            onValueChange={value => this.setState({ value })}
                        />
                        <Text>Value: {this.state.value}</Text>
                    </View> : null
                }
                </> */}
                <>
                    {
                        info.status === 'dahoanthanh' ? 
                        <View>
                            <Text>Đánh giá sự hài lòng về nhân viên</Text>
                            <AirbnbRating
                                count={5}
                                defaultRating={0}
                                showRating={false}
                                size={20}
                            /> 
                        </View> : null
                    }
                </>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 16,
        backgroundColor: '#FFF',
        borderRadius:10,
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderColor: 'grey'
    },
    taskName: {
        alignSelf: 'center',
        marginBottom: 15,
        fontSize: 30,
        fontWeight: 'bold'
    },
    peopleDoing: {
        alignSelf: 'center',
        marginBottom: 15,
        fontSize: 23,
        fontWeight: 'bold'
    },
    taskDetail: {
        marginBottom: 15,
        fontSize: 17,
        textAlign: 'center'
    }

})