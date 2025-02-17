import { PieChart, Pie, Cell, Sector } from "recharts";
import './FortuneWheel.css';

const data = [
    { name: "Petra", value: 0.6, color: "pink" },
    { name: "Misi", value: 0.1, color: "#FD3033" },
    { name: "Roli", value: 0.1, color: "#00FFFF" },
    { name: "Alex", value: 0.1, color: "#246309" },
    { name: "Javi", value: 0.1, color: "#FBAF23" }
];

// Custom Pie Sector with Rounded Corners
const CustomSector = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
  return (
    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={fill}
      strokeWidth={100}
      cornerRadius={15}
      opacity={0.8}>
        <div className="tesztecske">HALIKA</div>
      </Sector>
  );
};

const FortuneWheel = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <PieChart width={610} height={610}>
          {/* Outer border for the pie chart (acts as a border layer) */}
          {/* <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80} // Slightly larger than the actual pie
            outerRadius={150} // This acts as a border
            fill="none"
            stroke="black"
            strokeWidth={40} // Thick black stroke
          /> */}
  
          {/* Main Pie Chart */}
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={0}
            outerRadius={300}
            dataKey="value"
            stroke="black"
            strokeWidth={10}
            cornerRadius={16}
            shape={CustomSector}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>

          {/* Dotted border using another Pie chart */}
          {/* <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={0} // Position it just outside the black border
            outerRadius={150} // Thin ring for dots
            fill="none"
            stroke="yellow"
            strokeWidth={10} // Dots size
            strokeDasharray="10 40" // Creates the dotted effect
            strokeLinecap="round"
          /> */}
        </PieChart>
      </div>
    );
};

export default FortuneWheel;