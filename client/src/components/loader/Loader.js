import React from 'react'
import './loader.css'
const Loader = () => {
  return (
    <>
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    <div className='loading'>Loading ...</div>
    </>
  )
}

export default Loader