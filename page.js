'use client'
import React from 'react';
import styles from '../app/Home.module.css';
import Head from 'next/head';

const backgroundImage = '/ye.png'; 

const HomePage = ({ children }) => {
  
  const handleMouseOver = () => {
    document.getElementById("heading").style.color = "aliceblue";
  }
  
  const handleMouseOut = () => {
    document.getElementById("heading").style.color = "white";
  }
  
  const myFunction = () => {
    document.getElementById("quote").innerHTML = "The future belongs to those who believe in the beauty of their dreams.";
  }
  
  return (  
    <div className={styles.body} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Head>
        <title>Document</title>
      </Head>
     <h1>Welcome!</h1>
      <p>
        As a new member, you have joined a community of passionate individuals. Let's inspire and support each other.
      </p>
      <p className={`${styles.para1} para1`}> <b></b>Sapna Vishwakarma</p>
      <h1 id="heading" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        {children}
      </h1>
       <p id="quote" onClick={myFunction}>Click Here</p> 
      
    </div>
  );
};

export default HomePage;
