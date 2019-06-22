import React, { Component } from 'react';

import Dropzone from './components/Dropzone/Dropzone.js';
import Annzone from './components/Annzone/Annzone.js';

import './App.css';

export default class App extends Component {
    handleClick() {

    }
    render() {
        return(
            <div className='app-container'>
                <Dropzone className='dropzone'></Dropzone>
                <Annzone className='annzone'></Annzone>
                <button className='submit-button' onClick={this.handleClick}></button>
            </div>
        )
    }
};