import { useEffect, useState } from "react";
import DonatedCard from "./DonatedCard";


const Donation = () => {
  const [donations, setDonations] = useState([]);
    const [noFound, setNoFound] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const donationLists = JSON.parse(localStorage.getItem("donate"));
    if (donationLists) {
        setDonations(donationLists);
        const total = donationLists.reduce((previous, current) => previous + current.price, 0)
        setTotalPrice(total)
    } else {
      setNoFound("Still You Did Not Make Any Donation");
    }
  }, []);

    const handleRemove = () => {
        localStorage.clear();
        setDonations([]);
        setNoFound("All the Donation Removed");

  }

    // console.log(totalPrice);
  return (
    <div>
      {noFound ? (
        <p className=" text-6xl font-bold p-10 text-center text-red-600">
          {noFound}
        </p>
      ) : (
            <div>
                      {donations.length > 0 && <button
                          onClick={handleRemove}
                          className=" bg-red-500 text-white p-5 rounded block mx-auto">Remove All Donation</button>} 
                      <p className="text-center bg-cyan-700 text-white font-bold p-5 rounded w-60 mx-auto m-5">Total Donation: <span className=" text-orange-500">{ totalPrice}</span></p>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                          {
                              isShow ? donations?.map(donation => <DonatedCard key={donation.id} donation={donation}></DonatedCard>)
                                  : 
                                  donations?.slice(0,4).map(donation => <DonatedCard key={donation.id} donation={donation}></DonatedCard> )
                          }
                      </div>
                      {
                          donations.length>4 && <button
                          onClick={()=>setIsShow(!isShow)}
                          className={isShow? 'hidden' : " bg-green-500 text-white p-5 rounded block mx-auto"}>
                          See All</button>
                      }

                    
        </div>
      )}
    </div>
  );
};

export default Donation;
