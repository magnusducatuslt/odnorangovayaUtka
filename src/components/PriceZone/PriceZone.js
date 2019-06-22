import React, { Component } from 'react';

export default class PriceZone extends Component {
    render() {
        return(
            <div className='price-zone'>
                <h2>You bitcoin address</h2>
                <input />
                <h4>Price</h4>
                <div className='price-buttons'>
                    <div className='btc-price'>
                        <input />
                    </div>
                    <div className='usd-price'>
                        <input />
                    </div>
                </div>
                <div className='select-price'>
                    Select price
                    <button className='select-btc'>Fix price in btc</button>
                    <button className='select-usd'>Fix price in usd</button>
                </div>
            </div>
        )
    }
};