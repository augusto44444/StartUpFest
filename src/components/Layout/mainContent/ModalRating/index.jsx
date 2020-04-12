import React, { Component } from 'react'
import { Modal, Button, Image, Row, Col, Badge, Tooltip, OverlayTrigger, Form, Toast } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'

import { SaveRate } from '../../../../Models/StartupRating'

import './style.css'

export default class ratingModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            proposta: 0,
            pitch: 0,
            desenv: 0,
            comment: ''
        }
    }


    RenderRatingText(value) {
        switch (value) {
            case 0.5:
                return 'Não gostei nem um pouco'
                break

            case 1:
                return 'Não gostei'
                break

            case 1.5:
                return 'Precisa melhorar'
                break

            case 2:
                return 'Precisa melhorar'
                break

            case 2.5:
                return 'Indiferente'
                break

            case 3:
                return 'Legal'
                break

            case 3.5:
                return 'Bem legal'
                break

            case 4:
                return 'Bom'
                break

            case 4.5:
                return 'Muito bom'
                break

            case 5:
                return 'Excelente'
                break
            default:
                return 'Selecione um valor'
                break
        }
    }


    renderTooltip(props, explicacao) {
        return (
            <Tooltip id="button-tooltip tooltip-left" {...props}>
                {explicacao}
            </Tooltip>
        );
    }

    render() {

        const { startup } = this.props

        const getData = (field) => this.props.startup && this.props.startup[field] ? this.props.startup[field] : null

        const getSegment = field => this.props.startup && this.props.startup.Segment && this.props.startup.Segment[field] ? this.props.startup.Segment[field] : null

        return (
            <Modal size="lg" aria-labelledby="contained-modal-title-vcenter"
                centered show={this.props.startup ? true : false} onHide={() => {
                    this.setState({ proposta: 0, pitch: 0, desenv: 0 })
                    this.props.funcao('startup', null)
                }}>
                <Modal.Header closeButton>
                    <Modal.Title>{getData('name')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image className='ModalImage' src={getData('imageUrl')} thumbnail fluid />

                    <blockquote>
                        <p>{getData('description')}</p>
                        <p><b>Ramo: {getSegment('name')}</b></p>
                    </blockquote>

                    <hr />

                    <Row>
                        <Col className='ColunaDuvida' sm='12' md='4'>
                            <OverlayTrigger

                                placement="left"
                                delay={{ show: 250, hide: 400 }}
                                overlay={e => this.renderTooltip(e, 'De uma nota para o que achou da proposta dessa startup')}
                            >
                                <Badge className='badgeDuvida' variant='info'><i className='fa fa-question' style={{ color: '#fff' }}></i></Badge>
                            </OverlayTrigger>
                            <h3>Proposta</h3>
                        </Col>
                        <Col sm='12' md='8'>
                            <ReactStars
                                size={46}
                                value={this.state.proposta}
                                onChange={newRating => {
                                    this.setState({ proposta: newRating })
                                }}
                                emptyIcon={<i className="far fa-star" />}
                                halfIcon={<i className="fa fa-star-half-alt" style={{ color: '#5a17f8' }} />}
                                filledIcon={<i className="fa fa-star" style={{ color: '#5a17f8' }} />}
                                color='#5a17f8'
                            />
                            <p>{this.RenderRatingText(this.state.proposta)}</p>
                            
                        </Col>
                    </Row>

                    <hr />

                    <Row>
                        <Col className='ColunaDuvida' sm='12' md='4'>
                            <OverlayTrigger

                                placement="left"
                                delay={{ show: 250, hide: 400 }}
                                overlay={e => this.renderTooltip(e, 'Dê uma nota para o que você achou da apresentação dessa startup')}
                            >
                                <Badge className='badgeDuvida' variant='info'><i className='fa fa-question' style={{ color: '#fff' }}></i></Badge>
                            </OverlayTrigger>
                            <h3>Apresentção</h3>
                        </Col>
                        <Col sm='12' md='8'>
                            <ReactStars
                                size={46}
                                value={this.state.pitch}
                                onChange={newRating => {
                                    this.setState({ pitch: newRating })
                                }}
                                emptyIcon={<i className="far fa-star" />}
                                halfIcon={<i className="fa fa-star-half-alt" style={{ color: '#5a17f8' }} />}
                                filledIcon={<i className="fa fa-star" style={{ color: '#5a17f8' }} />}
                                color='#5a17f8'
                            />
                            <p>{this.RenderRatingText(this.state.pitch)}</p>
                        </Col>
                    </Row>

                    <hr />

                    <Row>
                        <Col className='ColunaDuvida' sm='12' md='4'>
                            <OverlayTrigger

                                placement="left"
                                delay={{ show: 250, hide: 400 }}
                                overlay={e => this.renderTooltip(e, 'O que você achou do que ja foi desenvolvido pela startup')}
                            >
                                <Badge className='badgeDuvida' variant='info'><i className='fa fa-question' style={{ color: '#fff' }}></i></Badge>
                            </OverlayTrigger>
                            <h3>Desenvolvimento</h3>
                        </Col>
                        <Col sm='12' md='8'>
                            <ReactStars
                                size={46}
                                value={this.state.desenv}
                                onChange={newRating => {
                                    this.setState({ desenv: newRating })
                                }}
                                emptyIcon={<i className="far fa-star" />}
                                halfIcon={<i className="fa fa-star-half-alt" style={{ color: '#5a17f8' }} />}
                                filledIcon={<i className="fa fa-star" style={{ color: '#5a17f8' }} />}
                                color='#5a17f8'
                            />
                            <p>{this.RenderRatingText(this.state.desenv)}</p>
                        </Col>
                    </Row>

                    <hr />

                    <Row>
                        <Col className='ColunaDuvida' sm='12' md='4'>
                            <OverlayTrigger

                                placement="left"
                                delay={{ show: 250, hide: 400 }}
                                overlay={e => this.renderTooltip(e, 'Sugestões de mudanças que podem ser feitas ou incentivos a startup, boas palavras são sempre bem vindas ;)')}
                            >
                                <Badge className='badgeDuvida' variant='info'><i className='fa fa-question' style={{ color: '#fff' }}></i></Badge>
                            </OverlayTrigger>
                            <h3>Alguma sugestão ou comentário?</h3>
                        </Col>
                        <Col sm='12' md='8'>
                            <Form.Control as='textarea' rows='3' value={this.state.comment} onChange={(e) => this.setState({ comment: e.target.value })} placeholder="Eu acho que" />
                            <p>Campo opcional</p>
                        </Col>
                    </Row>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {
                        this.setState({ proposta: 0, pitch: 0, desenv: 0 })
                        this.props.funcao('startup', null)
                    }}>
                        Fechar / Cancelar
                        </Button>
                    <Button variant="primary" onClick={async () => {
                        this.setState({ proposta: 0, pitch: 0, desenv: 0 })
                        const Response = await SaveRate({ ...this.state, StartupName: getData('name') })
                        if (Response.success) {
                            this.props.funcao('startup', null)
                            this.props.funcao('message', 'Avaliação computada com sucesso!')
                        } else {
                            this.props.funcao('message', 'Erro ao computar a avaliação!')
                        }
                    }}>
                        Salvar nota
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
