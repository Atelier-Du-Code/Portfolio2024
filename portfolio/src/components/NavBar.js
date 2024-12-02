import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import '../styles/global_style.css';
import '../styles/components/NavBar.css';
import ButtonCustom from './ButtonCustom';

const NavBar = () => {

  const btnCvClick = () => {

    console.log("cv téléchargé");

  }

  return (
    <div className='navbar'>      

        <div className='linkContainer_other estCache_830 estCache_720 estCache_520 estCache_340'>
          <p>PORTEFOLIO</p>
        </div>

        <div className='linkContainer_link'>

          <div className='estCache_340'>
             <p><Link to="/#accueil">Accueil</Link></p>
          </div>
         

          <div className='estCache_720 estCache_520 estCache_340'>
              <p><Link to="/#bio">Bio</Link></p>
          </div>

          <div className='estCache_520 estCache_340'>
            <div className='dropdown '>
                <button className='dropdownButton'>
                  <p><Link to="/#projets">Mes projets</Link></p>
                </button>
                <div className='dropdownContent'>                 
                  <p><Link to="/projet2">GeoGuezzer</Link></p>
                  <p><Link to="/projet3">CarePlant</Link></p>
                  <p><Link to="/projet4">Mediatech86</Link></p>                 
                  <p><Link to="/projet6">Ludophonie</Link></p>  
                  <p><Link to="/projet7">De l'Essence à la Saveur</Link></p>  
                  <p><Link to="/projet8">Animation 3D loader</Link></p>    
                  <p><Link to="/projet9">Asset 3D pour le jeu vidéo</Link></p>            
                  
                </div>
              </div>
          </div>

          <div className='estCache_720 estCache_520 estCache_340'>
            
          <p><Link to="/#competences">Compétences</Link></p>
        

          </div>
        </div>

        <div className='linkContainer_btn'>
            <div className='btnCV'>
              <a href="/CV_Manon_AVAULLEE.pdf" download="CV_Manon_Avaullée.pdf">
              <ButtonCustom label="Télécharger mon CV" onClick={btnCvClick} styleType='' />
              </a>
            </div>
        </div>

      
     

      
    </div>
  );
};

export default NavBar;
