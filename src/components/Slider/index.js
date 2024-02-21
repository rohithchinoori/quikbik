import {useState} from 'react'
import './index.css'
import {CiGrid42} from 'react-icons/ci'
import {FaCircle} from 'react-icons/fa'

const Slider = () => {
  const [selectedTab, setSelectedTab] = useState(0) // State to keep track of the selected tab

  return (
    <div className="slide-bg">
      <div>
        <div className="slide-cont">
          <FaCircle size={30} />
          <h1 className="text-[20px] font-[600]">LOGO</h1>
        </div>
        <ul className="slide-ul mt-5">
          <li
            className={`slide-li ${selectedTab === 0 ? 'selected' : ''}`}
            onClick={() => setSelectedTab(0)}
          >
            <CiGrid42 size={20} className="fill-gray" />
            Bid
          </li>
          <li
            className={`slide-li ${selectedTab === 1 ? 'selected' : ''}`}
            onClick={() => setSelectedTab(1)}
          >
            <CiGrid42 size={20} className="fill-gray" /> POD
          </li>
          <li
            className={`slide-li ${selectedTab === 2 ? 'selected' : ''}`}
            onClick={() => setSelectedTab(2)}
          >
            <CiGrid42 size={20} className="fill-gray" /> Vendor
          </li>
          <li
            className={`slide-li ${selectedTab === 3 ? 'selected' : ''}`}
            onClick={() => setSelectedTab(3)}
          >
            <CiGrid42 size={20} className="fill-gray" /> User
          </li>
        </ul>
      </div>
      <ul className="slide-ul">
        <li className="slide-li">
          <CiGrid42 size={20} className="fill-gray" /> Settings
        </li>
        <li className="slide-li">
          <CiGrid42 size={20} className="fill-gray" /> Profile
        </li>
        <li className="slide-li">
          <CiGrid42 size={20} className="fill-gray" /> Contact Us
        </li>
        <li className="slide-li">
          <CiGrid42 size={20} className="fill-gray" /> Logout
        </li>
      </ul>
    </div>
  )
}

export default Slider
