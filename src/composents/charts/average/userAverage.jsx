import React from 'react';
import { LineChart, Tooltip, Line, XAxis ,ReferenceDot , ResponsiveContainer } from 'recharts';
import { UserAverageFormat } from '../../../services/formatedData/formatedUser';
import "./style.css"

/** @function for showing duration session to line chart
 *
 * @param array Object 
 * @return (<UserAverage/>)
 */
function UserAverage({data}) {
  
	const formatedData = UserAverageFormat(data.sessions)
  return (
		<div className="duration-session container-char">
			<header className="durationSessions__header">
				<span>Durée moyenne des sessions</span>
			</header>
			<div className='content-lineChart'>
			<ResponsiveContainer width="100%" >
				<LineChart
					className="duration-chart"
					data={formatedData}
				>
					<XAxis 
						dataKey="day"
						strokeWidth={0}
						stroke="rgba(255,255,255,0.5)"
						padding={{ left: 20, right: 20 }} 
					/>
					<ReferenceDot yAxis={40}  xAxis={40} fill="red" stroke="none" 	padding={{ top: 20}}  />
				
					<Line className="line-information" type="monotone" dataKey="sessionLength" stroke="#fff"  dot={false} activeDot={{ r: 3 }} />
					<Tooltip
          content={(pointInfo) => {
            if (!pointInfo.active) return null;
            const pointData = formatedData.find((x) => x.day === pointInfo.label);

            return <div className="tool">{pointData.sessionLength} min</div>;
          }}
          cursor={{
            stroke: 'rgba(0, 0, 0, 0.1)',
            strokeWidth: 50,
            height: '1000px',
          }}
        />
				</LineChart>
			</ResponsiveContainer>
				</div>
		</div>
  )
}

export default UserAverage

     