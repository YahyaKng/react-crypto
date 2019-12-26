import React, { Component } from 'react'
import NewsItem from './NewsItem';
import axios from 'axios';

class News extends Component {

    state = {
        news: []
    }

    componentDidMount() {
        axios.get('https://min-api.cryptocompare.com/data/v2/news/?lang=EN').then( res => this.setState({news: res.data.Data}));
        
	}
    
    render() {

        // return (
        //     <div className="container">
        //         <div className="row">
        //             {this.state.news.map((newsItem) => (<NewsItem key={newsItem.id} newsItem={newsItem}) />}
        //         </div>
        //     </div>
        // );

        return this.state.news.map((newsItem) => (
            <NewsItem key={newsItem.id} newsItem={newsItem} />
            ));


        // return (
        //     <div>
        //         {console.log('here')}
        //         {console.log(this.state.news)}
        //        <h1>News</h1> 
        //        <div className="jumbotron">
        //             <h1 className="display-4">Hello, world!</h1>
        //             <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        //             <hr className="my-4" />
        //             <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        //             <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        //        </div>
        //     </div>
        // )
    }
}

export default News
