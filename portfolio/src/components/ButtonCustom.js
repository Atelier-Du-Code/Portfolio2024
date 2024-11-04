import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/components/ButtonCustom.css'; // Fichier CSS pour le style du bouton

const ButtonCustom = ({ label, route, styleType, disabled = false, lien_page, lien_adresse}) => {

  const navigate = useNavigate();

  const btnClickProjet = () => {

    console.log("clic pour changer de page");

    switch (route) {

      case '1':
        navigate('/projet1');
        break;

      case '2':
        navigate('/projet2');
        break;

      case '3':
        navigate('/projet3');
        break;
      
      case '4':
        navigate('/projet4');
        break;
      
      case '5':
        navigate('/projet5');
        break;
      
      case '6':
        navigate('/projet6');
        break;
      
      case '7':
        navigate('/projet7');
        break;

      default:
        navigate('/');
        break;
    }

  }

  const btnClickLien_page = () => {
    navigate(lien_page);
  }

  const btnClickLien_adresse = () => {
    window.open(lien_adresse, '_blank');
  }

  return (
    <>
      {styleType === "banniere" ? (

          <button 
          className='btn banniere'
          onClick={btnClickProjet} 
          disabled={disabled}
          >
          {label}
          </button>        
      ) : styleType === "lien_page" ? (
        <button
          className='btn'
          onClick={btnClickLien_page}
          disabled={disabled}
        >
          {label}
        </button>
      ) : styleType === "lien_adresse" ? (
        <button
          className='btn'
          onClick={btnClickLien_adresse}
          disabled={disabled}
        >
          {label}
        </button>
      ) : (
        <button 
          className='btn'
          onClick={btnClickProjet} 
          disabled={disabled}
          >
          {label}
        </button>
      )}
    
    </>


    
  );
};

export default ButtonCustom;
