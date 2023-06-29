import React, { useState } from "react";
import calories from '../../assets/imgs/calories-icon.png';
import gluiside from '../../assets/imgs/gluisides-icon.png';
import lipid from '../../assets/imgs/lipides-icon.png';
import protein from '../../assets/imgs/protein-icon.png';
import "./style.css"


const Card = ({data}) => {
  const [user, setUser] = useState(data);

	const addSrc = key =>{
		switch (key) {
			case "carbohydrate": 
				return gluiside
			case "calorie": 
				return calories
			case "lipid": 
				return lipid
			case "protein": 
				return protein
			default:
				break;
		}
	}

	const translateFR = title =>{
		switch (title) {
			case "carbohydrate": 
				return "Glucides"
			case "calorie": 
				return "Calories"
			case "lipid": 
				return "Lipides"
			case "protein": 
				return "Proteines"
			default:
				break;
		}
	}

	const renderCards = () => {
    return Object.keys(user).map((Key) => {
      const KeySupCount = Key.slice(0, -5);

      const value = user[Key]; 
      return (
        <div className="information-card" key={Key}>
					<img src={addSrc(KeySupCount)} alt="{KeySupCount}"/>
					<div>
						<h4 className="value">{KeySupCount === "calorie" ? (value + "KCal") : (value + "g") }</h4>
						<span className="title">{translateFR(KeySupCount)}</span>
					</div>
        </div>
      );
    });
  };

  return (
    <div className="content-info-card">
     {renderCards(data)}
    </div>
  );
};

export default Card;
