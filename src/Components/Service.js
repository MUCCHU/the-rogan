import React from 'react'
// import logo from '../Images/logo.png'

export default function Service(props) {
    return (
        <div className="individualSevice">
            <div className="service-logo">
                <img src={props.icon} style={{width: '100px', height: '100px'}} alt="" />
            </div>
            <div className="service-text">
                {props.title}
            </div>
        </div>
    )
}
