import React from 'react'
import './Footer.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Footer = () => {
    const history=useHistory()

    const viewhome=()=>{
        history.push("/home")
    }
    const viewstore=()=>{
        history.push("/store")
    }
    const viewabout=()=>{
        history.push("/about")
    }
    const viewcontact=()=>{
        history.push("/contact")
    }



    return (

        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <h4>About Beauty Bar</h4>
                        <p>Welcome to Beauty Bar, your ultimate destination for all things beauty! At Beauty Bar, we believe that beauty is more than just skin deep. It's about feeling confident, empowered, and expressing your unique style.</p>

                    </div>
                    <div class="col-md-4">
                        <h4>Quick Links</h4>
                        <ul class="quick-links">
                            <li><a href= "#" onClick={viewhome}>Home</a></li>
                            <li><a href= "#" onClick={viewstore}>Shop</a></li>
                            <li><a href= "#"  onClick={viewabout}>About</a></li>
                            <li><a href= "#" onClick={viewcontact}>Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h4>Contact Us</h4>
                        <p>Email: info@beautybar.com</p>
                        <p>Phone: +123 456 7890</p>
                        <p>Address: 123 Beauty Street, Delhi</p>
                    </div>
                </div>
                <hr></hr>
                <div class="row">
                    <div class="col-md-12 text-center">
                        <p class="copyright">&copy; 2024 Cosmetics Website. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
