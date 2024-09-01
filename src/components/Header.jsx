import React from "react"
import PropTypes from "prop-types"

function Header() {
  return (
    <header className="w-screen h-16 flex items-center justify-between px-[10%] bg-slate-300 ">
      <h2 className="font-bold text-3xl pr-14">LOUIS VUTTON</h2>
      <Menu />
      <SearchBar />
    </header>
  )
}

function Menu() {
  return (
    <ul className="h-full flex items-center">
      <li className="px-2 mx-1 font-semibold cursor-pointer text-base">Shop</li>
      <li className="px-2 mx-1 font-semibold cursor-pointer text-base">
        On Sale
      </li>
      <li className="px-2 mx-1 font-semibold cursor-pointer text-base">
        New Arrival
      </li>
      <li className="px-2 mx-1 font-semibold cursor-pointer text-base">
        Brands
      </li>
    </ul>
  )
}

function SearchBar() {
  return <div className=""></div>
}

export default Header
