
const DonatedCard = ({ donation }) => {

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
      } = donation || {}

    console.log(donation);
    return (
        <div className=" max-w-7xl mx-auto">
            <div
                style={{ backgroundColor: card_bg}}
                className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={picture}
      alt="image"
      className="h-full w-[500px] object-cover"
    />
  </div>
  <div className="p-6">
                    <h6
                        style={{backgroundColor: card_bg}}
                        className="mb-4 block font-sans text-base font-semibold capitalize leading-relaxed tracking-normal text-pink-500 antialiased">
      {category}
    </h6>
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {title}
    </h4>
                    <p
                        style={{color: text_bg}}
                        className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
      ${price}
    </p>
    <a className="inline-block" href="#">
                        <button
                            style={{backgroundColor: category_bg}}
        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold capitalize text-white transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        View Details
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
        >
          {/* <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path> */}
        </svg>
      </button>
    </a>
  </div>
</div>
        </div>
    );
};

export default DonatedCard;