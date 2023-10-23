import timetable from '../../assets/icons/timetable.svg'
import location from '../../assets/icons/location.svg'
import phone from '../../assets/icons/phone.svg'

const LocationAdress = () => {
  return (
    <div className="LocationAdress flex justify-between bg-black text-white mb-20 p-20 " >
        <div className="time">
            <div className="icon-box flex gap-6 items-center">
                <div className="icon text-4xl">
                  <img src={timetable} alt="" />
                </div>
                <div className="content">
                    <p className="capitalize mb-2">We are open monday-friday</p>
                    <h2 className="capitalize text-2xl font-bold  " >7:00 am - 9:00 pm</h2>
                </div>
            </div>
        </div>
        <div className="phone">
            <div className="icon-box flex gap-6 items-center">
                <div className="icon text-4xl">
                <img src={location} alt="" />
                </div>
                <div className="content">
                    <p className="capitalize mb-2">We are open monday-friday</p>
                    <h2 className="capitalize text-2xl font-bold  " >7:00 am - 9:00 pm</h2>
                </div>
            </div>
        </div>
        <div className="location">
            <div className="icon-box flex gap-6 items-center">
                <div className="icon text-4xl">
                <img src={phone} alt="" />
                </div>
                <div className="content">
                    <p className="capitalize mb-2">We are open monday-friday</p>
                    <h2 className="capitalize text-2xl font-bold  " >7:00 am - 9:00 pm</h2>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default LocationAdress