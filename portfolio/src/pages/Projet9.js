import React from 'react';
import '../styles/global_style.css';
import '../styles/pages/page_projet.css';
import NavBar from '../components/NavBar.js';
import DivCustom from '../components/DivCustom.js';
import VideoPlayer from '../components/VideoPlayer.js';
import ButtonCustom from '../components/ButtonCustom.js';
import Footer from '../components/Footer.js';

import Slider from '../components/Slider.js';

  const images = [  
    
    "/art/distributeur/1.png",
    "/art/distributeur/2.png",
    "/art/distributeur/3.png",
   
  ];



const Projet9 = () => {
  return (
    <div className='page_container'>
       <div className='background_image'>
          <div className='navbar_accueil'>
            <NavBar />
          </div>
        </div>

        <div className='div_bande_banniere'>
          <div className='div_bande_banniere_texte'>
            <h2>Asset 3D pour le jeu vidéo</h2>
            <p>Modélisation d'assets 3D pour le jeu vidéo</p>
              <div className='div_organise_tags'>            
                <div className='div_tags'>
                  <DivCustom label={"#Blender"} styleType={"tag_blanc"}/>                 
                </div>
            </div>
          </div>            
        </div>

        <div className='div_description'>
            <h4>Description</h4>
            <p>Cette section présente mes expérimentations en création d’assets 3D pour les jeux vidéo.</p>
        </div>

        <div className='div_tech_orga'>        
          <div className='div_tech'>
            <h4>Technologies</h4>
            <div className='range_tech'>
              <DivCustom label={"Blender"} styleType={"competences"} urlImage={"blender.png"} titreAlt={"Blender"}/>   
            </div>
          </div>
        </div>

        <div className='conteneur_demo_btn_fonctionnalites'>
          <div className='div_demo_btn_fonctionnalites'>
            <div className='div_demo'>
              <h4>Illustration de mes expérimentations</h4>
              <div className='demo'>
              <Slider images={images}></Slider> 
              </div>
            </div>
          </div>
        </div>


        
        
        <Footer></Footer>

      
    </div>
  );
};

export default Projet9;
