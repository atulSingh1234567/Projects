import React from 'react'
import ObjectForRightside from '../SomeJSONojects/ObjectForRightside'
import RightsideCard from './RightsideCard'
export default function RightSideBar() {

  return (
    <div className='right-side-div'>
      
      {
        ObjectForRightside.map((val , index)=>{
            return <RightsideCard
              section = {val.section}
              topic = {val.topic}
              key = {Date.now()}
            />
        })
      }
      
    </div>
  )
}
