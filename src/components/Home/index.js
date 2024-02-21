/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
// Write your code here
import './index.css'
import {IoSearchOutline} from 'react-icons/io5'
import {FaSquarePlus} from 'react-icons/fa6'
import {FaFilter} from 'react-icons/fa'
import Slider from '../Slider'
import Header from '../Header'

const Home = () => (
  <div className="home-bg">
    <Slider />
    <div className="w-[800px]">
      <Header />
      <div className="bg-1">
        <div className="cont-1">
          <div className="head-cont">
            <h1 className="head">All POD Requests</h1>
            <p>Download POD</p>
          </div>
          <div className="input-cont">
            <IoSearchOutline size={20} />
            <input
              type="search"
              className="bg-transparent"
              placeholder="Search"
            />
          </div>
          <div className="head-cont">
            <button className="flex flex-row items-center text-blue w-[150px] border border-[1px] p-1 pl-5 bg-gray-100 rounded-[10px]">
              Request POD <FaSquarePlus className="ml-2" />
            </button>
            <FaFilter className="fill-[blue]" />
          </div>
        </div>
        <div className="bg-2">
          <div className="input-cont1">
            <label>LR / GR / Bilty Number</label>
            <input type="text" className="input-s" />
          </div>
          <div className="input-cont1">
            <label>Vehicle Number</label>
            <input type="text" className="input-s" />
          </div>
          <div className="input-cont1">
            <label>Select Vendor</label>
            <input type="text" className="input-s" />
          </div>
          <div className="input-cont1">
            <label>Vehicle Loading date</label>
            <input type="text" className="input-s" />
          </div>
          <div className="input-cont1">
            <label>Vendor Code</label>
            <input type="text" className="input-s" />
          </div>
          <button className="but">Send Request</button>
        </div>
        <div className="bg-3">
          <p>All POD Request (30)</p>
          <p className="text-green">Received (30)</p>
          <p className="text-red">Pending (30)</p>
          <p>Downloaded (30)</p>
        </div>
        <ul className="table">
          <li className="w-[30px]">S.no</li>
          <li className="w-[150px]">POD Requested Date</li>
          <li className="w-[170px]">LR / GR / Bilty Number</li>
          <li className="w-[120px]">Vehicle Number</li>
          <li className="w-[150px]">Vehicle Loading Date</li>
          <li className="w-[170px]">Vender code and Date</li>
          <li className="w-[60px]">Status</li>
          <li className="w-[50px]">Action</li>
          <li className="w-[100px]">Download</li>
        </ul>
        <div className="table-1">
          <div className="table-2">
            <p className="circle">
              <div className="bg-green-500 rounded-full h-[10px] w-[10px] mr-1"></div>
              1
            </p>
            <p className="p1">16/02/2024</p>
            <p className="p2">16/02/2024</p>
            <p className="p3">HR 000000</p>
            <p className="p1">16/02/2024</p>
            <p className="p4">16022022</p>
            <p className="p5">Received</p>
            <select className="bg-gray-100 p6 rounded-[5px]">
              <option>Select</option>
            </select>
            <button className="bg-gray-100 p5 ml-2 rounded-[5px]">
              Download
            </button>
          </div>
          <hr />
          <div className="table-2">
            <p className="circle">
              <div className="bg-green-500 rounded-full h-[10px] w-[10px] mr-1"></div>
              1
            </p>
            <p className="p1">16/02/2024</p>
            <p className="p2">16/02/2024</p>
            <p className="p3">HR 000000</p>
            <p className="p1">16/02/2024</p>
            <p className="p4">16022022</p>
            <p className="p5">Received</p>
            <select className="bg-gray-100 p6 rounded-[5px]">
              <option>Select</option>
            </select>
            <button className="bg-gray-100 p5 ml-2 rounded-[5px]">
              Download
            </button>
          </div>
          <hr />
          <div className="table-2">
            <p className="circle">
              <div className="bg-green-500 rounded-full h-[10px] w-[10px] mr-1"></div>
              1
            </p>
            <p className="p1">16/02/2024</p>
            <p className="p2">16/02/2024</p>
            <p className="p3">HR 000000</p>
            <p className="p1">16/02/2024</p>
            <p className="p4">16022022</p>
            <p className="p5">Received</p>
            <select className="bg-gray-100 p6 rounded-[5px]">
              <option>Select</option>
            </select>
            <button className="bg-gray-100 p5 ml-2 rounded-[5px]">
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default Home
