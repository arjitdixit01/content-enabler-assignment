import React from 'react';
import CardComponent from '../components/Cards/CardComponent'; 
import image1 from '../assets/image1.jpeg'; 
import image2 from "../assets/image2.jpeg"
import image3 from "../assets/image3.jpeg"
import image4 from "../assets/training.jpeg";
import image5 from "../assets/t1.jpeg";
import image6 from "../assets/what.jpg"
import Footer from '../components/Footer/Footer';
const Who = () => {
  let a="Screening"
  let b="Exports"
  let c="Brokering"
  const containerStyle = {
    display: 'flex', 
    flexWrap: 'wrap', 
    justifyContent: 'center',
    padding: '20px', 
  };
  const style1 = {
    paddingLeft: '40px',
  };

  const commonImageStyle = {
    width: '200px', 
    height: '200px', 
  };

  return (
    <div>
      <h3 style={style1}>{a}</h3>
      <div style={containerStyle}>
        <CardComponent
          imageSrc={image1}
          title="Introduction to Screening"
          imageStyle={commonImageStyle}
        />
        <CardComponent
          imageSrc={image2}
          title="UK Sanctions and Embargoes"
          imageStyle={commonImageStyle}
        />
        <CardComponent
          imageSrc={image2}
          title="Introduction to Screening"
          imageStyle={commonImageStyle}
        />
        <CardComponent
          imageSrc={image3}
          title="UK Restricted End Users"
          imageStyle={commonImageStyle}
        />
      </div>


      <h3 style={style1}>{b}</h3>
      <div style={containerStyle}>
        <CardComponent
          imageSrc={image4}
          title="Introduction to Exports"
          imageStyle={commonImageStyle}
        />
        <CardComponent
          imageSrc={image2}
          title="Introduction to Screening"
          imageStyle={commonImageStyle}
        />
        <CardComponent
          imageSrc={image5}
          title="UK Sanctions and Embargoes"
          imageStyle={commonImageStyle}
        />
        <CardComponent
          imageSrc={image6}
          title="UK Restricted End Users"
          imageStyle={commonImageStyle}
        />
      </div>

      <h3 style={style1}>{c}</h3>
      <div style={containerStyle}>
        <CardComponent
          imageSrc={image2}
          title="Introduction to Brokering"
          imageStyle={commonImageStyle}
        />
        <CardComponent
          imageSrc={image4}
          title="Introduction to Screening"
          imageStyle={commonImageStyle}
        />
        <CardComponent
          imageSrc={image1}
          title="UK Sanctions and Embargoes"
          imageStyle={commonImageStyle}
        />
        <CardComponent
          imageSrc={image5}
          title="UK Restricted End Users"
          imageStyle={commonImageStyle}
        />
      </div>
      <Footer/>
    </div>
  );
};

export default Who;
