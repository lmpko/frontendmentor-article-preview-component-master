import React from 'react'
import fbIcon from "/images/icon-facebook.svg"
import twIcon from "/images/icon-twitter.svg"
import pinIcon from "/images/icon-pinterest.svg"

const ShareMenuComponent = () => {
  return (
    <span className='share-menu'>share 
        <img src={fbIcon} alt="fb" />
        <img src={twIcon} alt="tw" />
        <img src={pinIcon} alt="pin" />
    </span>
  )
}

export default ShareMenuComponent