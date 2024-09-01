import React from "react"
import PropTypes from "prop-types"
import { FaSearch } from "react-icons/fa"
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
  return (
    <ul className="h-full flex items-center mr-8">
      <li className="px-2 mx-1 cursor-pointer text-base">Shop</li>
      <li className="px-2 mx-1 cursor-pointer text-base">On Sale</li>
      <li className="px-2 mx-1 cursor-pointer text-base">New Arrival</li>
      <li className="px-2 mx-1 cursor-pointer text-base">Brands</li>
    </ul>
  )
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
      <BsCart size={18} />
      <BsPersonCircle size={18} />
    </div>
  )
}

export default Header
