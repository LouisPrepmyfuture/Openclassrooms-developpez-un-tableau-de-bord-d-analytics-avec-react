import React, {PropTypes} from 'react';
import {RadarChart, PolarGrid, PolarAngleAxis ,Radar, ResponsiveContainer, PolarRadiusAxis} from 'recharts';
import { UserPerformanceFormat } from '../../../services/formatedData/formatedUser';
import PropTypes from 'prop-types';
import "./style.css"
/** @function for showing activity types as radar chart
 *
 * array Object
 * @returns (<Performance/>)
 */

function UserPerformance({data}) {
	const formatData = UserPerformanceFormat(data)
    return (
			<div className="radarChart container-char">
				 <ResponsiveContainer width="100%" height={160}>
					<RadarChart
						className="radar-chart"
						stroke="#FFFFFF" 
						data={formatData}
					>
						<PolarGrid radialLines={false} stroke="#fff" />
						<PolarRadiusAxis axisLine={false} tick={false} />
						<PolarAngleAxis
							stroke="white"
							dataKey="kind"
							domain={[0, 150]}
							axisLine={false}
							tickLine={false}
						/>
						<Radar dataKey="value" stroke="none" fill="red" fillOpacity={0.6} />
					</RadarChart>
				</ResponsiveContainer>
			</div>
	);}

	UserPerformance.propTypes = {
		data: PropTypes.object.isRequired,
	}
	export default UserPerformance