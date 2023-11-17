import React from 'react'
import ObjectForMidside from '../SomeJSONojects/ObjectForMidside'

export default function MidCard(props) {
    return (
        <div className='mid-card-div'>
            {
              props.sort ? ObjectForMidside.reverse().map(function (val) {
                return (
                <div className='mid-cards'>
                    <a href={val.link} target='_blank'><img src={val.image} alt="" className='mid-img'/></a>
                    <a href={val.link} target='_blank'><h2 className='mid-heading'>{val.tittle}</h2></a>
                </div>
                )
            }) : ObjectForMidside.map(function (val) {
                return (
                <div className='mid-cards'>
                    <a href={val.link} target='_blank'><img src={val.image} alt="" className='mid-img'/></a>
                    <a href={val.link} target='_blank'><h2 className='mid-heading'>{val.tittle}</h2></a>
                </div>
                )
            })
            }
        </div>
    )
}
