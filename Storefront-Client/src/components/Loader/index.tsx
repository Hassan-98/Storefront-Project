import React from 'react'
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <div className="square" ></div>
      <div className="square"></div>
      <div className="square last"></div>
      <div className="square clear"></div>
      <div className="square"></div>
      <div className="square last"></div>
      <div className="square clear"></div>
      <div className="square "></div>
      <div className="square last"></div>
    </div>
  )
}

export default Loader