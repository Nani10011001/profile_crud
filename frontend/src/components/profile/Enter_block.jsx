import React from 'react'

const Enter_block = ({style,...props}) => {
  return (
    <div >
      <input type="text" {...props} className={`bg-gray-300 w-full outline-none cursor-pointer px-2 mb-3 rounded-md ${style} focus:ring-2 focus:ring-gray-900`}/>
    </div>
  )
}

export default Enter_block
