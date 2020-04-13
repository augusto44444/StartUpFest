import React, { Component } from 'react';

import './style.css'

class Index extends Component {
    render() {
        return (
            <div className='mainContainerContact' >
                <div className='imagem'>
                    <img src='https://media-exp1.licdn.com/dms/image/C4D03AQF0MKTibUq1OQ/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=zwr2PR612iJZxZxGMpbMQmtXuMnGrZ0dpy91BygMin8' />
                </div>
                <div className='body'>
                    <h1>Informações</h1>
                    <div>
                        <div className='iconText'>
                            <h3><i className='fab fa-github'></i></h3> <a target='blank' href="https://github.com/augusto44444"><b>Augusto Amaral</b></a>
                        </div>
                        <div className='iconText'>
                            <h3><i className='fab fa-google-plus-square'></i></h3> <b>augusto.h.amaral@gmail.com</b>
                        </div>
                        <div className='iconText'>
                            <h3><i className='fab fa-linkedin'></i></h3> <a target='blank' href="https://www.linkedin.com/in/augusto-henrique-do-amaral-49a084139/"><b>Augusto Henrique do Amaral</b></a>
                        </div>
                        <div className='iconText'>
                            <h6>Me contrata... <i class="fas fa-sad-tear"></i></h6>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}



export default Index;