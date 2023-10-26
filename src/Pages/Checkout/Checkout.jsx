import { useLoaderData } from "react-router-dom"

const Checkout = () => {

    const service = useLoaderData()
    const {title, price} = service
    console.log(service);

  return (
    <div>
        <h2 className="text-2xl text-red-500 capitalize">Checkout Title: {title} </h2>
        <h2 className="text-2xl text-blue-500 capitalize">Checkout price: {price} </h2>
    </div>
  )
}

export default Checkout