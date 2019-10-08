import React from 'react'
import './styles/FieldBox.css'
const FieldBox = ({title,university,content}) => {
    return (
        <div className={`field-box ${title}`}>
            <h2>{title} </h2>
            <h3>{university}</h3>
            <p>{content}</p>
            <button>Get Me There</button>
        </div>
    )
}

export default FieldBox
