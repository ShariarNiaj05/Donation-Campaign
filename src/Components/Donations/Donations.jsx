import DonationsCard from "./DonationsCard";

const Donations = ({ donations }) => {
  // console.log(donations);
  return (
    <div className=" py-10">
      {/* <h2 className=" max-w-7xl mx-auto text-center">
        Donation List from Donations.jsx
      </h2> */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {donations?.map((donation) => (
          <DonationsCard key={donation.id} donation={donation}></DonationsCard>
        ))}
      </div>
    </div>
  );
};

export default Donations;
