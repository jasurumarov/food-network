import React, { useState, useEffect } from 'react'
import BacktopIcon from '../../images/backtop.svg'

const Backtop = () => {
    const [backtop, setBacktop] = useState(false)
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 200) {
                setBacktop(true);
            } else {
                setBacktop(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

  return (
    <div>
        <div>
            <a id='backtop' className={`${backtop ? "backtopShow" : ""}`} href="#">
                <img src={BacktopIcon} alt="Back to Top" />
            </a>
        </div>
    </div>
  )
}

export default Backtop