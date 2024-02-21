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
        <div className="bg-white flex flex-row items-center mt-3 shadow-sm pl-3 pr-3 justify-between p-[5px]">
          <div className="flex items-center gap-[10px]">
            <h1 className="head">All POD Requests</h1>
            <p>Download POD</p>
          </div>
          <div className="flex flex-row items-center border-[1px] p-1 rounded-[16px] h-[40px] w-[400px]">
            <IoSearchOutline size={20} />
            <input
              type="search"
              className="bg-transparent"
              placeholder="Search"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="flex flex-row items-center text-blue w-[150px] border border-[1px] p-1 pl-5 bg-gray-100 rounded-[10px]">
              Request POD <FaSquarePlus className="ml-2" />
            </button>
            <FaFilter className="fill-[blue]" />
          </div>
        </div>
        <div className="bg-white ml-5 mt-5 rounded-[8px] shadow-md flex flex-row flex-wrap gap-[20px] p-[15px] h-[180px] w-[1200px]">
          <div className="flex flex-row items-center gap-2 w-[350px]">
            <label>LR / GR / Bilty Number</label>
            <input
              type="text"
              className="bg-gray-100 h-[25px] p-1 border-[1px]"
            />
          </div>
          <div className="flex flex-row items-center gap-2 w-[350px]">
            <label>Vehicle Number</label>
            <input
              type="text"
              className="bg-gray-100 h-[25px] p-1 border-[1px]"
            />
          </div>
          <div className="flex flex-row items-center gap-2 w-[350px]">
            <label>Select Vendor</label>
            <input
              type="text"
              className="bg-gray-100 h-[25px] p-1 border-[1px]"
            />
          </div>
          <div className="flex flex-row items-center gap-2 w-[350px]">
            <label>Vehicle Loading date</label>
            <input
              type="text"
              className="bg-gray-100 h-[25px] p-1 border-[1px]"
            />
          </div>
          <div className="flex flex-row items-center gap-2 w-[350px]">
            <label>Vendor Code</label>
            <input
              type="text"
              className="bg-gray-100 h-[25px] p-1 border-[1px]"
            />
          </div>
          <button className="but">Send Request</button>
        </div>
        <div className="flex items-center gap-[20px] ml-5 mt-5">
          <p className="text-[16px]">All POD Request (30)</p>
          <p className="text-[16px] text-green-500">Received (30)</p>
          <p className="text-[16px] text-red-500">Pending (30)</p>
          <p className="text-[16px]">Downloaded (30)</p>
        </div>
        <ul className="table ml-5 mt-3 rounded-[8px] text-white">
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
        <div className="bg-white ml-5  shadow-md gap-[20px] p-[15px] h-[250px] w-[1200px]">
          <div className="flex items-center w-[1200px] h-[75px]">
            <p className="w-[40px] flex items-center">
              <div className="bg-green-500 rounded-full h-[10px] w-[10px] mr-1"></div>
              1
            </p>
            <p className="w-[180px]">16/02/2024</p>
            <p className="w-[200px]">16/02/2024</p>
            <p className="w-[120px]">HR 000000</p>
            <p className="w-[180px]">16/02/2024</p>
            <p className="w-[170px]">16022022</p>
            <p className="w-[80px]">Received</p>
            <select className="bg-gray-100 w-[100px] rounded-[5px]">
              <option>Select</option>
            </select>
            <button className="bg-gray-100 w-[80px] ml-2 rounded-[5px]">
              Download
            </button>
          </div>
          <hr />
          <div className="flex items-center w-[1200px] h-[75px]">
            <p className="w-[40px] flex items-center">
              <div className="bg-green-500 rounded-full h-[10px] w-[10px] mr-1"></div>
              1
            </p>
            <p className="w-[180px]">16/02/2024</p>
            <p className="w-[200px]">16/02/2024</p>
            <p className="w-[120px]">HR 000000</p>
            <p className="w-[180px]">16/02/2024</p>
            <p className="w-[170px]">16022022</p>
            <p className="w-[80px]">Received</p>
            <select className="bg-gray-100 w-[100px] rounded-[5px]">
              <option>Select</option>
            </select>
            <button className="bg-gray-100 w-[80px] ml-2 rounded-[5px]">
              Download
            </button>
          </div>
          <hr />
          <div className="flex items-center w-[1200px] h-[70px]">
            <p className="w-[40px] flex items-center">
              <div className="bg-green-500 rounded-full h-[10px] w-[10px] mr-1"></div>
              1
            </p>
            <p className="w-[180px]">16/02/2024</p>
            <p className="w-[200px]">16/02/2024</p>
            <p className="w-[120px]">HR 000000</p>
            <p className="w-[180px]">16/02/2024</p>
            <p className="w-[170px]">16022022</p>
            <p className="w-[80px]">Received</p>
            <select className="bg-gray-100 w-[100px] rounded-[5px]">
              <option>Select</option>
            </select>
            <button className="bg-gray-100 w-[80px] ml-2 rounded-[5px]">
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default Home
