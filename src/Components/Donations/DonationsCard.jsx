import { useContext } from "react";
import { Link } from "react-router-dom";
// import { searchText } from "../../Pages/Home/Home";






const DonationsCard = ({ donation }) => {


  // const searchValue = useContext(searchText);
  // console.log(searchValue);
  
  const {
    id,
    card_bg,
    category,
    category_bg,
    description,
    picture,
    price,
    text_bg,
    title,
  } = donation || {};

  {
    /* <div style={{backgroundColor: category_bg}} className="w-20 h-20 mx-auto mb-4">{category_bg}</div> */
  }

  return (
    <Link to={`/donationdetails/${id}`}>
      <div style={{ backgroundColor: card_bg }}>
        <div
          className={`relative h-96 flex flex-col rounded-xl bg-clip-border text-gray-700 shadow-md`}
        >
          <div className="relative   overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img src={picture} className="h-full w-full object-cover" />
          </div>
          <button
            style={{ backgroundColor: card_bg }}
            className="block w-[50%] ml-7 mt-5 select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold capitalize text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span style={{ color: text_bg }}>{category} </span>
          </button>
          <div className="p-6">
            <div className="mb-2 flex items-center justify-between">
              <p
                style={{ color: text_bg }}
                className="block font-sans text-xl font-bold leading-relaxed antialiased "
              >
                {title}
              </p>
            </div>
          </div>
          <div className="p-6 pt-0"></div>
        </div>
      </div>
    </Link>
  );
};

export default DonationsCard;
