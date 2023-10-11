import React from 'react'

const TextArea = (props) => {
  return (
     <div className="">
        <label htmlFor={props.label} className="">{props.label}</label>
        <textarea   rows='4' name={props.name} className="w-full px-3 border-2 border-gray-300 bg-transparent rounded my-2 py-3" placeholder={props.placeholder}>{props.value}</textarea>
    </div>
  )
}

export default TextArea