import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";

const Orders = () => {
  // use order State
  const [orders, setorders] = useState([]);
  // user form authcontext
  const { user } = useContext(AuthContext);
  // useEffect
  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/service/orders?email=${user.email}`
        );
        setorders(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getOrders();
  }, [setorders, user.email]);

  return (
    <>
      <div className="overflow-x-auto py-10">
        <table className="table">
          {/* head */}
          {/* <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead> */}
          <tbody>
            {/* row 1 */}
            {
                orders?.map(order => 
            <tr key={order._id} >
              <th>
                <label>
                  <span className="text-2xl ">X</span>
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask  w-24 h-12">
                      <img
                        className="w-full h-full object-cover"
                        src={order.img}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{order.title}</div>
                    <div className="text-sm opacity-50">BD</div>
                  </div>
                </div>
              </td>
              <td>

                <span className="badge badge-ghost badge-sm">
                  {order.email}
                </span>
              </td>
              <td>
                {
                    order.orderDate
                }
              </td>
              <th>
                <button className="btn bg-[#29B170] btn-outline text-white">Approved</button>
              </th>
            </tr>
)
}
          </tbody>
          {/* foot */}
          {/* <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot> */}
        </table>
      </div>
    </>
  );
};

export default Orders;
