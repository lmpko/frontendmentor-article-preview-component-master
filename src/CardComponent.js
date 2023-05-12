import React from 'react'
import avatar from "/images/avatar-michelle.jpg"
import shareIcon from "/images/icon-share.svg"

const CardComponent = () => {
  return (
    <>
        <div className='logo'>
            
        </div>
        <section className='content-section'>
            <div className='overview'>
                <h1> Shift the overall look and feel by adding these wonderful 
                    touches to furniture in your home
                </h1>
                <p>
                    Ever been in a room and felt like something was missing? Perhaps 
                    it felt slightly bare and uninviting. I’ve got some simple tips 
                    to help you make any room feel complete.
                </p>
            </div>
            <div className='personal-container'>
                <div className='personal'>
                    <img src={avatar} alt="avatar" className='avatar'/>
                    <div>
                        <h2>Michelle Appleton</h2>
                        <span>28 Jun 2020</span>
                    </div>
                </div>
                <img src={shareIcon} alt="Share" className='share-icon'/>
            </div>
        </section>
    </>
  )
}

export default CardComponent