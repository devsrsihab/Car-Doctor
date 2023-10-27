import PropTypes from 'prop-types'

const OrderRow = ({order,handleDeleteRow,handleUpdateOrderStatus}) => {
    const {_id,img,title,orderDate,email,status} = order





  return (
    <tr>
    <th>
      <label>
        <button onClick={() => handleDeleteRow(_id)} className="btn btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>{" "}
      </label>
    </th>
    <td>
      <div className="flex items-center space-x-3">
        <div className="avatar">
          <div className="mask  w-24 h-12">
            <img
              className="w-full h-full object-cover"
              src={img}
              alt="Avatar Tailwind CSS Component"
            />
          </div>
        </div>
        <div>
          <div className="font-bold">{title}</div>
          <div className="text-sm opacity-50">BD</div>
        </div>
      </div>
    </td>
    <td>
      <span className="badge badge-ghost badge-sm">
        {email}
      </span>
    </td>
    <td>{orderDate}</td>
    <th>
        {
            status === 0 ? 
            <button onClick={() => handleUpdateOrderStatus(_id) } className="btn bg-red-500 btn-outline text-white">
            Pending
          </button>
            : 
            <button readOnly className="btn bg-[#29B170] btn-outline text-white">
            Approved
          </button>
        }

    </th>
  </tr>
  )
}

OrderRow.propTypes = {
  order: PropTypes.object,
  handleDeleteRow: PropTypes.func,
  handleUpdateOrderStatus: PropTypes.func,
}

export default OrderRow