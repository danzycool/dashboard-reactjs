import "../scss/Chart.scss";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];

const Chart = ({ isAnimationActive = true, aspectRatio = 2 / 1, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <AreaChart
        style={{
          width: "100%",
          maxWidth: "700px",
          maxHeight: "50vh",
          aspectRatio,
        }}
        responsive
        data={data}
        margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
        <XAxis dataKey="name" stroke="gray" />
        {/* <YAxis width="auto" /> */}
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Total"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#total)"
          isAnimationActive={isAnimationActive}
        />
      </AreaChart>
    </div>
  );
};

export default Chart;
