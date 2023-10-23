import SectionHeading from "../Shared/Section Things/SectionHeading";
import Service from "./Service";

const Services = () => {
  return (
    <div className="services-wraper py-20">
      <SectionHeading />
      <div className="services py-20 gap-6 grid grid-cols-3 ">
        <Service />
        <Service />
        <Service />
        <Service />
      </div>
    </div>
  );
};

export default Services;
