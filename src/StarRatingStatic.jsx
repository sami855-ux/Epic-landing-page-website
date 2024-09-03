import { FaStar } from "react-icons/fa"
import PropTypes from "prop-types"

function StarRating({ rate = 3 }) {
  return (
    <div className="w-full h-full flex space-x-1 ">
      {Array.from({ length: 5 }, (_, i) => (
        <FaStar size={15} key={i} fill={rate >= i + 1 ? "#fcc419" : null} />
      ))}
    </div>
  )
}

StarRating.propTypes = {
  rate: PropTypes.number,
}

export default StarRating
