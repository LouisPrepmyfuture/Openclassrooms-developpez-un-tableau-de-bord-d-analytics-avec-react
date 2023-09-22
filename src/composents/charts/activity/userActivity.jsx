import React from 'react';
import { BarChart, Bar, Tooltip, Legend, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { UserActivityFormat } from '../../../services/formatedData/formatedUser';
import PropTypes from 'prop-types';
import "./style.css"


/** @function for showing to bar chart activity
 *
 * @component
 * @param array 
 * @returns (bar chart <Activity/>)
*/
function UserActivity({data}) {
	const CustomTooltip = ({ active, payload }) => {
		
		return active && payload ? (
			<div className="tool-tip">
				<div className="poids">{`${payload[0].value} Kg`}</div>
				<div className="calories">{`${payload[1].value} KCal`}</div>
			</div>
		) : null;
	};
	const dataFormat = UserActivityFormat(data.sessions)
	return (
		<div className="activity">
			<header className="card-header">
				<h3>Activité quotidienne</h3>
				<div className="card-indicator">
					<div className="card-infos">
						<div className='round poid' fill="#282D30" />
						<span> Poids (kg)</span>
					</div>
					<div className="card-infos">
						<div className='round calorie' fill="#E60000" />
						<span> Calories brûlées (kCal)</span>
					</div>
				</div>
			</header>
			<ResponsiveContainer aspect={4}>
				<BarChart
					data={dataFormat}
					barGap={8}
          margin={{
						top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
					>
         
					<CartesianGrid strokeDasharray='3 3' vertical={false} />
					
					<XAxis dataKey='add' tickLine={false} axisLine={false} />
          <XAxis dataKey='calories' type='number' tickLine={false} axisLine={false} />

          <YAxis dataKey='kilogram' type='number' tickLine={false} orientation='right' axisLine={false} domain={['dataMin - 1', 'dataMax + 1']} />
          <YAxis dataKey='calories' type='number' yAxisId='calorie' hide />
					
					<Tooltip content={CustomTooltip} />

					<Bar dataKey="kilogram" barSize={7} radius={[10, 10, 0, 0]} fill='#282D30' />
          <Bar dataKey="calories" yAxisId='calorie' radius={[10, 10, 0, 0]} barSize={7} fill='#E60000' />

        </BarChart>
   </ResponsiveContainer>
	 </div>
	 );
  }
	
	UserActivity.propTypes = {
		data: PropTypes.object.isRequired,
	}
	
	export default UserActivity
	