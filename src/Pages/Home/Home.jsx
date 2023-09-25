import { useLoaderData } from "react-router-dom";
import Donations from "../../Components/Donations/Donations";
import Banner from "../../Components/Header/Banner/Banner";
import { createContext, useState } from "react";

// export const searchText = createContext();

const Home = () => {
    const donations = useLoaderData();
    // console.log(donations);

  return (
    <div className=" h-[60vh]">
       <div>
          <Banner></Banner>
        </div>

        <div>
          <Donations donations={donations}></Donations>
        </div>

          <form className="text-center mt-5 absolute top-48 w-full">
{/* <input className=" w-[60%] h-16 p-5"   type="search" placeholder="Search by category from Home page..."         name="searchText"  ></input> */}

          {/* <input type="submit" value="submit"></input> */}

              {/* <input className=" bg-red-600 h-16 w-28 text-white font-bold" type="submit" value="submit">Search</input> */}
              
        </form>
    </div>
  );
};

export default Home;
