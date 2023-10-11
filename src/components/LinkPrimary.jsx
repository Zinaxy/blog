import React from 'react'
import { Link } from 'react-router-dom'

const ButtonPrimary = (props) => {
  return (
    <div>
        <Link to={props.linkAdress} className="font-bold ml-5 px-6 py-2.5 bg-gradient-to-r to-primary from-sky-400 text-white rounded-lg ">{props.linkName}</Link>
    </div>
  )
}

export default ButtonPrimary