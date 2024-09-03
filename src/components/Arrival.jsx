import PropTypes from "prop-types"

function Arrival() {
  return (
    <div className="w-screen min-h-screen flex items-center flex-col bg-slate-50">
      <h2 className="font-semibold text-4xl py-4 text-gray-800 font-serif">
        New Arrival
      </h2>
      <p className="w-[500px] py-1 text-center tex-sm ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fugiat
        quam vitae in omnis perspiciatis. Voluptatum nulla sunt.
      </p>
      <section className="w-[73vw] h-24 flex space-x-3 items-center ">
        <FilterBtns text="Men's Fashion" isActive={false} />
        <FilterBtns text="Woman's Fashion" isActive={true} />
        <FilterBtns text="Woman's Accessories" isActive={false} />
        <FilterBtns text="man's Accessories" isActive={false} />
        <FilterBtns text="Discount Dogls" isActive={false} />
      </section>
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
      className="w-56 py-3 rounded-3xl border-none shadow-sm bg-slate-50 text-gray-800 font-sans capitalize"
    >
      {text}
    </button>
  )
}

export default Arrival
