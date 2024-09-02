import PropTypes from "prop-types"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

function Details() {
  return (
    <div className="w-screen h-screen pl-32 py-20 flex">
      <Deals />
      <DealsImage />
    </div>
  )
}

function Deals() {
  return (
    <section className="w-[410px] h-full ">
      <h2 className="font-bold text-gray-800 text-4xl pb-6 pt-2 font-serif">
        Deals Of The Month
      </h2>
      <p className="text-gray-700 text-sm pb-7 tracking-wide leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        impedit, dignissimos optio fugit deleniti, vero eveniet pariatur
        consequuntur, neque quas tempora.
      </p>
      <button className="w-48 px-2 py-3 mb-5 cursor-pointer rounded-3xl bg-gray-800 text-slate-200 border-none outline-none text-sm">
        Buy Now
      </button>

      <div className="w-full h-fit pt-10">
        <h2 className="font-semibold text-2xl text-gray-800">
          Hurry, Before It &apos;s Too Late!
        </h2>
        <section className="w-full flex space-x-6 items-center  mt-4">
          <DisplayTime time="02" status="Days" />
          <DisplayTime time="06" status="Hr" />
          <DisplayTime time="05" status="Mins" />
          <DisplayTime time="30" status="Sec" />
        </section>
      </div>
    </section>
  )
}

DisplayTime.propTypes = {
  time: PropTypes.string,
  status: PropTypes.string,
}

function DisplayTime({ time, status }) {
  return (
    <section className="flex flex-col items-center justify-center w-20 h-28">
      <div className="w-[90%] h-16 flex  items-center justify-center shadow-md space-y-4">
        <span className="text-3xl">{time}</span>
      </div>
      <span className="pt-2 font-semibold">{status}</span>
    </section>
  )
}

function DealsImage() {
  return (
    <div className="w-[900px] h-full  flex">
      <Btns />
      <ImageWrapper />
    </div>
  )
}

function Btns() {
  return (
    <section className="w-32 h-full  flex items-end justify-center py-2 space-x-2">
      <span className="w-10 h-10 rounded-full bg-slate-100 shadow-md flex justify-center items-center cursor-pointer">
        <FaAngleLeft size={25} />
      </span>
      <span className="w-10 h-10 rounded-full bg-slate-100 shadow-md flex justify-center items-center cursor-pointer">
        <FaAngleRight size={25} />
      </span>
    </section>
  )
}

function ImageWrapper() {
  return (
    <>
      <div className="w-[350px] h-full relative ">
        <img
          src="public/img/shoe6.jfif"
          alt="Clothe-One"
          className="w-full h-full object-cover"
        />
        <section className="w-[220px] h-36 bg-slate-100 absolute bottom-5 left-5 rounded-md p-4">
          <h2 className="text-lg pb-7 text-gray-800 font-thin">
            01 ----- Spring Safe
          </h2>
          <span className="text-4xl ">30% OFF</span>
        </section>
      </div>

      <div className="w-[380px] h-full flex flex-col  ml-5">
        <div className="w-full h-[80%] bg-slate-100">
          <img
            src="public/img/cloth10.jfif"
            alt=""
            className="w-full h-full mix-blend-plus-darker"
          />
        </div>
        <section className="w-full h-16 flex space-x-2 items-end">
          <span className="w-6 h-6 rounded-full flex justify-center items-center border border-gray-900">
            <button className="w-2 h-2 rounded-full bg-gray-900"></button>
          </span>
          <span className="w-6 h-6 rounded-full flex justify-center items-center  border-gray-900">
            <button className="w-2 h-2 rounded-full bg-gray-900"></button>
          </span>
          <span className="w-6 h-6 rounded-full flex justify-center items-center  border-gray-900">
            <button className="w-2 h-2 rounded-full bg-gray-900"></button>
          </span>
          <span className="w-6 h-6 rounded-full flex justify-center items-center  border-gray-900">
            <button className="w-2 h-2 rounded-full bg-gray-900"></button>
          </span>
        </section>
      </div>
    </>
  )
}
export default Details