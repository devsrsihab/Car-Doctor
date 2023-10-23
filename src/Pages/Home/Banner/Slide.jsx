import PropTypes from "prop-types";

const Slide = ({ img, slideId, buttonPrevId, buttonNextId }) => {
  return (
    <div id={slideId} className="carousel-item relative w-full">
      <img src={img} className="w-full object-cover " />
      <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full items-center pl-16 flex  text-white gap-4 ">

        <div className="slider-content-wrapper flex flex-col gap-6 w-1/3">
          <h2 className="text-6xl leading-tight font-bold">
            Affordable Price For Car Servicing
          </h2>
          <p className="text-lg capitalize">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="buttons">
            <button className="btn btn-outline rounded-md border-[#FF3811] bg-[#FF3811] mr-5">
              Discover More
            </button>
            <button className="btn btn-outline rounded-md border-white hover:border-[#FF3811]  hover:bg-[#FF3811] ">
              Latest Project
            </button>
          </div>
        </div>

      </div>
      <div className="absolute flex gap-4 right-5 top-[84%]">
        <a
          href={buttonPrevId}
          className="btn bg-white/20  border-black/20  outline-none  hover:bg-white/20  text-white btn-circle"
        >
          ❮
        </a>
        <a
          href={buttonNextId}
          className="btn bg-[#FF3811] border-[#FF3811] outline-none   hover:bg-orange-500 text-white btn-circle"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

Slide.propTypes = {
  img: PropTypes.string,
  slideId: PropTypes.string,
  buttonPrevId: PropTypes.string,
  buttonNextId: PropTypes.string,
};

export default Slide;
