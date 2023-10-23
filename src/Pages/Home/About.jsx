import personImg from "../../assets/images/about_us/person.jpg";
import partsImg from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero py-20 min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <div className="hero-img w-1/2">
          <div className="personParts relative">
            <img src={personImg} className="w-5/6 rounded-lg shadow-2xl" />
            <img src={partsImg} className="w-3/6 border-8 absolute right-10 top-1/2 border-white rounded rounded-lg shadow-2xl" />
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-6">
          <h1 className="text-xl text-[#FF3811] font-bold">About Us</h1>
          <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
          <p >
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <p >
          the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
          </p>
          <button className="btn bg-[#FF3811] self-start hover:bg-[#FF3811] rounded outline-none text-white ">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
