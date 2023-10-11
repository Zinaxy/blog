import React from 'react'

const ButtonPrimary = (props) => {
  return (
    <div>
        <button type={props.type} className="font-bold ml-5 px-6 py-2.5 bg-gradient-to-r to-primary from-sky-400 text-white rounded-lg ">{props.btnTitle}</button>
    </div>
  )
}

export default ButtonPrimary