const Description = () => {
  return (
    <div className=" py-6 px-6">
      <h1 className="font-bold text-[1.55rem] text-gray-500 tracking-[0.22rem]">
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
      <div className="price-container flex flex-wrap sm:flex-col sm:flex-nowrap w-full">
        <div className="flex items-center gap-4  ">
          <span className="text-[2.85rem] font-bold text-primary">$125.00</span>
          <span className="bg-black text-white text-[2rem] px-3 py-2 rounded-xl font-bold">
            50%
          </span>
        </div>

        <span className=" flex ml-auto sm:mr-auto sm:ml-0  text-[2rem] font-bold text-gray-500 line-through">
          $250
        </span>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        {" "}
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
    </div>
  );
};

export default Description;
