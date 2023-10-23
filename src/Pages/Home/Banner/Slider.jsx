import slideImg1 from "../../../assets/images/banner/1.jpg";
import slideImg2 from "../../../assets/images/banner/2.jpg";
import slideImg3 from "../../../assets/images/banner/3.jpg";
import slideImg4 from "../../../assets/images/banner/4.jpg";
import slideImg5 from "../../../assets/images/banner/5.jpg";
import slideImg6 from "../../../assets/images/banner/6.jpg";
import Slide from "./Slide";

const Slider = () => {

    const slideProps = [
        {img: slideImg1, slideId: "slide1", buttonPrevId: "#slide6", buttonNextId: "#slide2"},
        {img: slideImg2, slideId: "slide2", buttonPrevId: "#slide1", buttonNextId: "#slide3"},
        {img: slideImg3, slideId: "slide3", buttonPrevId: "#slide2", buttonNextId: "#slide4"},
        {img: slideImg4, slideId: "slide4", buttonPrevId: "#slide3", buttonNextId: "#slide5"},
        {img: slideImg5, slideId: "slide5", buttonPrevId: "#slide4", buttonNextId: "#slide6"},
        {img: slideImg6, slideId: "slide6", buttonPrevId: "#slide5", buttonNextId: "#slide1"},
    ]



  return <div className="carousel rounded-lg mt-20 h-[600px] w-full">
    {
        slideProps.map((slider,index) => <Slide
         key={index}
         img={slider.img}
         slideId={slider.slideId}
         buttonPrevId={slider.buttonPrevId}
         buttonNextId={slider.buttonNextId}

         />
        )
    }
  </div>;
};

export default Slider;

// image src
// slider id
// slider button prev id
// sllider button next id
