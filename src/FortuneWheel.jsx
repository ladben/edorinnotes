import { PieChart, Pie, Cell } from "recharts";

const data = [
    { name: "Petra", value: 0.1, color: "#FB23A8" },
    { name: "Misi", value: 0.3, color: "#FD3033" },
    { name: "Roli", value: 0.1, color: "#00FFFF" },
    { name: "Alex", value: 0.1, color: "#246309" },
    { name: "Javi", value: 0.4, color: "#FBAF23" }
];

const FortuneWheel = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <PieChart width={400} height={400}>
          {/* Outer border for the pie chart (acts as a border layer) */}
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={110} // Slightly larger than the actual pie
            outerRadius={160} // This acts as a border
            fill="none"
            stroke="black"
            strokeWidth={8} // Thick black stroke
          />
  
          {/* Dotted border using another Pie chart */}
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={162} // Position it just outside the black border
            outerRadius={165} // Thin ring for dots
            fill="none"
            stroke="yellow"
            strokeWidth={6} // Dots size
            strokeDasharray="2 10" // Creates the dotted effect
            strokeLinecap="round"
          />
  
          {/* Main Pie Chart */}
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={150}
            paddingAngle={5}
            dataKey="value"
            stroke="#fff"
            strokeWidth={4}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </div>
    );
};

export default FortuneWheel;