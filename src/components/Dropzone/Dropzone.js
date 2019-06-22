import React, { Component } from 'react';
import './Dropzone.css';

export default class Dropzone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: []
        };  
    }
    handleChange(files) {
        this.setState({
            files: files
        });
    }
    render() {
        return (
            <>
                <div>Upload file</div>
                <div>File annoncement</div>
            </>
        )
    }
};