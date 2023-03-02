import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const VisualizationChart = ({prop}) => {
    const {todos} = prop 
    const data = [
        { name: 'Page A', uv: 400},
        { name: 'Page B', uv: 200},
    ];

    return (
            <LineChart className='mx-auto my-24' width={600} height={300} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
    );
};

export default VisualizationChart;