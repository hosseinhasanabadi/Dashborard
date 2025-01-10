import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import './Chart.css'
export default function Chart(props) {
  return (
    <div className="chart">
      <h3 className="charttitle">{props.title}</h3>
      <ResponsiveContainer width="%" aspect={5}>
        <LineChart data={props.data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type='monotone' dataKey={props.dataKey} stroke="#5550bd" />
          <Tooltip />
          {props.grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
