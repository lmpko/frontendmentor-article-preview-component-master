import React ,{useState, useRef, useEffect} from 'react'
import avatar from "/images/avatar-michelle.jpg"
import shareIcon from "/images/icon-share.svg"
import fbIcon from "/images/icon-facebook.svg"
import twIcon from "/images/icon-twitter.svg"
import pinIcon from "/images/icon-pinterest.svg"
import ShareMenuComponent from './ShareMenuComponent'

const CardComponent = () => {

    const [showShareCard, setShowShareCard] = useState(false);
   

    const handleClick = () => {
        setShowShareCard(!showShareCard)
      };

  return (
    <>
        <div className='logo'>
            
        </div>
                {showShareCard &&  <ShareMenuComponent/>}
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
                <img src={shareIcon} alt="Share" className='share-icon' onClick={handleClick}/>
            </div>
                
        </section>
    </>
  )
}

export default CardComponent