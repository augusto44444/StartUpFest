import React, { Component } from 'react'

import Rate from './Rate'
import Rates from './Rates'

import { connect } from 'react-redux'

class Index extends Component {
    render() {
        console.log(this.props.menu)
        return (
            <div>
                {this.props.menu == 1
                    ?
                    <Rate />
                    :
                    <Rates />
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({menu: state.menu})

export default connect(mapStateToProps)(Index)