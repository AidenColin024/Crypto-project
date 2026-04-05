// import de benodigde componenten van recharts
import { PieChart, Pie, Cell, Tooltip, Legend  } from "recharts";
// definieer een array van kleuren voor de pie chart
const COLORS = [
  "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0",
  "#9966FF", "#FF9F40", "#E7E9ED", "#71B37C",
  "#FF6B6B", "#4ECDC4"]

function MarketChard({ coins }) {
  return (
    <div>
      <h2>Top 10 Coins</h2>
      {/* maak een pie chart met de top 10 coins op basis van market cap */}
      <PieChart width={400} height={400}>
        <Pie
          data={coins.slice(0, 10)}
          dataKey="market_cap"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          label={({ name }) => name}
        >{/* map de coins naar cellen met de bijbehorende kleuren */}
          {coins.slice(0, 10).map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        {/* formatter voor de tooltip zodat de market cap als euro's wordt weergegeven */}
        <Tooltip formatter={(value) => `€${value.toLocaleString()}`} />
        <Legend />
      </PieChart>
    </div>
  );
}

export default MarketChard;