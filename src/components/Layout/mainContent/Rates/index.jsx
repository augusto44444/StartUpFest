import React, { Component } from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import './style.css'
import { Card, CardGroup, Button, Form, Badge, Spinner, Row, Col, Accordion } from 'react-bootstrap'

import ReactStars from 'react-rating-stars-component'

import { getRates } from '../../../../Models/StartupRating'

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startups: [],
            message: '',
            filter: '',
            Rates: []
        }
    }



    componentDidUpdate(prev) {
        if (prev.startups != this.props.startups) {
            if (this.props.startups.allStartups) {
                getRates().then(res => {
                    this.props.startups.allStartups.map(item => {
                        const field = item.name.replace(/[^a-zA-Z0-9]+/g, '');
                        const array = Object.values(res[field])
                        // console.log(array)
                        let proposta = 0;
                        let pitch = 0;
                        let desenv = 0;
                        const comments = []
                        array.map(rate => {
                            proposta += rate.proposta;
                            pitch += rate.pitch;
                            desenv += rate.desenv;
                            comments.push(rate.comment)
                        })
                        const tam = array.length;
                        proposta = proposta / tam;
                        pitch = pitch / tam;
                        desenv = desenv / tam;
                        let media = ((proposta + desenv + pitch) / 3)

                        const obj = {
                            startup: item,
                            StartupName: array[0].StartupName,
                            rate: media,
                            proposta,
                            pitch,
                            desenv,
                            qtdRates: tam,
                            comments: comments,
                        }
                        const Rates = [...this.state.Rates, obj]
                        this.setState({ Rates })
                    })
                    console.log(this.state)
                }).catch(err => {
                    console.log('err')
                    console.log(err)
                })
            }
        }
    }




    renderStartup() {
        const { Rates } = this.state;
        return (
            <div className='cardRowDiv'>
                {
                    Rates.map((item, i) => {
                        console.log(item)
                        return (
                            <Accordion >
                                <Card
                                    key={i}
                                    text='dark'
                                    bg='light'
                                    border='dark'
                                >
                                    <div classname='Cardheader'>
                                        <Card.Body>
                                            <div className='ImageAndTitle'>
                                                <Card.Img src={item.startup.imageUrl} />
                                                <Card.Title>{item.startup.name}</Card.Title>
                                            </div>
                                            <div className='rightDiv'>
                                                <div>
                                                    <ReactStars
                                                        size={20}
                                                        value={parseInt(item.rate) / 2}
                                                        edit={false}
                                                        emptyIcon={<i className="far fa-star" />}
                                                        halfIcon={<i className="fa fa-star-half-alt" style={{ color: '#5a17f8' }} />}
                                                        filledIcon={<i className="fa fa-star" style={{ color: '#5a17f8' }} />}
                                                        color='#5a17f8'
                                                    />
                                                    <p style={{fontSize: '0.6em'}}>Média de {item.qtdRates} avaliações</p>
                                                </div>
                                                <Badge variant='warning'>{parseInt(item.rate) / 2}</Badge>
                                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                    <Badge variant='light'><i className='fa fa-angle-down' style={{ color: '#5a17f8' }} ></i></Badge>
                                                </Accordion.Toggle>
                                            </div>
                                        </Card.Body>
                                    </div>
                                    <Accordion.Collapse className='collapse' eventKey="0">
                                        <>
                                            <div className='status'>
                                                <Card.Title>Proposta</Card.Title>
                                                <ReactStars
                                                    size={20}
                                                    value={parseInt(item.proposta) / 2}
                                                    edit={false}
                                                    emptyIcon={<i className="far fa-star" />}
                                                    halfIcon={<i className="fa fa-star-half-alt" style={{ color: '#5a17f8' }} />}
                                                    filledIcon={<i className="fa fa-star" style={{ color: '#5a17f8' }} />}
                                                    color='#5a17f8'
                                                />
                                                <Badge variant='warning'>{parseInt(item.proposta) / 2}</Badge>
                                            </div>
                                            <div className='status'>
                                                <Card.Title>Apresentação</Card.Title>
                                                <ReactStars
                                                    size={20}
                                                    value={parseInt(item.pitch) / 2}
                                                    edit={false}
                                                    emptyIcon={<i className="far fa-star" />}
                                                    halfIcon={<i className="fa fa-star-half-alt" style={{ color: '#5a17f8' }} />}
                                                    filledIcon={<i className="fa fa-star" style={{ color: '#5a17f8' }} />}
                                                    color='#5a17f8'
                                                />
                                                <Badge variant='warning'>{parseInt(item.pitch) / 2}</Badge>
                                            </div>
                                            <div className='status'>
                                                <Card.Title>Desenvolvimento</Card.Title>
                                                <ReactStars
                                                    size={20}
                                                    value={parseInt(item.desenv) / 2}
                                                    edit={false}
                                                    emptyIcon={<i className="far fa-star" />}
                                                    halfIcon={<i className="fa fa-star-half-alt" style={{ color: '#5a17f8' }} />}
                                                    filledIcon={<i className="fa fa-star" style={{ color: '#5a17f8' }} />}
                                                    color='#5a17f8'
                                                />
                                                <Badge variant='warning'>{parseInt(item.desenv) / 2}</Badge>
                                            </div>
                                            <div className='status'>
                                                <Button variant='info'>Checar comentários</Button>
                                            </div>
                                        </>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        )
                    })
                }
            </div >
        )
    }



    filter() {
        if (this.state.filter) {
            const array = this.state.startups.find(item => {
                if (item.name.toLowerCase().indexOf(this.state.filter.toLocaleLowerCase()) != -1) {
                    return item
                }
            })

            // console.log([array])
            if (array && [array] && [array].length > 0) {
                // console.log("foi")
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
                <div>
                    {this.state.Rates.length > 0 ? this.renderStartup() : <Spinner animation="border" className='loading' />}
                </div>
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