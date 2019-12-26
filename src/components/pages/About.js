import React, { Component } from 'react'

class About extends Component {
    render() {
        return (
            <div style={aboutStyle}>
               <h1>درباره ما</h1> 
               <p>برنامه اخبار و قیمت رمز ارز ها</p>
               <p>قیمت ها و اخبار به صورت لحظه ای از</p>
               <p>min-api.cryptocompare.com</p>
               <p>دریافت میگردند</p>
            </div>
        )
    }
}

const aboutStyle = {
    padding: '20px',
    backgroundColor: '#f4f4f4',
    textAlign: 'center'
}

export default About
