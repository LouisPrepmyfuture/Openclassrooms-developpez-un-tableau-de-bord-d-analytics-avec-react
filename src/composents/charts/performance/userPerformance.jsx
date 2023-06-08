import React  from 'react';
import {RadarChart, PolarGrid, PolarAngleAxis ,Radar, ResponsiveContainer } from 'recharts';
import styled from 'styled-components'


function UserPerformance({data}) {
    return (
				<ChartContainer>
			<ResponsiveContainer width="100%" height={300}>
			<StyleRadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
				<PolarGrid radialLines={false} stroke="#fff" />
				<PolarAngleAxis dataKey="kind" 
				  
					fontSize={11}
					fontWeight={500}
					stroke="#fff"
					tickLine={false}
					dy={4}
					dx={-3}
					/>
				<Radar name="Mike" dataKey="value" fill="rgba(255, 1, 1, 0.7)" fillOpacity={0.6} />
			</StyleRadarChart>
			</ResponsiveContainer>
			</ChartContainer>
    );
	}
	
	const ChartContainer = styled.div`
  width: 258px;
  height: 263px;
  background-color: #282d30;
  border-radius: 5px;
  @media screen and (max-width: 1320px) {
    width: max(210px, 18vw + 1em);
    height: max(210px, 18vw + 1em);
    .recharts-polar-angle-axis-tick-value {
      font-size: 8px;
    }
  }
`

	const StyleRadarChart = styled(RadarChart)`
  height: 258px;
  width: 258px;
  background-color: #282D30;
  border-radius: 5px;
  position: relative;
  & .goalPercentage {
	}
  
	`
	export default UserPerformance

