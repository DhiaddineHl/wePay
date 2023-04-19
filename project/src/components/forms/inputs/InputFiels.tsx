import React from 'react'

interface Props {
    placeHolder : string
}


const InputBox = ({placeHolder} : Props) => {
  return (
    <input type="text" placeholder={placeHolder} style={{
        backgroundColor : "lightgrey",
        padding : '0.8rem',
        width : "300px",
        borderRadius : "0.3rem"
         
    }} />
  )
}

export default InputBox