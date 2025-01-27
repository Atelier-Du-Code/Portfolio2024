import React from 'react';
import '../styles/global_style.css';
import '../styles/pages/page_projet.css';
import NavBar from '../components/NavBar.js';
import DivCustom from '../components/DivCustom.js';
import ButtonCustom from '../components/ButtonCustom.js';
import Footer from '../components/Footer.js';
import Slider from '../components/Slider.js';

const Projet3 = () => {

  const images = [
    "/CarePlant/Accueil.png",
    "/CarePlant/publication.png",
    "/CarePlant/Fiche_plante.png",
    "/CarePlant/Herbier.png",
    "/CarePlant/Questionnaire_accueil.png",  
    "/CarePlant/Questionnaire_p1.png",  
    "/CarePlant/Questionnaire_p2.png",  
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
            <h2>CarePlant</h2>
              <div className='div_organise_tags'>            
                <div className='div_tags'>
                <DivCustom label={"#Work in progress"} styleType={"tag_blanc"}/> 
                  <DivCustom label={"#Web"} styleType={"tag_blanc"}/>                  
                  <DivCustom label={"#Sass"} styleType={"tag_blanc"}/>
                  <DivCustom label={"#Node"} styleType={"tag_blanc"}/>
                  <DivCustom label={"#Express"} styleType={"tag_blanc"}/>
                  <DivCustom label={"#API"} styleType={"tag_blanc"}/>
                  <DivCustom label={"#MongoDB"} styleType={"tag_blanc"}/>
                  <DivCustom label={"#tests unitaires"} styleType={"tag_blanc"}/>
                </div>
            </div>
          </div>            
        </div>
        
        <div className='div_description'>
           
            <p>CarePlant est une plateforme sociale dédiée aux passionnés de plantes d'intérieur. Elle permet aux utilisateurs de partager leurs connaissances, leurs astuces et des photos de leurs plantes préférées.</p>
        </div>
       </div>
        <div className='backgroundTechProjet'>

        <div className='div_tech_orga'>        
          <div className='div_tech'>
            <h4>Technologies</h4>
            <div className='range_tech'>
              <DivCustom label={"ReactTS"} styleType={"competences"} urlImage={"react.png"} titreAlt={"ReactTS"}/>              
              <DivCustom label={"CSS - Sass"} styleType={"competences"} urlImage={"css.png"} titreAlt={"Tailwind"}/>
              <DivCustom label={"MongoDB"} styleType={"competences"} urlImage={"mongodb.png"} titreAlt={"MongoDB"}/>                   
            </div>
          </div>
          <div className='div_tech'>
            <h4>Maquettage et génération d'images</h4>
            <div className='range_tech'>
             
              <DivCustom label={"Figma"} styleType={"competences"} urlImage={"figma.png"} titreAlt={"Figma"}/>
              <DivCustom label={"ChatGPT"} styleType={"competences"} urlImage={"ChatGPT.png"} titreAlt={"Dalle"}/>
                                
            </div>           
          </div> 
        </div>

        <div className='conteneur_demo_btn_fonctionnalites'>
          <div className='div_demo_btn_fonctionnalites'>
            <div className='div_demo'>
              <h4>Quelques visuels de la maquette Figma</h4>
              <Slider images={images}></Slider>            
            

            <div className='div_buttonCustom'>
              <ButtonCustom label="GitHub" styleType="lien_adresse" lien_adresse={"https://github.com/Atelier-Du-Code/CarePlant"} />
            </div>
            </div>
          </div>
        </div>

        <div className='containerFonctionnaliteSprints'>
        <div className='conteneur_demo_btn_fonctionnalites'>
          <div className='div_demo_btn_fonctionnalites'>
            <div className='div_fonctionnalites'>
              <div className='fonctionalites'>
                <h4> Sprint effectués et en cours </h4>
                <p> - Préparation du projet : Mise en place de la charte graphique, choix des technologies, mise en place du déploiement continu, mise en place des tâches (issues).</p>
                <p> - Sprint 1 : Développement de l'herbier virtuel, base de données décrivant les caractéristiques botaniques et le biotope optimal des plantes d'intérieur ou de jardin.</p>
              </div>
            </div>

            <div className='div_fonctionnalites'>
              <div className='fonctionalites'>
                <h4> Les sprints à venir </h4>
                <p> - Sprint 2 : Authentification et création du profil utilisateur. </p>
                <p> - Sprint 3 : Gestion des plantes de l'utilisateur. </p>
                <p> - Sprint 4 : Page d'accueil. </p>
                <p> - Sprint 5 : Questionnaire sur l'environnement futur de la plante / Filtrage multi-critères.</p>
                <p> - Sprint 6 : Gestion des favoris (plantes).</p>
                <p> - Sprint 7 : Système de publication et de "like/dislike". </p>
                <p> - Sprint 8 : Fil d'actualité.</p>
                <p> - Sprint 9 : Ajout de commentaires pour chacune des publications. </p>
                <p> - Sprint 10 : Système de modération automatique des commentaires.</p>
                <p> - Sprint 11 : Système de suivi d'autres utilisateurs </p>
                <p> - Sprint 12 : Recommandation d'évènements, d'enseigne ou de matériels, sponsorisés ou pas. </p>
                <p> - Sprint 13 : Kits du débutant et du planteur de pépins. </p>
                <p> - Sprint 14 : Chatbot qui répond aux questions des utilisateurs sur l'entretien des plantes. </p>
                <p> - Sprint 15 : Système de recommandation des publications du fil d'actualité. </p>
                <p> - Sprint 16 : Application mobile qui envoie des notifications pour l'arrosage des plantes de l'utilisateur.</p>
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

export default Projet3;
