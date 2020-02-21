import React, { Component } from "react";

import HomeQL from "./HomeQL"
import HomeNV from "./HomeNV"

export default class Home extends Component {
    render() {
        const { user, tasks } = this.props.route.params;
        return (
            user.isAdmin ? <HomeQL navigation={this.props.navigation} data={tasks}/> : <HomeNV data={tasks}/>
        )
    }
}