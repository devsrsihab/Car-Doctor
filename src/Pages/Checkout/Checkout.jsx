import axios from "axios";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Providers/AuthProvider";

const Checkout = () => {
  // use context for eimail 
  const {user} = useContext(AuthContext)
  const service = useLoaderData();
  const {_id,img,title, price} = service
  // toaster
  const notify = () => {
    toast("Your Order Has Been Placed!", {
      position: toast.POSITION.TOP_RIGHT,
      className: 'foo-bar'
    });
  };

  
  // handleBookService
  const handleBookService = (e)=> {
    e.preventDefault()

    const form = e.target
    const name = form.name.value 
    const date = form.date.value

    const order = {
      customerName: name,
      email: user.email,
      orderDate: date,
      serviceId: _id,
      img,
      title,
      price
    }

    // axios order post request
    const  getOrder = async () =>  {
      try {
        const data = await axios.post('http://localhost:3000/service/order',order);
        console.log(data);
        form.reset()
        notify()
      } catch (error) {
        console.error(error);
      }
    }
    getOrder()
  }

  return (
    <div className="checkout">
      <div className="checkout-header relative rounded-md z-20   h-[300px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full items-center  flex  text-white mt-10 mb-20 ">
        <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full">
          <img
            src="../../../src/assets/images/checkout/checkout.png"
            className="w-full absolute object-cover z-[-1] "
          />
        </div>

        <div className="page-title absolute top-[50%] left-[10%] transform translate-x-[-10%] translate-y-[-50%]   ">
          <h2 className="capitalize text-5xl font-bold ">Check Out</h2>
        </div>
        <div className="page-breadcumn bg-blue-500 px-16 py-7 absolute top-[110%] left-[50%] transform translate-x-[-50%] translate-y-[-100%]   ">
          <h2 className="capitalize text-xl font-bold ">Home/Checkout</h2>
        </div>
      </div>
      {/* // checkout form */}
      <div className="checout-form">
        <div className="form   shadow-2xl bg-base-100">
          <form onSubmit={handleBookService} className="card-body ">
            {/* form heading */}
            <h2 className="text-4xl text-center font-bold mb-20">Order Now</h2>
            <div className="form-wrapper">
              <div className="form-row flex">
                <div className="form-control w-full  mb-6">
                  <label className="label text-lg font-semibold mb-5">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="input input-bordered border-[#E8E8E8] h-16 transition ease-in-out delay-150 outline-none focus:outline-none focus:border-black/70 "
                    required
                  />
                </div>
                <div className="form-control w-full  mb-6">
                <label className="label text-lg capitalize font-semibold mb-5">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  placeholder="Your password"
                  className="input input-bordered border-[#E8E8E8] h-16 transition ease-in-out delay-150 outline-none focus:outline-none focus:border-black/70 "
                  required
                  name="date"
                />
              </div>
              </div>


      
            </div>

            <div className="form-control mt-6">
              <button className="btn min-h-16 rounded bg-[#FF3811] hover:bg-[#FF3811]  text-white text-xl font-semibold  ">
                Sign Up
              </button>
              <ToastContainer />

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
