import React from 'react';
import { BarChart, Bar, Tooltip, Legend, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { UserActivityFormat } from '../../../services/formatedData/formatedUser';
function UserActivity({data}) {
		const dataFormat = UserActivityFormat(data.sessions)
    return (
        <BarChart
          width={500}
          height={300}
          data={dataFormat}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Tooltip />
          <Legend />
					<CartesianGrid strokeDasharray='3 3' vertical={false} />
					
					<XAxis dataKey='add' tickLine={false} axisLine={false} />
          <XAxis dataKey='calories' type='number' tickLine={false} axisLine={false} />

          <YAxis dataKey='kilogram' type='number' tickLine={false} orientation='right' axisLine={false} domain={['dataMin - 1', 'dataMax + 1']} />
          <YAxis dataKey='calories' type='number' yAxisId='calorie' hide />
					
					<Bar dataKey="kilogram" barSize={7} fill='#282D30' />
          <Bar dataKey="calories" yAxisId='calorie' radius={[10, 10, 0, 0]} barSize={7} fill='#E60000' />

        </BarChart>
    );
  }

       
export default UserActivity
