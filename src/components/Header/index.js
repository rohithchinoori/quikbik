import './index.css'
import {useState} from 'react'
import {CgProfile} from 'react-icons/cg'

const Header = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  return (
    <div className="header-bg shadow-md">
      <ul>
        <li
          className={`slide-li ${selectedTab === 0 ? 'select' : ''}`}
          onClick={() => setSelectedTab(0)}
        >
          Bid
        </li>
        <li
          className={`slide-li ${selectedTab === 1 ? 'select' : ''}`}
          onClick={() => setSelectedTab(1)}
        >
          POD
        </li>
        <li
          className={`slide-li ${selectedTab === 2 ? 'select' : ''}`}
          onClick={() => setSelectedTab(2)}
        >
          Vendor
        </li>
        <li>User</li>
        <li className="profile">
          <CgProfile />
          <select>
            <option>FreightEg</option>
          </select>
        </li>
      </ul>
    </div>
  )
}
export default Header
