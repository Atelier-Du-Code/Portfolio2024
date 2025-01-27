import React from 'react';
import '../styles/global_style.css';
import '../styles/pages/page_projet.css';
import NavBar from '../components/NavBar.js';
import DivCustom from '../components/DivCustom.js';
import ButtonCustom from '../components/ButtonCustom.js';
import VideoPlayer from '../components/VideoPlayer.js';

const Projet2 = () => {



  return (

    <div className='page_container'>
      <div className='imageBackgroundContainer'>

     
      
          <div className='navbar_accueil'>
            <NavBar />
          </div>
       
       <div className='containerTitreDescription'>
       <div className='div_bande_banniere'>
          <div className='div_bande_banniere_texte'>
            <h2>GueoGuezzer</h2>
              <div className='div_organise_tags'>            
                <div className='div_tags'>
                  <DivCustom label={"#Front-end"} styleType={"tag_blanc"}/>
                  <DivCustom label={"#API tiers"} styleType={"tag_blanc"}/>
                  <DivCustom label={"#ReactTS"} styleType={"tag_blanc"}/>
                  <DivCustom label={"#Next"} styleType={"tag_blanc"}/>
                  <DivCustom label={"#Tailwind"} styleType={"tag_blanc"}/>
                </div>
            </div>
          </div>            
        </div>
        
        <div className='div_description'>
          <p>Développement d'un jeu de localisation interactif où les joueurs doivent deviner un lieu sur une carte à partir d'une image de l'environnement.</p>
        </div>
       </div>
        <div className='backgroundTechProjet'>

        <div className='div_tech_orga'>        
          <div className='div_tech'>
            <h4>Technologies</h4>
            <div className='range_tech'>
            <DivCustom label={"ReactTS"} styleType={"competences"} urlImage={"react.png"} titreAlt={"ReactTS"}/>
              <DivCustom label={"Next"} styleType={"competences"} urlImage={"next.png"} titreAlt={"ReactTS"}/>
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
            <h4>Vidéo de démonstration</h4>
            <div className='demo'>
                <VideoPlayer 
                  videoSrc="geoguezzer.webm" 
                  poster="symfony.png" 
                /> 
            </div>           
            

            <div className='div_buttonCustom'>
            <ButtonCustom label="GitHub" styleType="lien_adresse" lien_adresse={"https://github.com/Atelier-Du-Code/GeoGuezzer"} />
             </div>
            </div>
          </div>
        </div>

        <div className='containerFonctionnaliteSprints'>
        <div className='conteneur_demo_btn_fonctionnalites'>
          <div className='div_demo_btn_fonctionnalites'>
            <div className='div_fonctionnalites'>
              <div className='fonctionalites'>
              <h4> Fonctionnalités développées </h4>
                <p> - Consommation de l'API leaflet pour l'intégration d'une carte interactive ainsi que du feedback de performance.</p>
                <p> - Consommation de l'API de OpenStreetMap pour la récupération des données géographiques (images répertoriées avec leurs coordonnées GPS). </p>
                <p> - Calcul et affichage de la précision de la réponse du joueur ( distance entre la localisation proposée par le joueur et la localisation réelle ).</p>
              </div>
            </div>

          </div>        
        </div>
        </div>
       

        </div>
        </div>
       
    </div>
  );
};

export default Projet2;
