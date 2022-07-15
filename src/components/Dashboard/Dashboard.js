import React from 'react';
import { Line, LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Legend, AreaChart, Area, BarChart, Bar, PieChart, Pie } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const data =
    [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];
        return (
            <div className='chart'>



                <div className='line-chart'>
                    <h3 className=''>Month Wise Sell</h3>
                    <LineChart width={280} height={330} data={data}
                        margin={{ top: 5, right: 30, left: -15, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                    </LineChart>
                </div>
                <div className='line-chart'>
                <h3>Investment VS Revenue</h3>
                <AreaChart
                    width={280}
                    height={300}
                    data={data}
                    margin={{top: 5, right: 30, left: 15, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="investment"
                        stackId="1"
                        stroke="#8884d8"
                        fill="#8884d8"
                    />
                    <Area
                        type="monotone"
                        dataKey="revenue"
                        stackId="1"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                    />
                    </AreaChart>
                </div>
                <div className='line-chart'>
                <h3>Investment VS Revenue</h3>
                <BarChart width={280} height={300} data={data} 
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>
                </div>
                
                <div className='line-chart'>
                <h3>Investment VS Revenue</h3>
                <PieChart width={280} height={300}
                margin={{ top: 5, right: 30, left: 5, bottom: 5 }}>
                    <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    <Tooltip />
                </PieChart>
                </div>
            </div >
    
        );
    };
    
export default Dashboard;