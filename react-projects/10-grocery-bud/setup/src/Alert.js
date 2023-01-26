import React, { useEffect } from 'react'

const Alert = ({type, msg, removeAlert}) => {
  useEffect(() => {
    const timeout = setTimeout(removeAlert(), 3000) // note that we use the default values
    return () => {
      clearTimeout(timeout);
    }
  }, []);
  return <h2 className={`alert alert-${type}`}>{msg}</h2>
}

export default Alert
