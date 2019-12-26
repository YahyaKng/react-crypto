import React, { Component } from 'react'

class NewsItem extends Component {
    render() {
        const { title, imageurl, url, body } = this.props.newsItem;

        return (

            // <div class="container">
            //     <div class="row">
            //         <div class="col-sm-3">
            //             <div class="card">
            //                 <img class="card-img-top img-fluid" src="//placehold.it/500x220" alt="Card image cap" />
            //                 <div class="card-block">
            //                     <h4 class="card-title">Card title</h4>
            //                     <p class="card-text">This card has even longer content than the first to show that equal height action.</p>
            //                     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>

            <div className="container">

                <div className="row">

                    <div className="col-sm-12">
                        <div className="card" style={newsStyle} >
                            <img src={imageurl} className="card-img-top" alt={title} />
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{body}</p>
                                <a href={url} className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        )
    }
}

const newsStyle = {
}

export default NewsItem
