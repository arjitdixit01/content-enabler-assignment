// CardComponent.js
import React from 'react';

const CardComponent = ({ imageSrc, title, imageStyle }) => {
  const containerStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px',
    width: '300px', // Default width for the card component
  };

  const cardImageStyle = {
    width: '100%', // Set the image width to 100% of the card component
    height: '200px', // Set the image height (adjust to your desired height)
    objectFit: 'cover', // Maintain the aspect ratio of the image
    borderRadius: '5px 5px 0 0', // Rounded corners for the top of the image
    ...imageStyle, // Allow overriding the height and width using the imageStyle prop
  };

  return (
    <div style={containerStyle}>
      <img src={imageSrc} alt="Card" style={cardImageStyle} />
      <div>
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default CardComponent;
