import React from 'react'

function Avatar({url, className}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={`h-8 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}

        loading='lazy'
        src={url}
        alt='profile_pic'
    />
  )
}

export default Avatar