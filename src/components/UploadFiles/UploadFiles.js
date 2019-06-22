import React, { Component } from 'react';
import './UploadFiles.css';

export default class UploadFiles extends Component {
    uploadFile(e) {
        const file = e.target.value;
        console.log(`File ${file} uploaded!`);
    }
    render() {
        return(
            <form className='upload'>
                <div className='form-group'>
                    <label className='label'>
                        <i className='material-icons'>Add file</i>
                        <span className='title'>upload gif</span>
                        <input type='file' onChange={e => this.uploadFile(e)}/>
                    </label>
                </div>
            </form>
        )
    }
};