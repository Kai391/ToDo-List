import React from 'react'

export const Message = (props) => {
    return (
        <div className="alert alert-success" role="alert">
            {props.message}
        </div>
    )
}
