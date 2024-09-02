import { useState } from "react"
import PropTypes from "prop-types"
import { FaSearch, FaAngleDown } from "react-icons/fa"
import { BsCart, BsPersonCircle } from "react-icons/bs"

function Header() {
  return (
    <header className="w-screen h-16 flex items-center justify-between px-[10%]  ">
      <h2 className="font-bold text-3xl pr-14">LOUIS VUTTON</h2>
      <Menu />
      <SearchBar />
    </header>
  )
}

function Menu() {
  const [isHover, setIsHover] = useState(false)

  const handelHoverMenu = () => {
    setIsHover((curr) => !curr)
  }

  return (
    <>
      <ul className="h-full flex items-center mr-8 space-x-5">
        <li
          className="px-2 mx-1 cursor-pointer text-base flex items-center space-x-2"
          onMouseEnter={handelHoverMenu}
          onMouseLeave={handelHoverMenu}
        >
          Shop
          <span className="px-1">
            <FaAngleDown />
          </span>
        </li>
        <List text="Brands" />
        <List text="On Sale" />
        <List text="New Arrival" />
      </ul>
      <HoverMenu isHover={isHover} />
    </>
  )
}

List.propTypes = {
  text: PropTypes.string,
}

function List({ text }) {
  return <li className="px-2 mx-1 cursor-pointer text-base ">{text}</li>
}

function SearchBar() {
  return (
    <div className="w-[480px] h-full flex items-center space-x-4 ">
      <section className="w-[75%] h-11 bg-slate-200 rounded-3xl flex space-x-2 items-center px-4">
        <FaSearch size={15} />
        <input
          type="text"
          className="w-[95%] h-full outline-none bg-transparent text-sm"
          placeholder="Search for products..."
        />
      </section>
      <BsCart size={18} className="cursor-pointer" />
      <BsPersonCircle size={18} className="cursor-pointer" />
    </div>
  )
}

HoverMenu.propTypes = {
  isHover: PropTypes.bool,
}

function HoverMenu({ isHover }) {
  return (
    <div
      className="absolute top-[55px] left-96 w-[400px] h-32 bg-slate-50 transition duration-500 ease-in-out rounded-md p-3"
      style={
        isHover
          ? { visibility: "visible", opacity: "1" }
          : { visibility: "hidden", opacity: "0" }
      }
    >
      <h3 className="font-semibold text-lg mb-2">Cart Items</h3>
      <section className="flex flex-wrap">
        <span className="text-sm mr-3">commodi incidunt!</span>
        <span className="text-sm mr-3">consectetur </span>
        <span className="text-sm mr-3">adipisicing elit</span>
        <span className="text-sm mr-3">commodi</span>
        <span className="text-sm mr-3">modi</span>
        <span className="text-sm mr-3">adipisicing</span>
        <span className="text-sm mr-3">Voluptatem</span>
        <span className="text-sm mr-3">sapiente</span>
        <span className="text-sm mr-3">ipsum</span>
        <span className="text-sm mr-3">amet</span>
        <span className="text-sm mr-3">fuga</span>
      </section>
    </div>
  )
}
export default Header
