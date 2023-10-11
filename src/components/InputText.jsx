import React from 'react'

const InputText = (props) => {
  return (
    <div className="">
        <label htmlFor={props.label} className="">{props.label}</label>
        <input type={props.type} name={props.name} className="w-full px-3 border-2 border-gray-300 bg-transparent rounded my-2 py-3" placeholder={props.placeholder}/>
    </div>
  )
}

export default InputText