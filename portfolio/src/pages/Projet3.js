import React from 'react';
import '../styles/global_style.css';
import '../styles/pages/page_projet.css';
import NavBar from '../components/NavBar.js';
import DivCustom from '../components/DivCustom.js';
import ButtonCustom from '../components/ButtonCustom.js';
import Footer from '../components/Footer.js';
import DivImage from '../components/DivImage.js';
import Slider from '../components/Slider.js';




const Projet3 = () => {

  const images = [
    "/CarePlant/authentification.png",
    "/CarePlant/acceuil.png",
    "/CarePlant/fiche.png",
    "/CarePlant/Herbier.png",
    "/CarePlant/galerie.png",
    "/CarePlant/questionnaire.png",  
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
            <p>CarePlant est une plateforme sociale dédiée aux passionnés de plantes d'intérieur. <br/>Elle permet aux utilisateurs de partager leurs connaissances, leurs astuces et des photos de leurs plantes préférées.</p>
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
              <ButtonCustom label="GitHub" styleType="lien_adresse" lien_adresse={"https://github.com/Atelier-Du-Code/CarePlante/tree/main"} />
            </div>
          </div>
        </div>

        <div className='conteneur_demo_btn_fonctionnalites'>
          <div className='div_demo_btn_fonctionnalites'>
            <div className='div_fonctionnalites'>
              <div className='fonctionalites'>
                <h4> Fonctionnalité développées </h4>
                <p> - Côté back-end : CURD des plantes et de ses attributs avec leurs tests unitaires </p>
                <p> - Côté front : Expérimentation d'une scene en Three.js en vue de l'implémentation de modèles 3D pour chacune des plantes répertoriées.</p>
              </div>
            </div>

            <div className='div_fonctionnalites'>
              <div className='fonctionalites'>
                <h4> Fonctionnalités à venir </h4>
                <p> - CRUD des utilisateurs ainsi que l'authentification </p>
                <p> - CRUD des plantes adoptées par un utilisateur </p>
                <p> - Système de like et dislike de mise en valeur des photos partagées par les utilisateurs </p>
                <p> - Ajout des commentaires sous les photos partagées </p>
                <p> - Ajout de la modération des commentaires </p>
                <p> - Développement de l'application mobile permettant le suivis des plantes de la liste des plantes possédées avec l'envoi de notification de rappel pour le suivis de l'arrosage des plantes suivant leur besoin. </p>
                <p> - Développement d'un chatbot capable de répondre aux questions des utilisateurs sur l'entretien des plantes, en se basant sur les données de la bibliothèque.</p>
              </div>
                
            </div>

           
          </div>
        
        </div>
        <Footer></Footer>

    </div>
  );
};

export default Projet3;
