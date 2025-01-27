import React from 'react';
import '../styles/global_style.css';
import '../styles/pages/page_projet.css';
import NavBar from '../components/NavBar.js';
import DivCustom from '../components/DivCustom.js';
import Slider from '../components/Slider.js';

const Projet7 = () => {

  
  const images = [  
    "/art/des4.png",
    "/art/etiquette.png",
    "/art/charte/1.png",
    "/art/charte/2.png",
    "/art/charte/3.png",
    "/art/charte/4.png",
  ];

  return (

    <div className='page_container'>
      <div className='imageBackgroundContainer'>

     
      
          <div className='navbar_accueil'>
            <NavBar />
          </div>
       
       <div className='containerTitreDescription'>
       <div className='div_bande_banniere'>
          <div className='div_bande_banniere_texte'>
          <h2>De l'Essence à la Saveur</h2>
              <div className='div_organise_tags'>            
                <div className='div_tags'>
                <DivCustom label={"#Illustrator"} styleType={"tag_blanc"}/>
                  <DivCustom label={"#Photoshop"} styleType={"tag_blanc"}/>
                </div>
            </div>
          </div>            
        </div>
        
        <div className='div_description'>
           
        <p>Conception de l'identité graphique de l'entreprise "De l'Essence à la Saveur", incluant la création de son logo et de l'étiquette pour son produit phare : un paquet d'épices à paëlla</p>
        </div>
       </div>
        <div className='backgroundTechProjet'>

        <div className='div_tech_orga'>        
          <div className='div_tech'>
          <h4>Logiciels</h4>
            <div className='range_tech'>
            <DivCustom label={"Illustrator"} styleType={"competences"} urlImage={"illustrator.png"} titreAlt={"Illustrator"}/>
              <DivCustom label={"Photoshop"} styleType={"competences"} urlImage={"photoshop.png"} titreAlt={"Photoshop"}/>           
            </div>
          </div>
          <div className='div_tech'>
            <h4>Organisation et validation par l'entreprise</h4>
            <div className='range_tech'>
             
              <DivCustom label={"Trello"} styleType={"competences"} urlImage={"trello.png"} titreAlt={"Figma"}/>
                               
            </div>           
          </div> 
        </div>

        <div className='conteneur_demo_btn_fonctionnalites'>
          <div className='div_demo_btn_fonctionnalites'>
            <div className='div_demo'>
              <h4>Charte graphique et mock up de présentation </h4>
              <Slider images={images}></Slider>            
            

            </div>
          </div>
        </div>

        </div>
        </div>
       
    </div>
  );
};

export default Projet7;
