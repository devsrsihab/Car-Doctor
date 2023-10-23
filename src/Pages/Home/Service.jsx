// import PropTypes from "prop-types";

import { AiOutlineArrowRight } from "react-icons/ai";

const Service = () => {
  return (
    <div className="card  p-5  bg-base-100 border ">
      <div className="card-body gap-y-6 px-0 py-4 ">
        <figure className="rounded-lg">
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <h2 className="title text-2xl font-bold ">Electrical System</h2>
        <div className="card-price flex items-center justify-between">
          <div className="price text-xl font-semibold text-[#FF3811] ">
            Price : $20.00
          </div>
          <div className="icon text-2xl text-[#FF3811] ">
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

// Service.propTypes = {};

export default Service;
