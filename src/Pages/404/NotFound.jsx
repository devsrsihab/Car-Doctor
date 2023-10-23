import NotFoundImg from '../../assets/images/notFound/404NotFound.svg'
import Navbar from '../Shared/Navbar/Navbar'
const NotFound = () => {
  return (
    <div>
        <Navbar/>
        <div className="not-found-img py-20 flex justify-center items-center">

        <img src={NotFoundImg} alt="not-found" />
        </div>
    </div>
  )
}

export default NotFound