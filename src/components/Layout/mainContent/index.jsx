import React, { Component } from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import './style.css'
import { Card, CardGroup, Button, Form, Badge, Spinner, Row, Col } from 'react-bootstrap'

import RatingModal from './ModalRating/'

import Toastr from '../../Toastr'

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startups: [],
            startup: null,
            message: '',
            filter: ''
        }
    }

    componentDidUpdate(prev) {
        if (prev.startups != this.props.startups) {
            if (this.props.startups.allStartups) {
                this.setState({ startups: this.props.startups.allStartups })
            }
        }
    }

    renderStartup() {
        const { startups } = this.state;
        return (
            <Row className='rowMainContent'>
                {
                    startups.map((startup, i) => (
                        <Col key={i} sm='12' md='3' >
                            <Card bg='light' variant='dark' border='secondary' className='card' style={{ width: '18rem', margin: '10px 5px' }}>
                                <Card.Img variant="top" src={startup.imageUrl} style={{ maxHeight: 250 }} />
                                <Card.Body>
                                    <Card.Title co>{startup.name}</Card.Title>
                                    <Card.Text>
                                        <Badge variant="primary" >{startup.Segment.name}</Badge>
                                    </Card.Text>
                                    <Button variant='dark' className='button-down' onClick={() => this.setState({ startup: startup })}>Avaliar</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        )
    }

    filter() {
        if (this.state.filter) {
            const array = this.state.startups.find(item => {
                if(item.name.toLowerCase().indexOf(this.state.filter.toLocaleLowerCase()) != -1){
                    return item
                } 
            })

            console.log([array])
            if (array && [array] && [array].length > 0) {
                console.log("foi")
                this.setState({ startups: [array], filter: '' })
            } else {
                this.setState({ filter: '' })
            }
        } else {
            this.setState({ startups: this.props.startups.allStartups, filter: '' })
        }
    }

    render() {
        return (
            <div className='MainContent'>
                <Row>
                    <Col md='10' sm='10'>
                        <Form.Control type='text' onKeyPress={e => {
                            if (e.key == 'Enter') {
                                this.filter()
                            }
                        }} value={this.state.filter} onChange={e => this.setState({ filter: e.target.value })} placeholder='Pesquisar por Startup' />
                    </Col>
                    <Col md='2' sm='2'>
                        <Button type='submit' className='button' variant='info' onClick={() => {
                            this.filter()
                        }}>{this.props.startups && this.props.startups.allStartups ? this.state.startups.length == this.props.startups.allStartups.length ? 'Pesquisar' : 'Voltar' : 'Pesquisar'}</Button>
                    </Col>
                </Row>
                <hr />
                <Row>
                    {this.props.startups.loading ? <Spinner animation="border" className='loading' /> : this.renderStartup()}
                    <RatingModal startup={this.state.startup} funcao={(field, value) => this.setState({ [field]: value })} />
                    <Toastr message={this.state.message} />
                </Row>
            </div>
        );
    }
}

const StartupQuery = gql`
query {
    allStartups{
      name,
      imageUrl,
      description,
      Segment{
        id,
        name
      }
    }
  }
`;



export default graphql(StartupQuery, { name: 'startups' })(MainContent);