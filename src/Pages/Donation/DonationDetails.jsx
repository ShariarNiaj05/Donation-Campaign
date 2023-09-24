import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetailsCard from "./DonationDetailsCard";

const DonationDetails = () => {
    const [donationDetails, setDonationDetails] = useState({});
    const params = useParams();
    const donations = useLoaderData();
    useEffect(() => {
        const findDonation = donations?.find((donation) => donation.id == params.id);
        setDonationDetails(findDonation)
    }, [donations, params.id])


    return (
        <div className=" p-10 max-w-7xl mx-auto">
            <DonationDetailsCard donationDetails={donationDetails}></DonationDetailsCard>
        </div>
    );
};

export default DonationDetails;