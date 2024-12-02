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
       <div className='background_image'>
          <div className='navbar_accueil'>
            <NavBar />
          </div>
        </div>

        <div className='div_bande_banniere'>
          <div className='div_bande_banniere_texte'>
            <h2>CarePlant</h2>
            <p>Réseau social dédié à l'échange de savoirs et de photos sur les plantes d'intérieur.</p>
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
            <h4>Description</h4>
            <p>CarePlant est une plateforme sociale dédiée aux passionnés de plantes d'intérieur. Elle permet aux utilisateurs de partager leurs connaissances, leurs astuces et des photos de leurs plantes préférées.</p>
        </div>

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
              <h4>Quelques visuels</h4>
              <Slider images={images}></Slider>            
            </div>

            <div className='div_buttonCustom'>
              <ButtonCustom label="GitHub" styleType="lien_adresse" lien_adresse={"https://github.com/Atelier-Du-Code/CarePlants_TS"} />
            </div>
          </div>
        </div>

        <div className='conteneur_demo_btn_fonctionnalites'>
          <div className='div_demo_btn_fonctionnalites'>
            <div className='div_fonctionnalites'>
              <div className='fonctionalites'>
                <h4> Sprint(s) effectués et en cours </h4>
                <p> - Préparation du projet : Mise en place de la charte graphique, choix des technologies, mise en place du déploiement continu, mise en place des issues GitHub</p>
                <p> - Sprint 1 : Développement de l'herbier et des fiches de plantes (image 3 et 4)/ Affichage des plantes et de leurs informations</p>
              </div>
            </div>

            <div className='div_fonctionnalites'>
              <div className='fonctionalites'>
                <h4> Sprints à venir </h4>
                <p> - Sprint 2 : Développement de l'authentification et du profil utilisateur. </p>
                <p> - Sprint 3 : Développement de la liste de plantes adoptées. </p>
                <p> - Sprint 4 : Développement de la page d'accueil. </p>
                <p> - Sprint 5 : Développement du questionnaire de recommandation / Filtrage multi-critères des plantes.</p>
                <p> - Sprint 6 : Développement de la liste de favoris. </p>
                <p> - Sprint 7 : Développement du fil d'actualité.</p>
                <p> - Sprint 8 : Développement du systeme de publication ainsi que le système de like et dislike. </p>
                <p> - Sprint 9 : Développement de l'ajout de commentaires pour chaqu'une des publications. </p>
                <p> - Sprint 10 : Création de la modération des commentaires.</p>
                <p> - Sprint 11 : Développpement du système de suivi d'autres utilisateurs </p>
                <p> - Sprint 12 : Développement de la recommandation d'évènements, d'enseigne ou de matériels, sponsorisé ou non. </p>
                <p> - Sprint 13 : Développement des kits du débutant et du planteur de pépins. </p>
                <p> - Sprint 14 : Développement d'un chatbox capable de répondre aux questions des utilisateurs sur l'entretien des plantes. </p>
                <p> - Sprint 15 : Développement d'un système de recomandation des publications à faire remonter en priorité dans le fil d'actualité. </p>
                <p> - Application Mobile : Développement de l'interface mobile permettant l'envoie de notifications pour l'arrosage des plantes adoptées suivant leurs besoins. </p>
              </div>                
            </div>           
          </div>        
        </div>
        <Footer></Footer>
    </div>
  );
};

export default Projet3;
