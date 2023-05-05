import React from 'react';
import { LineChart, Line, XAxis , CartesianGrid,ReferenceDot , Tooltip, Legend } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const data2 = [
	{
		"day": 1,
		"sessionLength": 30
	},
	{
		"day": 2,
		"sessionLength": 23
	},
	{
		"day": 3,
		"sessionLength": 45
	},
	{
		"day": 4,
		"sessionLength": 50
	},
	{
		"day": 5,
		"sessionLength": 0
	},
	{
		"day": 6,
		"sessionLength": 0
	},
	{
		"day": 7,
		"sessionLength": 60
	}
]
let mean = [30,50,60,0,0,23,45]

const  formatDay = (day) => {
  switch(day) {
    case 2:
			return 'M';
		case 3:
			return 'M';
		case 4:
			return 'J';
		case 5:
			return 'V';
		case 6:
			return 'S';
		case 7:
			return 'D';
    default:
      return 'L';
  }
}
console.log(data2)
const formatDays = (jsonAverage) => {
  let newJsonAverage = jsonAverage.map((key) =>
		key.day = formatDay(key.day)
	)
	return newJsonAverage
}
formatDays(data2)
function UserAverage() {
  return (

			<LineChart
				width={500}
				height={300}
				data={data2}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<XAxis dataKey="day" />
				<Tooltip />
				<Legend />
				<ReferenceDot yAxis={40}  xAxis={40} fill="red" stroke="none" />
				<Line type="monotone" dataKey="sessionLength" stroke="#82ca9d" />
			</LineChart>


  )
}

export default UserAverage

     