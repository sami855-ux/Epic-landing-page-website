import PropTypes from "prop-types"

function Details() {
  return (
    <div className="w-screen h-screen pl-32 py-20">
      <Deals />
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
      <span className="pt-2">{status}</span>
    </section>
  )
}

export default Details
