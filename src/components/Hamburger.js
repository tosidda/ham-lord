import React, {useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import dallas from '../images/dallas.webp'
import austin from '../images/austin.webp'
import beijing from '../images/beijing.webp'
import newyork from '../images/newyork.webp'
import sanfrancisco from '../images/sanfrancisco.webp'



const cities = [
    {name: 'Dallas', image: dallas},
    {name: 'Austin', image: austin},
    {name: 'New York', image: newyork},
    {name: 'Beijing', image: beijing},
    {name: 'San Francisco', image: sanfrancisco}
]


const Hamburger = ({state}) => {
    let menu = useRef(null)
    let revealMenu = useRef(null)
    let revealMenuBackground = useRef(null)
    let cityBackground = useRef(null)
    let line1 = useRef(null)
    let line2 = useRef(null)
    let line3 = useRef(null)
    let info = useRef(null)

    useEffect(() => {
    
        if (state.clicked === false) {

            
              gsap.to([revealMenu, revealMenuBackground], {
                duration: 0.8,
                ease: "power3.inOut",
                height: 0,
                stagger: {
                    amount: 0.07
                  }
              });
            //close our menu
            gsap.to(menu, { duration: 1, css: { display: "none" } });
        } else if (state.clicked === true || (state.clicked === true && state.initial === null)) {
            //open our menu
            gsap.to(menu, { duration: 0, css: { display: "block" } });
            //Allow menu to have height of 100%
            gsap.to([revealMenu, revealMenuBackground], {
              duration: 0,
              opacity: 1,
              height: "100%"
            });
            staggerReveal([revealMenu, revealMenuBackground])
            fadeInUp(info)
            staggerText(line1, line2, line3)
        }
    }, [state]);

    const staggerReveal = (node1, node2) => {
         gsap.from([node1, node2], {
            duration: 0.8,
            height: 0,
            transformOrigin: "right top",
            skewY: 2,
            ease: "power3.inOut",
            stagger: {
                amount: 0.1
            }
         })
    }

    const staggerText = (node1, node2, node3) => {
        gsap.from([node1, node2, node3], {
           duration: 0.8,
           y: 100,
           delay: 0.1,
           ease: "power3.inOut",
           stagger: {
               amount: 0.3
           }
        })
   }

    const fadeInUp = (node1) => {
        gsap.from(node1, {
           duration: 1,
           y: 60,
           delay: 0.2,
           opacity: 0,
           ease: "power3.inOut",
        })
   }

   const handleCity = city => {
       gsap.to(cityBackground, {
           duration: 0,
           background: `url(${city}) center center`
       })
       gsap.to(cityBackground, {
        duration: 0.4,
        opacity: 1,
        ease: "power3.inOut"
    })
    gsap.from(cityBackground, {
        duration: 0,
        skewY: 2,
        transformOrigin: 'right top'
    })
   }

   const handleCityReturn = () => {
       gsap.to(cityBackground, {
           duration: 0.4,
           opacity: 0
       })
   }

   const handleHover = e => {
       gsap.to(e.target, {
           duration: 0.3,
           y: 3,
           skewX: 4,
           ease: "power3.inOut"
       })
   }

   const handleHoverExit = e => {
    gsap.to(e.target, {
        duration: 0.3,
        y: -3,
        skewX: 0,
        ease: "power3.inOut"
    })
   }

    return (
      <div ref={el => (menu = el)} className="hamburger-menu">
        <div
          ref={el => (revealMenuBackground = el)}
          className="menu-secondary-background-color"
        ></div>
        <div ref={el => (revealMenu = el)} className="menu-layer">
          <div ref={el => (cityBackground = el)} className="menu-city-background"></div>
          <div className="container">
            <div className="wrapper">
              <div className="menu-links">
                <nav>
                  <ul>
                    <li>
                      <Link onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} ref={(el) => (line1 = el)} to="/opportunities">
                        Sidda
                      </Link>
                    </li>
                    <li>
                      <Link onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} ref={(el) => (line2 = el)} to="/solutions">
                        About Me
                      </Link>
                    </li>
                    <li>
                      <Link onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} ref={(el) => (line3 = el)} to="/contact-us">
                        Coding Tip
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div ref={(el) => (info = el)} className="info">
                  <h3>Thanks to Wrong Akram!</h3>
                  <p>
                   Wrong Akram is a Really cool guy who inspired me to make this!
                   Here his channel <a href="https://www.youtube.com/channel/UCqrxiLP9RHz2GxDJaZuTRBw">Channel</a>
                  </p>
                </div>
                <div className="locations">
                  Where I've Been:
                  {cities.map(el => (
                      <span key={el.name} onMouseEnter={() => handleCity(el.image)} onMouseOut={handleCityReturn}>{el.name}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Hamburger;