import React from 'react';
import image from "../assets/training.jpeg";
import Footer from '../components/Footer/Footer';
const How = () => {
  const containerStyle = {
    position: 'relative',
    height: '80vh', 
  };

  const imageStyle = {
    width: '38%',
    height: '100%', 
    borderRadius: '5px',
    marginLeft: '560px', 
  };

  const contentStyle = {
    position: 'absolute',
    bottom: '20px', 
    left: '20px',
    width: '80%',
	marginLeft: '630px', 
    color: '#000', 
  };

  return (
    <div style={containerStyle}>
      <img src={image} alt="no image" style={imageStyle} />
      <div style={contentStyle}>
        <h2>Introduction to Trade Compliance</h2>
        <p>
          A short write-up to prepare the learner to Who, What, 
		  <br></br>and How of the trade compliance training course
          
        </p>
      </div>
	  <Footer/>
    </div>
  );
};

export default How;
