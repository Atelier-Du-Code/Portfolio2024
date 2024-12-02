import React from 'react';
import '../styles/global_style.css';
import '../styles/pages/page_projet.css';
import NavBar from '../components/NavBar.js';
import DivCustom from '../components/DivCustom.js';
import VideoPlayer from '../components/VideoPlayer.js';
import ButtonCustom from '../components/ButtonCustom.js';
import Footer from '../components/Footer.js';



const Projet8 = () => {
  return (



    <div className='page_container'>
       <div className='background_image'>
          <div className='navbar_accueil'>
            <NavBar />
          </div>
        </div>

        <div className='div_bande_banniere'>
          <div className='div_bande_banniere_texte'>
            <h2>Animation 3D loader</h2>
            <p>Création d’une animation 3D pour le loader d’un site ou d’une application web.</p>
              <div className='div_organise_tags'>            
                <div className='div_tags'>
                  <DivCustom label={"#Blender"} styleType={"tag_blanc"}/>
                  <DivCustom label={"#Illustartor"} styleType={"tag_blanc"}/>
                </div>
            </div>
          </div>            
        </div>

       

        <div className='div_description'>
            <h4>Description</h4>
            <p>Réalisation d'une animation 3D pour une page de chargement, optimisée pour les sites et applications web.</p>
        </div>

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
              <div className='demo'>
                <VideoPlayer 
                  videoSrc="art/engrenages.mp4" 
                  poster="engrenage.png" 
                />
              </div>
            </div>
          </div>
        </div>
        
        <Footer></Footer>

      
    </div>
  );
};

export default Projet8;
