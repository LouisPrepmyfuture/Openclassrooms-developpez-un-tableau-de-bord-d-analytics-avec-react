import {React, useState,  useEffect} from "react"
import {useParams} from 'react-router-dom'
import getUser2 from "../services/fetchData/getDataMocks"
import getUser from "../services/fetchData/getData"
import UserAverage from "../composents/charts/average/userAverage";
import UserActivity from "../composents/charts/activity/userActivity"
import UserPerformance from "../composents/charts/performance/userPerformance";
import UserScore from "../composents/charts/score/userScore";
import NavBar from "../composents/navBar/navBar";
import icon_1 from '../assets/imgs/icon-1.png';
import icon_2 from '../assets/imgs/icon-2.png';
import icon_3 from '../assets/imgs/icon-3.png';
import icon_4 from '../assets/imgs/icon-4.png';
import logo from '../assets/imgs/logo.png';
import copiryght from '../assets/imgs/Copiryght-2020.png';
import Card from "../composents/ui/card";

function Dashboard() {

	const { id } = useParams();

	const user = getUser2.getUserMainData(id)
	user.averageSession = getUser2.getUserAverageSession(id)
	user.activity = getUser2.getUserActivity(id)
	user.performance = getUser2.getUserPerformance(id)

	const [userData, setUserData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = 12; 
        const data = await getUser.getUserMainData(userId);
				data.performance = await getUser.getUserPerformance(userId)
				data.averageSession = await getUser.getUserAverageSession(userId)
				data.activity = await getUser.getUserActivity(userId)
        setUserData(data);
				setIsLoading(false);
      } catch (error) {
        console.error(error);
				setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);
  return (
		<>
		<NavBar>
		<ul>
			<li><a href="test"><img src={logo} alt="Logo" height={57}/></a></li>
			<li><a href="test">Accueil</a></li>
			<li><a href="test">Profil</a></li>
			<li><a href="test">Réglage</a></li>
			<li><a href="test">Communauté</a></li>
		</ul> 
		</NavBar>
		<div className="d-flex">
			<NavBar position="left">
				<ul>
					<li className="pb-2"><a href="test"><img src={icon_1} alt="icon_1"/></a></li>
					<li className="pb-2"><a href="test"><img src={icon_2} alt="icon_2"/></a></li>
					<li className="pb-2"><a href="test"><img src={icon_3} alt="icon_3"/></a></li>
					<li className="pb-2"><a href="test"><img src={icon_4} alt="icon_4"/></a></li>
				</ul> 
				<img src={copiryght} alt="copiryght"/>
			</NavBar>
			<div className="container-dashboard">
				<div className="row">
				{isLoading ? (
					<div>faire une animation</div>
				): userData ? (
					<>
						<div className="w100">
								<h1>Bonjour {userData.userInfos.firstName} </h1>
								<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
						</div>
							<div className="row w75">
							<div className="w100">
								<UserActivity data={userData.activity} />
							</div>
							<div className="row w100">
								<div className="w33">
									<UserAverage data={userData.averageSession} />
								</div>
								<div className="w33">
									<UserPerformance data={user.performance} />
								</div>
								<div className="w33">
									<UserScore />
								</div>
							</div>
						</div>
						<div className="w25">
							<Card	data={userData.keyData}/>
						</div>
					</>
				) : (
					<h2>Erreur </h2>
				)}
				
				</div>
			</div>
		</div>
	
		</>
  )
}

export default Dashboard