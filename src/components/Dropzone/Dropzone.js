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
            <React.Fragment>
                <div className='upload-zone'>Upload file</div>
                <div className='file-ann'>
                    Text for sale
                    <textarea className='text-for-sale'>

                    </textarea>
                </div>
            </React.Fragment>
        )
    }
};