import React from 'react';
import '../styles/global_style.css';
import '../styles/pages/page_projet.css';
import NavBar from '../components/NavBar.js';
import DivCustom from '../components/DivCustom.js';
import VideoPlayer from '../components/VideoPlayer.js';
import ButtonCustom from '../components/ButtonCustom.js';
import Footer from '../components/Footer.js';

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
       <div className='background_image'>
          <div className='navbar_accueil'>
            <NavBar />
          </div>
        </div>

        <div className='div_bande_banniere'>
          <div className='div_bande_banniere_texte'>
            <h2>De l'Essence à la Saveur</h2>
            <p>Création de charte graphique pour l'entreprise ''De l'Essence à la Saveur (D.E.S)''</p>
              <div className='div_organise_tags'>            
                <div className='div_tags'>
                  <DivCustom label={"#Illustrator"} styleType={"tag_blanc"}/>
                  <DivCustom label={"#Photoshop"} styleType={"tag_blanc"}/>
                </div>
            </div>
          </div>            
        </div>

        <div className='div_description'>
            <h4>Description</h4>
            <p>Conception de l'identité graphique de l'entreprise "De l'Essence à la Saveur", incluant la création de son logo et de l'étiquette pour son produit phare : un paquet d'épices à paëlla</p>
        </div>

        <div className='div_tech_orga'>        
          <div className='div_tech'>
            <h4>Technologies</h4>
            <div className='range_tech'>
              <DivCustom label={"Illustrator"} styleType={"competences"} urlImage={"illustrator.png"} titreAlt={"Illustrator"}/>
              <DivCustom label={"Photoshop"} styleType={"competences"} urlImage={"photoshop.png"} titreAlt={"Photoshop"}/>           
            </div>
          </div>
        </div>

        <div className='conteneur_demo_btn_fonctionnalites'>
          <div className='div_demo_btn_fonctionnalites'>
            <div className='div_demo'>
              <h4>Conception de l'identité graphique et de l'étiquette du produit</h4>
              <div className='demo'>
              <Slider images={images}></Slider> 
                
              </div>
            </div>

          

            <div className='div_buttonCustom'>

            <a href="art/Charte_graphique.pdf" download="Charte_graphique.pdf">  <ButtonCustom label="Voir le projet" route={7} styleType='primary'/></a>
             
            </div>
          </div>
        </div>       
        
        <Footer></Footer>

      
    </div>
  );
};

export default Projet7;
