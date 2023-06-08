import React from 'react';
import './styles.css'
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import styled from 'styled-components'

const data = [
  {
    name: '18-24',
    value: 10,
  }
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

export default function UserScore() {
  return (
		<ChartContainer>
			<ChartWrapper>
			<ChartTitle>Score</ChartTitle>
            <p className="goalPercentage">
              <span>{data[0].value}%</span>
              <br />
              de votre objectif
            </p>
			<ResponsiveContainer>
				<RadialBarChart
					width={258}
					height={258}
					cx="50%"
					cy="50%"
					innerRadius="66%"
					barSize={10}
					data={data}
					startAngle={90}
					endAngle={450}
				>
					<RadialBar
						background
						dataKey="value"
						clockWise={true}
						fill="#FF0000"
						cornerRadius={5}
					/>
					<PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
				</RadialBarChart>
			</ResponsiveContainer>
			</ChartWrapper>
		</ChartContainer>
  );
}



/////*   Style   */////

const ChartContainer = styled.div`
  height: 258px;
  width: 258px;
  background-color: #fbfbfb;
  border-radius: 5px;
  position: relative;
  & .goalPercentage {
    position: absolute;
    top: calc(50% - 35px);
    left: calc(50% - 50px);
    z-index: 10;
    width: 100px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    color: #74798c;
    & span {
      font-size: 26px;
      font-weight: 700;
      color: #282d30;
    }
  }
  @media screen and (max-width: 1320px) {
    width: max(210px, 18vw + 1em);
    height: max(210px, 18vw + 1em);
    & .goalPercentage {
      font-size: 14px;
      & span {
        font-size: 22px;
      }
    }
  }
`

const ChartWrapper = styled.div`
  width: 100%;
  height: 100%;
`
const ChartTitle = styled.div`
  color: #20253a;
  font-size: 15px;
  font-weight: 500;
  position: absolute;
  top: 12%;
  left: 8%;
`