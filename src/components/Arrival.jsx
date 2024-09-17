import { useState } from "react"
import PropTypes from "prop-types"
import StarRating from "../StarRatingStatic"
import imageDataThree from "./imgData-3"

function Arrival() {
  const [fashionType, setFashionType] = useState("m-fash")

  let filterImageData = imageDataThree.filter((img) => img.type === fashionType)

  const handelFashionType = (type) => {
    setFashionType(type)
  }

  return (
    <div className="w-screen min-h-screen flex items-center flex-col  py-8">
      <h2 className="font-semibold text-4xl py-4 text-gray-800 font-serif">
        New Arrival
      </h2>
      <p className="w-[500px] py-1 text-center tex-sm font-sans">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fugiat
        quam vitae in omnis perspiciatis. Voluptatum nulla sunt.
      </p>
      <section className="w-[72vw] h-24 flex space-x-3 items-center ">
        <FilterBtns
          text="Men's Fashion"
          onFashionType={handelFashionType}
          type="m-fash"
          fashionType={fashionType}
        />
        <FilterBtns
          text="Woman's Fashion"
          onFashionType={handelFashionType}
          type="w-fash"
          fashionType={fashionType}
        />
        <FilterBtns
          text="Woman's Accessories"
          onFashionType={handelFashionType}
          type="w-access"
          fashionType={fashionType}
        />
        <FilterBtns
          text="man's Accessories"
          onFashionType={handelFashionType}
          type="m-access"
          fashionType={fashionType}
        />
        <FilterBtns
          text="Discount Dogls"
          onFashionType={handelFashionType}
          type="discount"
          fashionType={fashionType}
        />
      </section>

      <div className="w-[77vw] min-h-[100vh] flex flex-wrap gap-14   transition-all duration-100 ease-in-out ">
        {filterImageData && filterImageData.length > 0 ? (
          filterImageData.map((img, i) => (
            <Card
              title={img.title}
              designer={img.designer}
              starNum={img.starNum}
              quantity={img.quantity}
              price={img.price}
              manufaPlace={img.manufaPlace}
              imagePath={img.imagePath}
              key={i}
            />
          ))
        ) : (
          <p className="text-lg text-center pt-7 font-semibold">
            There is no data for this section. yet! 😢
          </p>
        )}
      </div>
    </div>
  )
}

FilterBtns.propTypes = {
  text: PropTypes.string,
  fashionType: PropTypes.string,
  type: PropTypes.string,
  onFashionType: PropTypes.func,
}

function FilterBtns({ text, fashionType, onFashionType, type }) {
  return (
    <button
      style={
        fashionType === type ? { backgroundColor: "#222", color: "#fff" } : null
      }
      className="w-56 py-3 rounded-3xl border-none  bg-slate-100 text-gray-800 font-sans capitalize"
      onClick={(e) => onFashionType(type)}
    >
      {text}
    </button>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  designer: PropTypes.string,
  starNum: PropTypes.number,
  quantity: PropTypes.number,
  price: PropTypes.number,
  manufaPlace: PropTypes.string,
  imagePath: PropTypes.string,
}
//"public/img/cloth9.jfif"Skinny Coat
function Card({
  title,
  designer,
  starNum,
  quantity,
  price,
  manufaPlace,
  imagePath,
}) {
  return (
    <div className="w-[310px] h-[320px] bg-slate-100 shadow-md shadow-slate-200 px-4 py-2">
      <img
        src={imagePath}
        alt="Clothe num one"
        className="w-full h-48 object-contain "
      />
      <section className="w-full py-1">
        <div className="w-full h-16 flex items-center">
          <section className="w-[60%] h-12 ">
            <h2 className="font-semibold text-lg">{title}</h2>
            <span className="text-xs">{designer}</span>
          </section>
          <section className="w-[50%] h-full flex items-center pt-4">
            <StarRating rate={starNum} />
          </section>
        </div>
        <p className="font-semibold text-xs pt-7">
          ({quantity}x) Custmore Framework
        </p>
        <div className="w-full flex items-center pt-5 space-x-20">
          <span className="text-2xl font-semibold">${price.toFixed(2)}</span>
          <span className="text-red-500 font-semibold text-xs">
            {manufaPlace}
          </span>
        </div>
      </section>
    </div>
  )
}

export default Arrival
