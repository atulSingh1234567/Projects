import React from 'react'

export default function RightsideCard(props) {
 

  return (
    <div className='right-card' >
      
        <h3>#{props.section}</h3>
        <ul className='right-info-ul'>
          {
            props.topic.map(function (val) {
              return (
                <div key={val.id} className='right-li-item'>
                  <li className={`right-headline`}>{val.headline}</li>
                  <li className='right-comment'>{val.comments} comments</li>
                </div>
              )
            })
          }
        </ul>
      
    </div>
  )
}
