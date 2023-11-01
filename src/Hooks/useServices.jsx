import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useServices = () => {
  // state fro service
  const [services, setServices] = useState([]);
  const axiosSecure = useAxiosSecure()
  // useEffect for services
  useEffect(() => {
    // make a async request
    const getSerivces = async() => {
      try {
        const response = await axiosSecure.get('/services');
        setServices(response.data);
      } catch (error) {
        console.log(error);
      }

    };
    // call getSerivces function
    getSerivces();
  }, []);

  return services
}

export default useServices