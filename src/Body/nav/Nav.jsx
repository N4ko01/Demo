import React from 'react'
import { Parallax } from "react-parallax"
import { Link } from "react-router-dom";
import "./nav.css"

const Nav = () => {
    return (
        <>
            <Parallax
                bgImage="https://images.alphacoders.com/124/1249203.png"
                strength={300}
                bgImageStyle={{ top: "-100px" }}

            >
                <div className="backgroundImage">
                    <nav className="navbar">
                        <div className="navbar__div_img">
                        </div>
                        <ul className="navbar__ul">
                            <Link className="navbar__li" to="/home">
                                Home
                            </Link>
                            <Link className="navbar__li" to="/Aboutus">
                                About us
                            </Link>
                            <Link className="navbar__li" to="/salas">
                                Rooms 
                            </Link>
                        </ul>
                    </nav>
                    <div className="text multicolor">
                        <div className="text__title ">Villa</div>
                        <div className="text__comments">VR</div>
                    </div>
                </div>
            </Parallax>

        </>
    )
}

export default Nav