import { useEffect, useState } from "react";
import SectionHeading from "../Shared/Section Things/SectionHeading";
import Service from "./Service";
import axios from "axios";

const Services = () => {
  // state fro service
  const [services, setServices] = useState([]);
  // useEffect for services
  useEffect(() => {
    // make a async request
    const getSerivces = async() => {
      try {
        const response = await axios.get('../../src/assets/services.json');
        setServices(response.data);
      } catch (error) {
        console.error(error);
      }

    };
    // call getSerivces function
    getSerivces();
  }, []);
  return (
    <div className="services-wraper text-center py-20">
      <SectionHeading />
      <div className="services py-20 gap-6 grid grid-cols-3 ">
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
