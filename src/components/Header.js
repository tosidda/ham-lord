import React, {useState, useEffect} from 'react';
import { withRouter, Link } from 'react-router-dom';
import Hamburger from './Hamburger';

const Header = ({history}) => {
    const [state, setState] = useState({
        initial: false,
        clicked: false,
        menuName: "Menu"
    })

    const [disabled, setDisabled] = useState(false)
     
    const handleMenu = () => {
        disableMenu();
        if (state.inital === false) {
            setState({
                inital: null,
                clicked: true,
                menuName: "Close"
            })
            console.log(1)
        } else if (state.clicked === true) {
           setState({
               clicked: !state.clicked,
               menuName: "Menu"
           })
           console.log(2)
        } else if (state.clicked === false) {
            setState({
                clicked: !state.clicked,
                menuName: "Close"
            })
            console.log(3)
         }
    }

    useEffect(() => {
        history.listen(() => {
            setState({clicked: false, menu: "Menu"})
        })
    })

    const disableMenu = () => {
         setDisabled(!disabled)
         setTimeout(() => {
             setDisabled(false)
         }, 1200)
    }

    return <header>
        <div className="container">
            <div className="wrapper">
                <div className="inner-header">
                    <div className="logo">
                       <Link to="/">NERDS</Link>
                    </div>
                    <div className="menu">
                        <button disabled={disabled} onClick={handleMenu}>Menu</button>
                    </div>
                </div>
            </div>
        </div>
        <Hamburger state={state}/>
    </header>
}

export default withRouter(Header);