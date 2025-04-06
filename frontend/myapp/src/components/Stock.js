import React, { Component } from 'react';

class Stock extends Component {

    constructor(props){
        
        constructor(props) {
            super(props)
            this.state = {
                data:{}
            }
        }
    }
    componentDidMount() {
        this.setState({
            data: {
                price: 5,
                date: 'asdf',
                time: 'dddd'
            }
        })
    }

    render() {
        return (
            <tr>
                <td>{this.props.ticker}</td>
                <td>{this.state.data.price}</td>
                <td>{this.props.ticker}</td>
            </tr>)
    }
}