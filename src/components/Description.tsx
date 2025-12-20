const Description = () => {
  return (
    <div className=" py-6 px-6">
      <h1 className="font-bold text-[1.55rem] text-gray-400 tracking-[0.22rem]">
        SNEAKER COMPANY
      </h1>
      <h2 className="text-[2.85rem] font-bold tracking-[0.1rem] pb-6">
        Fall Limited Edition Sneakers
      </h2>
      <p className="text-[1.723rem] font-[secondary]  text-gray-600 pb-9 ">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="price-container w-full flex p-0 m-0 items-center">
        <button className="text-[3.25rem] font-bold text-primary">
          <span className="font">$125.00</span>
        </button>
        <p className="bg-black text-[2rem] text-white font-bold items-center flex justify-center py-2 px-3 rounded-xl ml-5 ">
          50%
        </p>
        <p className=" text-[2.5rem]  font-bold  text-gray-500 line-through flex items-center justify-center py-5 px-5 mx-auto">
          $250
        </p>
      </div>
      <div className="counter bg-gray-100 w-full h-24 flex items-center justify-between py-10 px-10 mt-7 rounded-xl cursor-pointer">
        <img className="size-6" src="/images/icon-minus.svg" alt="" />
        <p className="text-[2.25rem] font-bold">0</p>
        <img className="size-6" src="/images/icon-plus.svg" alt="" />
      </div>
      <div className="cart flex items-center justify-center  w-full h-16 rounded-xl mt-6 text-gray-800 font-bold text-[1.75rem] cursor-pointer  py-13 bg-[#ff7d1a] shadow-xl shadow-orange-300">
        <img className="size-9 " src="/images/icon-cart.svg" alt="" />
        <p className="pl-5">Add to cart</p>
      </div>
    </div>
  );
};

export default Description;
