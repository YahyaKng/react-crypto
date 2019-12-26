import React, { Component } from 'react'
import ShowPrice from '../ShowPrice';
import axios from 'axios';

export class GetPrice extends Component {
    state = {
        price: [],
        cryptocurrency: '',
        isDownloaded: false,
    }

    onChange = (e) => this.setState({ cryptocurrency: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.getPrice(this.state.cryptocurrency);
        // this.setState({ cryptocurrency: '' });
    }

    getPrice(cryptocurrency) {
        axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${cryptocurrency}&tsyms=USD,JPY,EUR`).then( res => this.setState({ price: res.data }) )
            .then(this.setState({ isDownloaded: true }));
        
    }

    render() {
        let showPrice = '';
        if(this.state.isDownloaded) {
            showPrice = <ShowPrice price={this.state.price} cryptocurrency={this.state.cryptocurrency} />
        } else {
            showPrice = <hr/>
        }
        
        return (
            <React.Fragment>
                <form onSubmit={this.onSubmit} style={formStyle}>
                    <div className="form-group">
                        <label htmlFor="cryptocurrency">قیمت رمز ارز</label>
                        <select className="form-control" id="cryptocurrency" name="cryptocurrency" value={this.state.cryptocurrency} onChange={this.onChange}>
                        <option>انتخاب کنید</option>
                        <option value="BTC">Bitcoin</option>
                        <option value="ETH">Ethereum</option>
                        <option value="CXP">CaixaPay</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">بررسی قیمت</button>
                </form>
                {showPrice}
            </React.Fragment>

        )
    }
}

const formStyle = {
    textAlign: 'right'
}

export default GetPrice
