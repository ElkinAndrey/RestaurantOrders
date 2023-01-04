import React from 'react'
import classes from "./Loader.module.css";

const Loader = ({...props}) => {
  return (    
    <div {...props} className={classes.spinner}></div>
  )
}

export default Loader