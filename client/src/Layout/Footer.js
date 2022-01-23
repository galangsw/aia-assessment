import React from 'react';
import  './style.css';
import { Link } from 'react-router-dom';


// import { ReactComponent as GithubIcon } from '../assets/github.svg';


const Footer = () => {
  return (
    <footer className='footerStyle'>
      <nav>
        <div>{new Date().getFullYear()} &copy; your copyright</div>
        <div>
        <a href="https://github.com/galangsw/">
            github
            </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
