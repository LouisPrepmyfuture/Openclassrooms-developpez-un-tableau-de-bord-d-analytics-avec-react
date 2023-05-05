import {React, useEffect} from "react"
import { useParams, useNavigate} from 'react-router-dom'
import users from '../mock/users'
import userAverageSession from '../mock/sessions'
import UserAverage from "../composents/graphique/userAverage"

function Dashboard() {
	const navigate = useNavigate();
	const { id } = useParams();
	
	const [ user ] = users.filter(data => data.id === parseInt(id))
	const [averageSession] = userAverageSession.filter(data => data.userId === parseInt(id))

  return (
		<>
		<div>
				<h1>Bonjour {user.userInfos.firstName} </h1>
				<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
				{ Object.keys(user.keyData).map((key)=>
					<p key={key}>
					<span>{key}: </span>
					<span> {user.keyData[key]}</span>
				</p>
				)}
		</div>
			<UserAverage />
		</>

  )
}

export default Dashboard