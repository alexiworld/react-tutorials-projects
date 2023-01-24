// rafcp is the shortkey for creating React component with PropTypes.
import React from 'react'
import PropTypes from 'prop-types'

const testing = props => {
  return (  
    <div>
      
    </div>
  )
}

testing.propTypes = {
    // pta shortkey for PropTypes.array
    name: PropTypes.array.isRequired,
}

export default testing
    