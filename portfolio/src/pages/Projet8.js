import React from 'react';
import '../styles/global_style.css';
import '../styles/pages/page_projet.css';
import NavBar from '../components/NavBar.js';
import DivCustom from '../components/DivCustom.js';
import VideoPlayer from '../components/VideoPlayer.js';

const Projet8 = () => {

  return (

    <div className='page_container'>
      <div className='imageBackgroundContainer'>

     
      
          <div className='navbar_accueil'>
            <NavBar />
          </div>
       
       <div className='containerTitreDescription'>
       <div className='div_bande_banniere'>
          <div className='div_bande_banniere_texte'>
          <h2>Animation 3D loader</h2>
              <div className='div_organise_tags'>            
                <div className='div_tags'>
                <DivCustom label={"#Blender"} styleType={"tag_blanc"}/>
                <DivCustom label={"#Illustartor"} styleType={"tag_blanc"}/>
                </div>
            </div>
          </div>            
        </div>
        
        <div className='div_description'>
        <p>Réalisation d'une animation 3D pour une page de chargement, optimisée pour les sites et applications web.</p>
        </div>
       </div>
        <div className='backgroundTechProjet'>

        <div className='div_tech_orga'>        
          <div className='div_tech'>
          <h4>Logiciels</h4>
            <div className='range_tech'>
            <DivCustom label={"Blender"} styleType={"competences"} urlImage={"blender.png"} titreAlt={"Blender"}/>
              <DivCustom label={"Illustrator"} styleType={"competences"} urlImage={"illustrator.png"} titreAlt={"Illustrator"}/>                
            </div>
          </div>       
        </div>

        <div className='conteneur_demo_btn_fonctionnalites'>
          <div className='div_demo_btn_fonctionnalites'>
            <div className='div_demo'>
            <h4>Vidéo produite</h4>
            <VideoPlayer 
                  videoSrc="art/engrenages.mp4" 
                  poster="engrenage.png" 
                />     
            </div>
          </div>
        </div>
        </div>
        </div>
    </div>
  );
};

export default Projet8;
