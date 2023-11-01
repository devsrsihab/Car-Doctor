import useServices from "../../Hooks/useServices";
import SectionHeading from "../Shared/Section Things/SectionHeading";
import Service from "./Service";

const Services = () => {

// srvices data 
const services = useServices()

  return (
    <div className="services-wraper text-center py-20">
      <SectionHeading />
      <div className="services pt-20 mb-20 pb-10 gap-6 grid grid-cols-3 ">
        {
            services?.map(service =>
                <Service key={service?._id} service={service} />

                )
        }
      </div>
      <button className="btn btn-outline text-[#FF3811] self-start hover:bg-[#FF3811] hover:text-white rounded outline-none ">Get More Services</button>
    </div>
  );
};

export default Services;
