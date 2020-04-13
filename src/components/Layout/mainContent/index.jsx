import React, { Component } from 'react'

import Rate from './Rate'
import Rates from './Rates'
import Contact from './contact'
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
                    this.props.menu == 2 ?
                        <Rates />
                        :
                        <Contact />
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({ menu: state.menu })

export default connect(mapStateToProps)(Index)