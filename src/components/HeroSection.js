import React from 'react'
import '../App.css'
import './HeroSection.css'
import Button from './Button'

const HeroSection = () => {
    return (
        <div className='hero-container'>
            <h1>Julia Chen</h1>
            <p>I'm a second year student studying Computing and Financial Management at the University of Waterloo. Scroll down to get to know me and read about some of the projects that I have developed!</p>
            <div class="social-icons">
                <a class="social-icon" href="mailto:juliazychen@gmail.com"><i class="fa fa-envelope"></i></a>
                <a class="social-icon" href="https://github.com/JackdawsCry" target="_blank "
                    rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                <a class="social-icon" href="https://www.instagram.com/juliazychen/?hl=en" target="_blank"
                    rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                <a class="social-icon" href="https://www.facebook.com/profile.php?id=100010381931679"
                    target="_blank " rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
            </div>
        </div>
    );
}

export default HeroSection;