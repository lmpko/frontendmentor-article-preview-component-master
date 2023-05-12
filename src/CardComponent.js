import React ,{useState, useRef, useEffect} from 'react'
import avatar from "/images/avatar-michelle.jpg"
import shareIcon from "/images/icon-share.svg"
import fbIcon from "/images/icon-facebook.svg"
import twIcon from "/images/icon-twitter.svg"
import pinIcon from "/images/icon-pinterest.svg"

const CardComponent = () => {

    const [showShareCard, setShowShareCard] = useState(false);
    const shareRef = useRef(null);

    const handleClick = () => {
        setShowShareCard(!showShareCard)
      };

    const handleClickOutside = (event) => {
        if (shareRef.current && !shareRef.current.contains(event.target)) {
          setShowShareCard(false);
        }
    };

    useEffect(() => {
        window.addEventListener("click", handleClickOutside);
    
        return () => {
          window.removeEventListener("click", handleClickOutside);
        };
      }, []);

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
                <img src={shareIcon} alt="Share" className='share-icon' onClick={handleClick}/>
            </div>
                {showShareCard && 
                <span className='share-menu'>share 
                    <img src={fbIcon} alt="fb" />
                    <img src={twIcon} alt="tw" />
                    <img src={pinIcon} alt="pin" />
                </span>}
        </section>
    </>
  )
}

export default CardComponent