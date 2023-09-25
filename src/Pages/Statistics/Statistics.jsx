import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Tooltip } from "recharts";

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
      
      const allDonationsPrice = allDonations.reduce((previous, current) => previous + current.price,
          0)
          setAllDonationPrice(allDonationsPrice)
        }, [allDonations]);


  const data = [
    { name: "All Donation Price", value: allDonationPrice },
    { name: "My Donation", value: totalPrice },
  ];

  return (
    <div className=" flex justify-center ">
      Statistics
      {
        <PieChart width={700} height={700}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={300}
            fill="green"
            label="name"
          />


          <Tooltip />
        </PieChart>
      }
    </div>
  );
};

export default Statistics;
