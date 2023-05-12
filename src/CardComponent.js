import React from 'react'
import cardIMG from "/images/drawers.jpg"
import avatar from "/images/avatar-michelle.jpg"
import shareIcon from "/images/icon-share.svg"

const CardComponent = () => {
  return (
    <>
        <img src={cardIMG} alt="card-img"/>
        <section>
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
            <div className='personal'>
                <img src={avatar} alt="avatar" />
                <div>
                    <h2>Michelle Appleton</h2>
                    <span>28 Jun 2020</span>
                </div>
                <img src={shareIcon} alt="Share"/>
            </div>
        </section>
    </>
  )
}

export default CardComponent