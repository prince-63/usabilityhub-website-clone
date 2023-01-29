import React from 'react'

const Box = (props) => {
  return (
    <>
      <div className="box">
          <img src={props.logo} alt="" />
          <h3>{props.title}</h3>
          <p>{props.data}</p>
      </div>
    </>
  )
}

export default Box