import image1 from "../assets/images/image-1.webp";
import image2 from "../assets/images/image-2.webp";
import image3 from "../assets/images/image-3.webp";
import image4 from "../assets/images/image-4.webp";
import image5 from "../assets/images/image-5.webp";
import image6 from "../assets/images/image-6.webp";
import image7 from "../assets/images/image-7.webp";
import image8 from "../assets/images/image-8.webp";
import image9 from "../assets/images/image-9.webp";
import image10 from "../assets/images/image-10.jpeg";
import image11 from "../assets/images/image-11.jpeg";
import UploadImage from "./UploadImage";
const ImageGallary = () => {
  return (
    <div className=" grid grid-cols-5 gap-3">
      <div className="border col-span-2 row-span-2  rounded-lg ">
      <img className="" src={image11} alt="" />
      </div>
      <div className="border rounded-lg ">
        
        <img className=" w-full mx-auto " src={image1} alt="" />
      </div>

      <div className="border rounded-lg ">
        <img className=" w-full mx-auto " src={image3} alt="" />
      </div>
      <div className="border rounded-lg ">
        <img className=" w-full mx-auto " src={image4} alt="" />
      </div>
      <div className="border rounded-lg ">
        <img className=" w-full mx-auto " src={image5} alt="" />
      </div>
      <div className="border rounded-lg ">
        <img className=" w-full mx-auto " src={image6} alt="" />
      </div>
      <div className="border rounded-lg ">
        <img className=" w-full mx-auto " src={image7} alt="" />
      </div>
      <div className="border rounded-lg ">
        <img className=" w-full mx-auto " src={image8} alt="" />
      </div>
      <div className="border rounded-lg ">
        <img className=" w-full mx-auto " src={image9} alt="" />
      </div>
      <div className="border rounded-lg ">
        <img className=" w-full mx-auto " src={image10} alt="" />
      </div>
      <div className="border rounded-lg ">
        
      <img className=" w-full mx-auto " src={image2} alt="" />
      </div>
      <div className="border rounded-lg ">
        
        <UploadImage/>
      </div>
    </div>

    
  );
};

export default ImageGallary;
