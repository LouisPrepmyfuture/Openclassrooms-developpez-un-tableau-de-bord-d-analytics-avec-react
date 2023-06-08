import React from 'react';
import { LineChart, Tooltip, Line, XAxis ,ReferenceDot , Legend, ResponsiveContainer } from 'recharts';
import { UserAverageFormat } from '../../../services/formatedData/formatedUser';
import "./style.css"


function UserAverage({data}) {
  
	const formatedData = UserAverageFormat(data.sessions)
  return (
		<ResponsiveContainer>
			<LineChart
				className="userAverage"
				width={500}
				height={300}
				data={formatedData}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<XAxis 
					dataKey="day"
					strokeWidth={0}
					stroke="rgba(255,255,255,0.5)"
					padding={{ left: 20, right: 20 }} 
				/>
				<Legend />
				<ReferenceDot yAxis={40}  xAxis={40} fill="red" stroke="none" />
				<Tooltip />
				<Line className="" type="monotone" dataKey="sessionLength" stroke="#FFf"  dot={false}/>
			</LineChart>
			</ResponsiveContainer>
  )
}

export default UserAverage

     