import PropTypes from "prop-types"

function Contact() {
  return (
    <div className="w-screen h-[87vh] flex items-center py-12 flex-col">
      <h2 className="font-semibold font-serif text-3xl text-gray-800 capitalize pb-5">
        Follow us on social media
      </h2>
      <p className="px-[25%] text-gray-700 text-center mb-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        error accusantium esse, reiciendis rem fugiat eligendi delectus, dolore
        odio expedita iusto architecto quos provident. Dolor!
      </p>
      <div className="w-full h-[55vh] flex items-center pt-12">
        <ImageDisplay hieght="[80%]" imgPath="public/img/person5.jpg" />
        <ImageDisplay imgPath="public/img/palce3.webp" />
        <ImageDisplay hieght="[80%]" imgPath="public/img/place4.webp" />
        <ImageDisplay imgPath="public/img/place2.jpeg" />
        <ImageDisplay hieght="[80%]" imgPath="public/img/person13.jfif" />
        <ImageDisplay imgPath="public/img/pace1.jpeg" />
        <ImageDisplay hieght="[80%]" imgPath="public/img/img2.jfif" />
      </div>
    </div>
  )
}

ImageDisplay.propTypes = {
  hieght: PropTypes.string,
  imgPath: PropTypes.string,
}

function ImageDisplay({ hieght, imgPath }) {
  return (
    <div
      className={
        hieght
          ? `h-${hieght} w-[310px] bg-gray-400`
          : " w-[310px] h-full bg-gray-400"
      }
    >
      <img src={imgPath} alt="" className="w-full h-full object-cover" />
    </div>
  )
}
export default Contact
