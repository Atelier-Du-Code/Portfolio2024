import React from 'react';
import '../styles/components/DivImage.css'; 


const DivImage = ({ Title, urlImage, titreAlt}) => {
  return (
    
    <div className='divImage'>

        <img className='image_div' src={urlImage} alt={titreAlt} />
        <p>{Title}</p>
    </div>
   
  );
};

export default DivImage;
