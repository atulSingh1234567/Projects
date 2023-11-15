import React from 'react'

export default function Button(props) {
    return (
        <button type='submit' className='create-acc-btn'>
            <i className='absolute left-3'>{props.icon}</i>
            <span className='text-sm tracking-wide'>Sign up with {props.name}</span>
        </button>
    )
}
