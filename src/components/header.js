import React from "react"

export default function Header(){
    return (

        // <header className="header">
       
        //     <img className="img" src="https://www.shutterstock.com/image-illustration/retro-comic-book-style-cartoon-600w-257465797.jpg"/>
        //     <h3 className="memeh3">MEME GENERATOR</h3>
        //     <nav className="nav">

        //    <h3  ><a className="home" href="#">HOME</a></h3>
        //    <h3  ><a className="about" href="#">ABOUT</a></h3>
        //    <h3 ><a  className="contact" href="#">CONTACT</a></h3>
        //     </nav>    
        // </header>

        <nav className="navbar" >
            <div className="logo">MEME GENERATOR</div>
                <ul className="nav-links">
               <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" class="hamburger">&#9776;</label>
                    <div className="menu">
                        {/* <li><a href="/" > HOME </a></li> */}
                        <li><a href="/" > HOW TO USE </a></li>
                    </div>
                </ul>
        </nav>

        
    )
}