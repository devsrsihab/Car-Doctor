import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import OrderRow from "./OrderRow";
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Orders = () => {

    // toaster
    const notifyOrderUpdate = () => {
      toast("Your Order Status Update to Approved!", {
        position: toast.POSITION.TOP_RIGHT,
        className: 'foo-bar'
      });
    };
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

  // delete handler
  const handleDeleteRow = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {

      if (result.isConfirmed) {
        const getOrdderDelete = async () => {
          try {
            const response = await axios.delete(`http://localhost:3000/service/orders/${_id}`);
            const remainingOrder = orders.filter(order => order._id !== _id )
            setorders(remainingOrder)
            console.log(response);




          } catch (error) {
            console.error(error);
          }
        };
        getOrdderDelete()
      }


    });
  };

  // update roder status
  const handleUpdateOrderStatus = async(_id)=>{
    console.log(_id);

    try {
      const response = await axios.patch(`http://localhost:3000/service/orders/${_id}`,{
        statu: 1
      })
      console.log(response);
      // update the state of order
      const remainingUpdateOrder = orders.filter(order => order._id !== _id)
      const updatedOrder = orders.find(order => order._id === _id)
      updatedOrder.status = 1
      const newOrders = [updatedOrder, ...remainingUpdateOrder]
      setorders(newOrders)
      notifyOrderUpdate()
      
    } catch (error) {
      console.error(error);
    }
  }











  return (
    <>
      <div className="overflow-x-auto py-10">
        <table className="table">
          {/* table header */}
          <thead>
            <tr>
              <th>Cancel</th>
              <th>Product Name</th>
              <th>User Email</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {orders.map((order) => (
              <OrderRow key={order._id} order={order} handleDeleteRow={handleDeleteRow} handleUpdateOrderStatus={handleUpdateOrderStatus} />
            ))}
          </tbody>
          <ToastContainer />
        </table>
      </div>
    </>
  );
};

export default Orders;
