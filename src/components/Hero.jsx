import PropTypes from "prop-types"
import { BsStarFill } from "react-icons/bs"

function Hero() {
  return (
    <div className="hero-wrapper flex items-center relative">
      <div className="w-[60vw] pl-40 flex justify-center flex-col">
        <h2 className="font-extrabold text-6xl  text-slate-100 word-spa tracking-wide pt-20">
          Shop the spring <br /> Collection Now!
        </h2>
        <p className="font-thin text-sm  text-slate-100 pr-12 pt-10 mb-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          ratione at ducimus neque enim libero, accusamus fuga illum! Assumenda
          ex et fugiat necessitatibus, delectus sunt aspernatur recusandae velit
          mollitia labore cumque minima similique temporibus.
        </p>
        <button className="w-48 py-2 rounded-3xl bg-slate-200 font-semibold text-gray-700 border border-slate-200">
          Shop Now
        </button>

        <div className="w-full h-24 mt-5 flex items-center space-x-16">
          <section className="w-36 h-full flex flex-col">
            <p className="font-semibold text-4xl text-slate-200">200+</p>
            <span className="text-sm">International Brands</span>
          </section>
          <section className="w-36 h-full flex flex-col">
            <p className="font-semibold text-4xl text-slate-200">2,000+</p>
            <span className="text-sm">International Brands</span>
          </section>
          <section className="w-36 h-full flex flex-col">
            <p className="font-semibold text-4xl text-slate-200">30,000+</p>
            <span className="text-sm text-gray-700">International Brands</span>
          </section>
        </div>
      </div>
      <BsStarFill size={40} fill="#fff" className=" absolute top-10 right-20" />
      <BsStarFill
        size={30}
        fill="#fff"
        className=" absolute bottom-10 right-[50%]"
      />
      <BsStarFill
        size={25}
        fill="#fff"
        className=" absolute bottom-[50%] right-[60%]"
      />
    </div>
  )
}

export default Hero
