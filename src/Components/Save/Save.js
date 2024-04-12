import React from 'react'
import './Save.css'

const Save = ({save}) => {
  return (
    <div className='save' onClick={save}>Save</div>
  )
}

export default Save