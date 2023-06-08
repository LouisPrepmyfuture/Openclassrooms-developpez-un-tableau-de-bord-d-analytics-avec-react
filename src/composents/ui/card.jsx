import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import carbohydrate from '../../assets/imgs/calories-icon.png';
import gluiside from '../../assets/imgs/gluisides-icon.png';
import lipid from '../../assets/imgs/lipides-icon.png';
import protein from '../../assets/imgs/protein-icon.png';

const Card = ({data}) => {
  const [user, setUser] = useState(data);

	const CardStyle = styled.div`
		height: 124px;
		width: 258px;
		border-radius: 5px;
		box-shadow: rgba(0, 0, 0, 0.02) 0px 2px 4px 0px;
		background-color: rgb(251, 251, 251);
		padding: 32px;
		display: flex;
		align-items: center;
		margin-bottom: 20px;
		& img{
			width: 60px;
		}
	`
const addSrc = key =>{
	switch (key) {
		case "carbohydrate": 
			return gluiside
		case "calorie": 
			return lipid
		case "lipid": 
			return lipid
		case "protein": 
			return protein
		default:
			break;
	}
}
	
	const renderCards = () => {
    return Object.keys(user).map((Key) => {
      const KeySupCount = Key.slice(0, -5); // Supprimer les 5 dernières lettres de la clé
      const valeur = user[Key];
      return (
        <CardStyle key={Key}>
					<img src={addSrc(KeySupCount)} alt="{KeySupCount}" />
					<div>
						<div className="card-title">{KeySupCount}</div>
						<div className="card-value">{valeur}</div>
					</div>
        </CardStyle>
      );
    });
  };

  return (
    <div>
     {renderCards(data)}
    </div>
  );
};

export default Card;
