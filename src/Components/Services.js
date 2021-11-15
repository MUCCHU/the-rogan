import React from 'react'
import Service from './Service'
import logo from '../Images/logo.png'

export default function Services() {
    const serviceList = [
        {
            title: 'Service 1',
            logo: logo,
        },
        {
            title: 'Service 2',
            logo: logo,
        },
        {
            title: 'Service 3',
            logo: logo,
        },
        {
            title: 'Service 4',
            logo: logo,
        },
        {
            title: 'Service 5',
            logo: logo,
        },
        {
            title: 'Service 5',
            logo: logo,
        },
        {
            title: 'Service 5',
            logo: logo,
        },
        {
            title: 'Service 5',
            logo: logo,
        },
        {
            title: 'Service 5',
            logo: logo,
        },
    ]
    return (
        <div className="serviceBG">
            <div className="heading">
                <h1 style={{margin: '0px'}}>Our Services</h1>
            </div>
            <div className="container servicesWrapperOuter">
                {serviceList.map((service, index) => {
                    return <Service key={index} icon={service.logo} title={service.title} />
                })}
            </div>
        </div>
    )
}
