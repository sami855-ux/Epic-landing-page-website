import PropTypes from "prop-types"
import StarRating from "../StarRatingStatic"

function Arrival() {
  return (
    <div className="w-screen min-h-screen flex items-center flex-col bg-slate-50 mt-8">
      <h2 className="font-semibold text-4xl py-4 text-gray-800 font-serif">
        New Arrival
      </h2>
      <p className="w-[500px] py-1 text-center tex-sm font-sans">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fugiat
        quam vitae in omnis perspiciatis. Voluptatum nulla sunt.
      </p>
      <section className="w-[72vw] h-24 flex space-x-3 items-center ">
        <FilterBtns text="Men's Fashion" isActive={false} />
        <FilterBtns text="Woman's Fashion" isActive={true} />
        <FilterBtns text="Woman's Accessories" isActive={false} />
        <FilterBtns text="man's Accessories" isActive={false} />
        <FilterBtns text="Discount Dogls" isActive={false} />
      </section>

      <div className="w-[77vw] min-h-[80vh] flex flex-wrap gap-14  ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

FilterBtns.propTypes = {
  text: PropTypes.string,
  isActive: PropTypes.bool,
}

function FilterBtns({ text, isActive }) {
  return (
    <button
      style={isActive ? { backgroundColor: "#222", color: "#fff" } : null}
      className="w-56 py-3 rounded-3xl border-none  bg-slate-100 text-gray-800 font-sans capitalize"
    >
      {text}
    </button>
  )
}

function Card() {
  return (
    <div className="w-[310px] h-[320px] bg-slate-100 shadow-md shadow-slate-200 px-4 py-2">
      <img
        src="public/img/cloth9.jfif"
        alt="Clothe num one"
        className="w-full h-48 object-contain "
      />
      <section className="w-full py-1">
        <div className="w-full h-16 flex items-center">
          <section className="w-[60%] h-12 ">
            <h2 className="font-semibold text-lg">Skinny Coat</h2>
            <span className="text-xs">samuel tale</span>
          </section>
          <section className="w-[50%] h-full flex items-center pt-4">
            <StarRating rate={5} />
          </section>
        </div>
        <p className="font-semibold text-xs pt-7">(4x) Custmore Framework</p>
        <div className="w-full flex items-center pt-5 space-x-20">
          <span className="text-2xl font-semibold">$950.50</span>
          <span className="text-red-500 font-semibold text-xs">
            Brand new from Africa
          </span>
        </div>
      </section>
    </div>
  )
}

export default Arrival
