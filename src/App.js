import React, { Component } from 'react';

import Dropzone from './components/Dropzone/Dropzone.js';
import Annzone from './components/Annzone/Annzone.js';

import './App.css';

export default class App extends Component {
    render() {
        return(
            <div className='app-container'>
                <Dropzone className='dropzone'></Dropzone>
                <Annzone className='annzone'></Annzone>
            </div>
        )
    }
};