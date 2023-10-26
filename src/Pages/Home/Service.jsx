import PropTypes from "prop-types";

import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Service = ({service}) => {
    const {_id,title,img,price } = service
  return (
    <div className="card  p-5  bg-base-100 border ">
      <div className="card-body gap-y-6 px-0 py-4 ">
        <figure className="rounded-lg h-[210px] ">
          <img
            className="h-full w-full object-cover"
            src={img}
            alt="Shoes"
          />
        </figure>
        <h2 className="title text-start text-2xl font-bold ">{title}</h2>
        <div className="card-price flex items-center justify-between">
          <div className="price text-xl font-semibold text-[#FF3811] ">
            Price : ${price}
          </div>
          <div className="icon text-2xl text-[#FF3811] ">
            <AiOutlineArrowRight />
          </div>
        </div>
        <div className="cart-actions flex ">
          <Link to={`checkout/${_id}`}>
          <button className="btn">buy now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Service.propTypes = {
  service: PropTypes.object.isRequired,

};

export default Service;
