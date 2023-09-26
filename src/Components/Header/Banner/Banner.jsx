// import {  useState } from "react";
import background from "../../../assets/images/Rectangle4288.png";

const styles = {
  header: {
    backgroundImage: `url(${background})`,
    height: "60vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  content: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(255,255,255, 0.8)",
  },
};

// const handleSearch = e=> {
//   e.preventDefault();
// }

const Banner = () => {
  return (
    <div style={styles.header}>
      <div style={styles.content}>
        <h2 className="text-center font-bold md:text-2xl lg:text-6xl align-middle pt-12 lg:pt-36">
          I Grow By Helping People In Need
        </h2>

        {
          <form className="text-center lg:mt-5">
            <input
              className=" w-[60%] lg:h-16 p-5"
              type="search"
              placeholder="Search by category name.."
              name="searchText"
            ></input>
            <input className=" bg-red-600 h-16 w-28 text-white font-bold" type="submit" value="Search"></input>

            {/* <input type="submit" value="submit"></input> */}

          </form>
        }
      </div>
    </div>

    // <div className=' h-[60vh]' style={{
    //     backgroundImage: `url(${background})`,
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "cover"
    // }}>
    //     banner
    // </div>
  );
};

export default Banner;
