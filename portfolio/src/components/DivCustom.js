import React from 'react';
import '../styles/components/DivCustom.css';

const DivCustom = ({ label, styleType, urlImage, titreAlt}) => {
  return (     
    <>
      {styleType === "competences" ? (
        <div className='div competences'> 
          <div className='propreteImage'>
            <img className='div_image_competences' src={urlImage} alt={titreAlt} />
          </div>         
          
          <p>{label}</p>
        </div>
      ) : styleType === "softskills" ? (
        <div className='div softSkills'>
          <p>{label}</p>
        </div>

      ) : styleType === "tag_peche" ? (
        <div className='div tag peche'>
          <p>{label}</p>
        </div>

      ) :  styleType === "tag_blanc" ? (
        <div className='div tag blanc'>
          <p>{label}</p>
        </div>

      ) : (

        <div className={`div ${styleType}`} >    
          <p>{label}</p>
        </div>
      )}
    </>
  )    
};

export default DivCustom;



