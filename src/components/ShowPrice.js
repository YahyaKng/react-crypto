import React, { Component } from 'react'

export default class ShowPrice extends Component {
    render() {
        {console.log(this.props.price)}
        return (
            <div className="jumbotron">
                <h1 className="display-4">{this.props.cryptocurrency}</h1>
                <p className="lead">USD: {this.props.price.USD}</p>
            </div>
        )
    }
}
