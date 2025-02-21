import './ProbabilityPieChart.css';

import { PieChart, Pie, Cell } from "recharts";

const ProbabilityPieChart = ({data}) => {
    return (
        <PieChart width={100} height={100}>
              <defs>
                    <linearGradient id={`colorUv-${data[0].name}`} x1="1" y1="1" x2="0" y2="0">
                        <stop offset="0%" stopColor={data[0].startColor || "#FFFFFF"}/>
                        <stop offset="100%" stopColor={data[0].endColor || "#656565"}/>
                    </linearGradient>
                </defs>
            <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={35}
                outerRadius={50}
                strokeWidth={0}
                cornerRadius={15}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index === 0 ? `url(#colorUv-${data[0].name})` : "transparent"} />
            ))}
          </Pie>
        </PieChart>
    );
}
 
export default ProbabilityPieChart;