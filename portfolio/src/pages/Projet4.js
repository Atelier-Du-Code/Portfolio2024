import React from 'react';
import '../styles/global_style.css';
import '../styles/pages/page_projet.css';
import NavBar from '../components/NavBar.js';
import DivCustom from '../components/DivCustom.js';
import ButtonCustom from '../components/ButtonCustom.js';
import Slider from '../components/Slider.js';


const Projet4 = () => {

  const images = [
    "/mediateck86/accueil.png",
    "/mediateck86/principal non connecte.png",
    "/mediateck86/cours playlist.png",
    "/mediateck86/fiche formation.png",
    "/mediateck86/formations admin.png",
    "/mediateck86/nouvelle formation.png",
    "/mediateck86/admin playlist.png",
    "/mediateck86/admin categorie.png",
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
            <h2>Médiateck86</h2>
              <div className='div_organise_tags'>            
                <div className='div_tags'>
                <DivCustom label={"#Web"} styleType={"tag_blanc"}/>
                  <DivCustom label={"#MVC"} styleType={"tag_blanc"}/>
                  <DivCustom label={"#PHP"} styleType={"tag_blanc"}/>
                  <DivCustom label={"#Symfony"} styleType={"tag_blanc"}/>
                  <DivCustom label={"#Bootstrap"} styleType={"tag_blanc"}/>
                  <DivCustom label={"#SQL"} styleType={"tag_blanc"}/>
                  <DivCustom label={"#tests unitaires"} styleType={"tag_blanc"}/>
                </div>
            </div>
          </div>            
        </div>
        
        <div className='div_description'>
        <p>Je travaille en tant que technicien développeur junior pour l’ESN InfoTech Services 86.L'entreprise vient de remporter le marché pour différentes interventions au sein du réseau MediaTek86, dont certaines dans le domaine du développement d'application. Pour  ce projet, ma mission consistera à faire évoluer une application web, codée avec le Framework Symfony, exploitant une base de données relationnelle MySQL pour mettre à disposition et gérer les auto-formations en ligne proposées par MédiaTek86.</p>
        </div>
       </div>
        <div className='backgroundTechProjet'>

        <div className='div_tech_orga'>        
          <div className='div_tech'>
            <h4>Technologies</h4>
            <div className='range_tech'>
            <DivCustom label={"PHP"} styleType={"competences"} urlImage={"php.png"} titreAlt={"php"}/>
              <DivCustom label={"Symfony"} styleType={"competences"} urlImage={"symfony.png"} titreAlt={"Symfony"}/>  
              <DivCustom label={"Bootstrap"} styleType={"competences"} urlImage={"bootstrap.png"} titreAlt={"Bootstrap"}/>  
              <DivCustom label={"SQL"} styleType={"competences"} urlImage={"sql.png"} titreAlt={"SQL"}/>  
              </div>
          </div>
          <div className='div_tech'>
            <h4>Organisation et maquettage</h4>
            <div className='range_tech'>
             
              <DivCustom label={"Figma"} styleType={"competences"} urlImage={"figma.png"} titreAlt={"Figma"}/>
              <DivCustom label={"ChatGPT"} styleType={"competences"} urlImage={"ChatGPT.png"} titreAlt={"Dalle"}/>
                                
            </div>           
          </div> 
        </div>

        <div className='conteneur_demo_btn_fonctionnalites'>
          <div className='div_demo_btn_fonctionnalites'>
            <div className='div_demo'>
              <h4>Quelques visuels du site en ligne</h4>
              <Slider images={images}></Slider>            
            

            <div className='div_buttonCustom'>
            <ButtonCustom label="GitHub" styleType="lien_adresse" lien_adresse={"https://github.com/Atelier-Du-Code/MediatekFormation_Symfony_Definitif"} />
              <ButtonCustom label="Site en ligne (user)" styleType="lien_adresse" lien_adresse={"https://avaulleemanonportefolio.fr/mediatekformation/public/pageAccueil"} />
              <ButtonCustom label="Site en ligne (admin)" styleType="lien_adresse" lien_adresse={"https://avaulleemanonportefolio.fr/mediatekformation/public/login"} />
             </div>
            </div>
          </div>
        </div>

        <div className='containerFonctionnaliteSprints'>
        <div className='conteneur_demo_btn_fonctionnalites'>
          <div className='div_demo_btn_fonctionnalites'>
            <div className='div_fonctionnalites'>
              <div className='fonctionalites'>
              <h4> Travaux de développement </h4>
                <p> - Côté back-end : CRUD des différentes entités et authentification</p>
                <p> - Coté front : Ajout des différents tris et filtre sur les formations et sur les playlists</p>
                <p> - Création des tests unitaires et d'intégration</p>              
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

export default Projet4;
