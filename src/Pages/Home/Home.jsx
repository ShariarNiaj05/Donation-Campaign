import { useLoaderData } from "react-router-dom";
import Donations from "../../Components/Donations/Donations";
import Banner from "../../Components/Header/Banner/Banner";

const Home = () => {

    const donations = useLoaderData();

    return (
        <div className=" h-[60vh]">
            <div>
                <Banner></Banner>
            </div>

            <div>
                <Donations donations={donations}></Donations>
            </div>


            {/* <div >
                {
                    donations?.map(donation => <Donations key={donation.id} donation={donation}></Donations>)
                }
            </div> */}

        </div>
        
    );
};

export default Home;