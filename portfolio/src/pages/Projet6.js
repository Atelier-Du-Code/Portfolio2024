import React from 'react';
import '../styles/global_style.css';
import '../styles/pages/page_projet.css';
import NavBar from '../components/NavBar.js';
import DivCustom from '../components/DivCustom.js';
import VideoPlayer from '../components/VideoPlayer.js';
import ButtonCustom from '../components/ButtonCustom.js';
import Footer from '../components/Footer.js';



const Projet6 = () => {
  return (



    <div className='page_container'>
       <div className='background_image'>
          <div className='navbar_accueil'>
            <NavBar />
          </div>
        </div>

        <div className='div_bande_banniere'>
          <div className='div_bande_banniere_texte'>
            <h2>Ludophonie</h2>
            <p>Application de perfectionnement en orthographe</p>
              <div className='div_organise_tags'>            
                <div className='div_tags'>
                  <DivCustom label={"#Logiciel"} styleType={"tag_blanc"}/>
                  <DivCustom label={"#MVC"} styleType={"tag_blanc"}/>
                  <DivCustom label={"#C#"} styleType={"tag_blanc"}/>
                  <DivCustom label={"#Winforms"} styleType={"tag_blanc"}/>
                  <DivCustom label={"#SQL"} styleType={"tag_blanc"}/>
                </div>
            </div>
          </div>            
        </div>

       

        <div className='div_description'>
            <h4>Description</h4>
            <p>Je travaille pour le cabinet d'orthophonie Mathilde Fort, où je développe une application de bureau en C# avec architecture MVC et base de données MySQL. Cette application permettra aux patients de s'exercer entre les consultations via des mini-jeux et offrira un espace de gestion pour le praticien, incluant la gestion des jeux, des patients et des statistiques.</p>
        </div>

        <div className='div_tech_orga'>        
          <div className='div_tech'>
            <h4>Technologies</h4>
            <div className='range_tech'>
              <DivCustom label={"C#"} styleType={"competences"} urlImage={"react.png"} titreAlt={"ReactTS"}/>
            </div>
          </div>
          <div className='div_tech'>
            <h4>Organisation et maquettage</h4>
            <div className='range_tech'>
              <DivCustom label={"Trello"} styleType={"competences"} urlImage={"trello.png"} titreAlt={"Trello"}/>                
            </div>           
          </div> 
        </div>

        <div className='conteneur_demo_btn_fonctionnalites'>
          <div className='div_demo_btn_fonctionnalites'>
            <div className='div_demo'>
              <h4>Vidéo de présentation</h4>
              <div className='demo'>
                <VideoPlayer 
                  videoSrc="ludophonie.mp4" 
                  poster="symfony.png" 
                />
              </div>
            </div>

            <div className='div_buttonCustom'>
              <ButtonCustom label="GitHub" styleType="lien_adresse" lien_page={"/Projet3"} />
             
            </div>
          </div>
        </div>
        <Footer/>

      
    </div>
  );
};

export default Projet6;
