import React, { useState } from 'react'
import './formInput.css'

const FormInput = (props) => {
    const [focused, setFocused] = useState(false)
    const { label, onChange, id, errorMessage, ...inputProps } = props

    const handleFocus = (e) => {
        setFocused(true)
    }

    return (
        <div className='formInput'>
            <label>{props.label}</label>
            <input
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={()=>inputProps.name ==='confirmPassword' && setFocused(true)}
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInput