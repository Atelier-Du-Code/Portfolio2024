import React from 'react';
import '../styles/components/CardCustom.css'; // Fichier CSS pour le style du bouton
import DivCustom from './DivCustom';
import ButtonCustom from './ButtonCustom';



const CardCustom = ({ Title, urlImage, tagList, descriptionCourte, route }) => {
  return (
    
    <div className='card'>

      <div className='div_image'>
      <img src={urlImage} alt="Grapefruit slice atop a pile of other slices" />

      </div>

        

        <h4 className='centre_texte'>{Title}</h4>

        <div className='container_tags'>
              {tagList.map((tag, index) => (
               <DivCustom label={"#" + tag} styleType={'tag'} key={index} />

                ))}
        </div>
        
        <div>
            <p className='description'>{descriptionCourte}</p>
        </div>

        <ButtonCustom label="Voir le projet" route={route} styleType='primary'/>
        



    </div>
   
  );
};

export default CardCustom;
