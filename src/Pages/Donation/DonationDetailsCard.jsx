import swal from "sweetalert";

const DonationDetailsCard = ({ donationDetails }) => {
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
  } = donationDetails || {};
  console.log(donationDetails);

  const handleDonate = () => {
    const addedDonationArray = [];

    const donationLists = JSON.parse(localStorage.getItem("donate"));

    if (!donationLists) {
      addedDonationArray.push(donationDetails);
      localStorage.setItem("donate", JSON.stringify(addedDonationArray));
      swal("Good job!", `You Donated $${price}`, "success");
    } else {
      const isExits = donationLists.find(
        (addedDonation) => addedDonation.id == id
      );

      if (!isExits) {
        addedDonationArray.push(...donationLists, donationDetails);
        localStorage.setItem("donate", JSON.stringify(addedDonationArray));
        swal("Good job!", `You Donated $${price}`, "success");
      } else {
        swal("Already Donated", "", "error");
      }
    }

    //    localStorage.setItem('donate', JSON.stringify(donationDetails))
  };

  return (
    <div>
      <div className="relative  flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6  overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <div>
            <img src={picture} className="w-full object-cover " layout="fill" />

            <button
              onClick={handleDonate}
              style={{ backgroundColor: category_bg }}
              className=" absolute left-10 bottom-10 select-none rounded-lg  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none z-10"
              type="button"
              data-ripple-light="true"
            >
              Donate ${price}
            </button>
          </div>
        </div>
        <div className=" bg-black opacity-30 absolute h-20 bottom-[170px]  md:bottom-[160px] lg:bottom-[170px] p-5 left-5 w-[310px] md:w-[650px] lg:w-[910px] xl:w-[1160px]"></div>
        <div className="p-6">
          <h2 className="mb-2 block font-sans text-base sm:text-2xl lg:text-4xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h2>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {description}
          </p>
        </div>
        <div className="p-6 pt-0"></div>
      </div>
    </div>
  );
};

export default DonationDetailsCard;
