import React from 'react';
import '../styles/global_style.css';
import '../styles/pages/page_projet.css';
import NavBar from '../components/NavBar.js';
import DivCustom from '../components/DivCustom.js';
import VideoPlayer from '../components/VideoPlayer.js';
import ButtonCustom from '../components/ButtonCustom.js';
import Footer from '../components/Footer.js';



const Projet5 = () => {
  return (



    <div className='page_container'>
       <div className='background_image'>
          <div className='navbar_accueil'>
            <NavBar />
          </div>
        </div>

        <div className='div_bande_banniere'>
          <div className='div_bande_banniere_texte'>
            <h2>Froggy</h2>
            <p>Jeu de localisation interactif</p>
              <div className='div_organise_tags'>            
                <div className='div_tags'>
                  <DivCustom label={"#Web"} styleType={"tag_blanc"}/>
                  <DivCustom label={"#API externe"} styleType={"tag_blanc"}/>
                  <DivCustom label={"#ReactTS"} styleType={"tag_blanc"}/>
                  <DivCustom label={"#Next"} styleType={"tag_blanc"}/>
                  <DivCustom label={"#Tailwind"} styleType={"tag_blanc"}/>
                </div>
            </div>
          </div>            
        </div>

       

        <div className='div_description'>
            <h4>Description</h4>
            <p>Développement d'un jeu de localisation interactif où les joueurs doivent deviner un lieu sur une carte à partir d'une image de l'environnement. carte à partir d'une image de l'environnement. carte à partir d'une image de l'environnement. carte à partir d'une image de l'environnement. carte à partir d'une image de l'environnement. carte à partir d'une image de l'environnement. carte à partir d'une image de l'environnement. carte à partir d'une image de l'environnement. carte à partir d'une image de l'environnement. carte à partir d'une image de l'environnement.</p>
        </div>

        <div className='div_tech_orga'>        
          <div className='div_tech'>
            <h4>Technologies</h4>
            <div className='range_tech'>
              <DivCustom label={"ReactTS"} styleType={"competences"} urlImage={"react.png"} titreAlt={"ReactTS"}/>
              <DivCustom label={"Next"} styleType={"competences"} urlImage={"typescript.png"} titreAlt={"ReactTS"}/>
              <DivCustom label={"Typescript"} styleType={"competences"} urlImage={"typescript.png"} titreAlt={"Next"}/>                   
              <DivCustom label={"Tailwind"} styleType={"competences"} urlImage={"tailwind.png"} titreAlt={"Tailwind"}/>                   
            </div>
          </div>
          <div className='div_tech'>
            <h4>Organisation et maquettage</h4>
            <div className='range_tech'>
              <DivCustom label={"Trello"} styleType={"competences"} urlImage={"trello.png"} titreAlt={"Trello"}/>
              <DivCustom label={"Figma"} styleType={"competences"} urlImage={"figma.png"} titreAlt={"Figma"}/>
                                
            </div>           
          </div> 
        </div>

        <div className='conteneur_demo_btn_fonctionnalites'>
          <div className='div_demo_btn_fonctionnalites'>
            <div className='div_demo'>
              <h4>Démonstration</h4>
              <div className='demo'>
                <VideoPlayer 
                  videoSrc="ludophonie.mp4" 
                  poster="symfony.png" 
                />
              </div>
            </div>

            <div className='div_buttonCustom'>
              <ButtonCustom label="GitHub" styleType="lien_adresse" lien_page={"/Projet3"} />
              <ButtonCustom label="Jouer" styleType="lien_page" lien_page={"/Projet3"} />
            </div>
          </div>
        </div>


        <div className='conteneur_demo_btn_fonctionnalites'>
          <div className='div_demo_btn_fonctionnalites'>
            <div className='div_fonctionnalites'>
              <div className='fonctionalites'>
                <h4> Fonctionnalités développées </h4>
                <p> - Consommation de l'API leaflet pour l'intégration d'une carte interactive ainsi que du feedback de performance</p>
                <p> - Consommation de l'API de OpenStreetMap pour la récupération des données géographiques (images répertoriées avec leurs coordonnées GPS) </p>
                <p> - Calcul et affichage de la précision de la réponse du joueur en fonction de la distance entre sa réponse et la position réelle</p>
              
              </div>
            </div>

            <div className='div_fonctionnalites'>
              <div className='fonctionalites'>
                <h4> Défis rencontrés et solutions </h4>
                <p> - Gestion des appels API pour obtenir les données en temps réel tout en maintenant la réactivité de l'application</p>
                <p> - Adaptation de l'affichage des cartes pour une expérience utilisateur satisfaisante</p>
              </div>
                
            </div>

           
          </div>
        
        </div>
        <Footer></Footer>

      
    </div>
  );
};

export default Projet5;
