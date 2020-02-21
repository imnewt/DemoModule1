import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AirbnbRating, Slider  } from 'react-native-elements';
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
            <View style={styles.container}>
                <Text style={styles.text}>{info.name}</Text>
                <Text style={[styles.text, { fontWeight: '700'}]}>{info.for ? info.for : 'Chưa có người thực hiện công việc này'}</Text>
                <Text style={styles.text} numberOfLines={5} ellipsizeMode='tail'>{info.detail}</Text>
                <Text style={styles.text}>{info.percent}</Text>
                <>
                {
                    info.status === 'dahoanthanh' || info.status === 'dagiao' ?
                    <View>
                        <Slider
                            value={this.state.value}
                            onValueChange={value => this.setState({ value })}
                        />
                    </View> : null
                }
                </>

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
        alignItems: 'center',
        paddingHorizontal: 32,
        paddingVertical: 16,
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderStyle: 'solid',
    },
    text: {
        marginBottom: 15,
        fontSize: 18
    }
})