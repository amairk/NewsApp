import React, { Component } from 'react'
export class NewsItem extends Component {
    
    render() {
        let { title, desc, url, img_src } = this.props;
        return (

            <div className='container'>
                <div className='d-flex flex-row align-items-stretch'>
                    <div className="card p-2">
                                <img src={img_src} className="card-img-top" alt="Not Visible" />
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{desc}</p>
                                    <a href={url} className="btn btn-primary">Read more</a>
                                </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
