import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

// ------------------------
const COLORS = ["red", "green", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

// ----------------------------------------------
const Statistics = () => {
  const allDonations = useLoaderData();

  const [donations, setDonations] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [allDonationPrice, setAllDonationPrice] = useState(0);

  useEffect(() => {
    const donationLists = JSON.parse(localStorage.getItem("donate"));
    if (donationLists) {
      setDonations(donationLists);
      const total = donationLists.reduce(
        (previous, current) => previous + current.price,
        0
      );
      setTotalPrice(total);
    }

    const allDonationsPrice = allDonations.reduce(
      (previous, current) => previous + current.price,
      0
    );
    setAllDonationPrice(allDonationsPrice);
  }, [allDonations]);

  const data = [
    { name: "All Donation Price", value: allDonationPrice },
    { name: "My Donation", value: totalPrice },
  ];

  return (
    <div className=" flex flex-col items-center justify-center gap-5">
      {/* Statistics */}
      {
        // <PieChart width={700} height={700}>
        //   <Pie
        //     dataKey="value"
        //     isAnimationActive={true}
        //     data={data}
        //     cx="50%"
        //     cy="50%"
        //     outerRadius={300}
        //     fill="green"
        //               label={5552}
        //               labelLine={false}

        //   />

        //   <Tooltip />
        // </PieChart>

        <PieChart width={400} height={400}>
          <Pie
            isAnimationActive={true}
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="red"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      }
      <div>
        <div className=" flex justify-center items-center gap-5">
          <p>My Donation</p>
          <p className=" bg-green-700 h-4 w-24 "></p>
          <p>All Donation</p>
          <p className=" bg-red-700 h-4 w-24 "></p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
