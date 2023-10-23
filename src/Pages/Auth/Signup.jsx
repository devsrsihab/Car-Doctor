import { Link } from "react-router-dom";
import loginForm from "../../assets/images/login/login.svg";
import { BiLogoFacebook,BiLogoLinkedin,BiLogoGoogle } from "react-icons/bi";

const Signup = () => {
  return (
    <div className="signup py-8">
      <div className="hero bg-base-200">
        <div className="hero-content w-full items-center  ">
          <div className="form-image w-1/2">
            <img src={loginForm} alt="form-righ-img" />
          </div>
          <div className="form card  w-1/2   shadow-2xl bg-base-100">
            <form className="card-body">
              {/* form heading */}
              <h2 className="text-4xl text-center font-bold mb-20">Sign Up</h2>
              <div className="form-control mb-6">
                <label className="label text-lg font-semibold mb-5">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered border-[#E8E8E8] h-16 transition ease-in-out delay-150 outline-none focus:outline-none focus:border-black/70 "
                  required
                />
              </div>
              <div className="form-control mb-6">
                <label className="label text-lg font-semibold mb-5">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="input input-bordered border-[#E8E8E8] h-16 transition ease-in-out delay-150 outline-none focus:outline-none focus:border-black/70 "
                  required
                />
              </div>
              <div className="form-control mb-6">
                <label className="label text-lg capitalize font-semibold mb-5">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="email"
                  placeholder="Your password"
                  className="input input-bordered border-[#E8E8E8] h-16 transition ease-in-out delay-150 outline-none focus:outline-none focus:border-black/70 "
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn min-h-16 rounded bg-[#FF3811] hover:bg-[#FF3811]  text-white text-xl font-semibold  ">
                  Sign Up
                </button>
              </div>
              <div className="body-footer flex flex-col gap-4 items-center my-6">
                <span>Or Sign Up with</span>
                <div className="footer-icons flex gap-6">
                    <div className="icon text-2xl p-4 rounded-full bg-[#F5F5F8] flex justify-center items-center "><BiLogoFacebook/></div>
                    <div className="icon text-2xl p-4 rounded-full bg-[#F5F5F8] flex justify-center items-center "><BiLogoLinkedin/></div>
                    <div className="icon text-2xl p-4 rounded-full bg-[#F5F5F8] flex justify-center items-center "><BiLogoGoogle/></div>
                </div>
                <h2>Already have an account? <Link to={'/login'} className="text-[#FF3811] font-semibold">Login</Link> </h2>

            </div>
            </form>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
