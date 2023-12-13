import React from 'react'
import '../css/employment.css'

export default function EmploymentEntry({ companyName, date, location, role, description }) {
    return (
        <div className='employment-container'>
            <div className='company-name'>{companyName}</div>
            <div className='location'>{location}</div>
            <div className='date'>{date}</div>
            <div className='role'>{role}</div>
            <ul>
                {description.map(desc => {
                    return (
                        <li key={Math.random(0, 2000)} className='item'>{desc}</li>
                    )
                })}
            </ul>
        </div>
    )
}