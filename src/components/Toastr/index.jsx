import React, { Component } from 'react'
import { Toast, Alert } from 'react-bootstrap'

import './style.css'

export default class Toastr extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    componentDidUpdate(prev) {
        if (prev.message != this.props.message) {
            if (this.props.message) {
                this.setState({ show: true })
            } else {
                this.setState({ show: false })
            }
        }
    }

    render() {
        const { show } = this.state

        const message = this.props.message ? this.props.message : null

        return (
            <Toast className='toastr' onClose={() => this.setState({ show: false })} show={show} delay={3000} autohide style={{ display: this.state.show ? 'block' : 'none' }}>
                <Toast.Header>
                    <i className='fa fa-info-circle' style={{ color: '#5a17f8' }}></i>
                    <strong className="mr-auto">Aviso</strong>

                </Toast.Header>
                <Toast.Body>{message}</Toast.Body>
            </Toast>
        )
    }
}

