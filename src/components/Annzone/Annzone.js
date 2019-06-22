import React, { Component } from 'react';
import PriceZone from '../PriceZone/PriceZone.js';

export default class Annzone extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='file-ann'>
                    Open info about your files(optional):
                    <textarea className='optional-info'>

                    </textarea>
                </div>
                <PriceZone></PriceZone>
            </React.Fragment>
        )
    }
}