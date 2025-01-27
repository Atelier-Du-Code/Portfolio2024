import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/ButtonCustom.css';

const ButtonCustom = ({ label, route, styleType, disabled = false, lien_page, lien_adresse }) => {
  const navigate = useNavigate();

  const btnClickProjet = () => {
    console.log("Clic pour changer de page");

    let targetRoute = '/';
    switch (route) {
      case '1':
        targetRoute = '/projet1';
        break;
      case '2':
        targetRoute = '/projet2';
        break;
      case '3':
        targetRoute = '/projet3';
        break;
      case '4':
        targetRoute = '/projet4';
        break;
      case '5':
        targetRoute = '/projet5';
        break;
      case '6':
        targetRoute = '/projet6';
        break;
      case '7':
        targetRoute = '/projet7';
        break;
      case '8':
        targetRoute = '/projet8';
        break;
      case '9':
        targetRoute = '/projet9';
        break;
      default:
        break;
    }

    navigate(targetRoute);

  };

  const btnClickLien_page = () => {
    navigate(lien_page);
  };

  const btnClickLien_adresse = () => {
    window.open(lien_adresse, '_blank');
  };

  return (
    <>
      {styleType === 'banniere' ? (
        <button
          className="btn banniere"
          onClick={btnClickProjet}
          disabled={disabled}
        >
          {label}
        </button>
      ) : styleType === 'lien_page' ? (
        <button
          className="btn"
          onClick={btnClickLien_page}
          disabled={disabled}
        >
          {label}
        </button>
      ) : styleType === 'lien_adresse' ? (
        <button
          className="btn"
          onClick={btnClickLien_adresse}
          disabled={disabled}
        >
          {label}
        </button>
      ) : (
        <button
          className="btn"
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
