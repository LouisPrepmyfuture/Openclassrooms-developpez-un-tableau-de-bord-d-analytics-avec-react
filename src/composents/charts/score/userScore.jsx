import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import "./styles.css"

/** @function for showing score to pie chat
 *
 * @array object
 * @returns (<Score/>)
 */

export default function UserScore({data}) {
	const dataFormat = [{
		value: data * 100
	}]
  return (
		<div className="chartContainer container-char">
			<div className='chartWrapper'>
				<h4 className='chartTitle'>Score</h4>
				<p className="goalPercentage">
					<span >{dataFormat[0].value}%</span>
					<br />
					de votre objectif
				</p>
				<ResponsiveContainer width="100%" height={263} style={{ padding: '2%' }} >
					<RadialBarChart
						width="100%"
						cx="50%"
						cy="50%"
						innerRadius="66%"
						barSize={10}
						data={dataFormat}
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
			</div>
		</div>
  );
}