import React, { useEffect } from 'react';

import '../styles/global_style.css';
import '../styles/pages/accueil.css';

import NavBar from '../components/NavBar.js';
import ButtonCustom from '../components/ButtonCustom.js';
import CardCustom from '../components/CardCustom.js';
import DivCustom from '../components/DivCustom.js';

const Accueil = () => { 
  
  const btnCvClick = () => {

    console.log("cv téléchargé");

  }

  return (
    <div>

      <div id="accueil" >

        <div className='background-image'>
          <div className='navbar_accueil'>
            <NavBar />
          </div>
          <div className='centreur dessend'>
            <div className='info_gauche'>

            </div>
            <div className='info_milieu'>
              <div className='photo_profil'></div>
            </div>
            <div className='info_droite'>
          

            </div>

          </div>
        </div>  
        
        
        <div className='container_infos_profil'>

          <div className='centreur'>
            
            <div className='info_gauche child1 dessend_mobile'>

              <div className='colle_a_droite'>
                <p className='texteGras'>Manon Avaullée</p><br/>
                <p className='texteGras'>Architecte logiciel et application web</p><br/>
                <p className=''>4ème année cursus MSC - Epitech Bordeaux</p><br/>

                <div className='container_button_infos'>
                  <a href="/CV_Manon_AVAULLEE.pdf" download="CV_Manon_Avaullée.pdf">
                    <ButtonCustom label="CV" onClick={btnCvClick} styleType='banniere' />
                  </a>
                  
            <ButtonCustom label="LinkedIn" styleType="lien_adresse" lien_adresse={"https://www.linkedin.com/in/manon-avaull%C3%A9e-5335a7228/"} />
          
                </div>
              </div>
              
            </div>

            <div className='info_milieu child2'>
            </div>

            <div className='info_droite child3'>
                <p className='texteGras'>Recherche d'alternance : Novembre 2024</p>
                <p className='texteRapproche'>3 jours entreprise - 2 jours d'école</p>
                <p><span className='texteGras'>Mail</span> : manon.avaullee@epitech.eu</p>
                <p className='texteRapproche'><span className='texteGras'>Tél</span> :  06 09 18 29 89</p>
            </div>  
          </div>
        </div>   
      </div>

      <div id="bio" className='block_bio'>
        <h2 className='texte_centre'>A propos</h2>

        <div className='div_centre_exterieur'>

          <div className='div_centre_interieur'>
            <p className=''>
              
            Suite à un BTS SIO SLAM et une première année dans le cursus MSC d'Epitech Bordeaux, 
            j'ai pu acquérir une expérience dans les langages et frameworks de développement web 
            (HTML/CSS/JS, ReactJS/TS, NodeJs, React Native, Symfony, PHP, Tailwind), 
            la création et la consommation d'API, la conception et la gestion de 
            bases de données relationnelles et non relationnelles (SQL et MongoDB), 
            ainsi que dans les langages de programmation orientée objet (Java, C# et C++).

            <br/>
            <br/>

            Vous trouverez dans ce portfolio des projets scolaires et personnels, en cours ou finalisés, qui illustrent mes connaissances.
            </p>

          </div>
         
        </div>

        <h2 className='texte_centre'>Soft skills</h2>
        <div className='div_centre_exterieur'>
          <div className='div_centre_interieur'> 

            <div className='div_bas'>

            <DivCustom label={"Curiosité"} styleType={"divSoftSkills"}/>
              <DivCustom label={"Autonomie"} styleType={"divSoftSkills"}/>
              <DivCustom label={"Esprit d'équipe"} styleType={"divSoftSkills"}/>

            </div>
          </div>
         
        </div>
       
      </div>
      <div id="projets" className='block_projets'>
        <h2>Mes projets</h2>

        <div className='grid'>
          {/* <h3>Développement informatique</h3> */}
         
          <div className='div_centre_exterieur'>

            <div className='div_centre_interieur_projet'>
              <div class="flex-container">
              
              <CardCustom  
                  Title="GeoGuezzer" 
                  urlImage="geoguezzer_carte.png" 
                  tagList={['Front-end', 'API tiers', 'NextJS', 'Tailwind', 'API tiers']}
                  descriptionCourte="Mini-jeu de recherche de position sur une carte."
                  route ="2"/>

              <CardCustom  
                  Title="CarePlant" 
                  urlImage="CarePlant/careplante-miniature.png" 
                  tagList={['WIP','Fullstack', 'ReactTS', 'Sass' , 'Node', 'Express', 'API', 'MongoDB']}
                  descriptionCourte="Réseau social dédié à l'échange de savoirs et de photos sur les plantes d'intérieur."
                  route ="3"/>

              <CardCustom  
                  Title="Mediateck86" 
                  urlImage="symfony_miniature.png" 
                  tagList={['Web', 'MVC', 'PHP', 'Symfony', 'Bootstrap', 'SQL',]}
                  descriptionCourte="Plateforme d'auto-formation en ligne de développement pour Mediateck86"
                  route ="4"/>

              <CardCustom  
                  Title="Ludophonie" 
                  urlImage="ludophonie_miniature.png" 
                  tagList={['Logiciel','MVC', 'C#', 'Winforms', 'SQL']}
                  descriptionCourte="Logiciel de perfectionnement de l'orthographe"
                  route ="6"/>

              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div id="competences" className='block_competences'>
      <h2>Mes Compétences</h2>

      <div className='grid'>         
          <div className='div_centre_exterieur'>
            <div className='div_centre_interieur_projet'>
              <div class="flex-container_competence">


                <div className='div1_competence'> 
                  <div className='div_haut_competence'>
                    <h4>Développement web</h4>
                  </div>

                  <div className='div_bas_competence'>
                    <div className='div_gauche_competence competence_gauche'>
                      
                    <DivCustom label={"HTML"} styleType={"competences"} urlImage={"html.png"} titreAlt={"html"}/>
                    <DivCustom label={"CSS"} styleType={"competences"} urlImage={"css.png"} titreAlt={"css"}/>
                    <DivCustom label={"JS"} styleType={"competences"} urlImage={"js.png"} titreAlt={"javascript"}/>
                    <DivCustom label={"TypeScript"} styleType={"competences"} urlImage={"typescript.png"} titreAlt={"typescript"}/>
                    <DivCustom label={"PHP"} styleType={"competences"} urlImage={"php.png"} titreAlt={"php"}/>

                    
                    </div>

                    <div className='div_droite_competence competence_droite'>                     
                      
                    <DivCustom label={"React"} styleType={"competences"} urlImage={"react.png"} titreAlt={"React"}/>
                    <DivCustom label={"Tailwind"} styleType={"competences"} urlImage={"tailwind.png"} titreAlt={"Tailwind"}/>                   
                    <DivCustom label={"Symfony"} styleType={"competences"} urlImage={"symfony.png"} titreAlt={"Symfony"}/>
                    <DivCustom label={"Java"} styleType={"competences"} urlImage={"java.png"} titreAlt={"java"}/>
                    <DivCustom label={"C#"} styleType={"competences"} urlImage={"c.png"} titreAlt={"c#"}/>

                    </div>

                    
                  </div>
                  

                </div>

                <div className='div2_competence'> 
                  <div className='div_haut_competence'>
                    <h4>Web-Design</h4>
                  </div>

                  <div className='div_bas_competence'>
                    <div className='div_gauche_competence competence_gauche'>
                      <DivCustom label={"Figma"} styleType={"competences"} urlImage={"figma.png"} titreAlt={"Figma"}/>
                      <DivCustom label={"Ilustrator"} styleType={"competences"} urlImage={"illustrator.png"} titreAlt={"Illustrator"}/>
                      
                     
                    </div>

                    <div className='div_droite_competence competence_droite'>                     
                      
                      <DivCustom label={"Blender"} styleType={"competences"} urlImage={"blender.png"} titreAlt={"Blender"}/>
                      <DivCustom label={"Photoshop"} styleType={"competences"} urlImage={"photoshop.png"} titreAlt={"Photoshop"}/>

                    </div>

                    
                  </div>
                  

                </div>
                              
              </div>
            </div>
          </div>

        </div>



      </div>

      <div className='footer'>
        <p></p>
      </div>
    </div>
  );
};

export default Accueil;
