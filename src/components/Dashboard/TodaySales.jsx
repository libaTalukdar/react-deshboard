import React from 'react'
import ContentHeader from '../ContentHeader'
import { SalesData } from '../../Data'
import { FaBatteryFull, FaHackerrank, FaShoppingCart } from "react-icons/fa"
import BarChart from '../Chart/Chart';
// import ChartGraph from '../Chart/Chart';
// import { FaCircleQuestion } from "react-icons/fa6"

import WrapperDiv from './WrapperDiv';

const SalesDetails = () => {
  return (
    <div className="p-4 bg-gray-500">
      <ContentHeader title="Today’s Sales" description="Sales Summary" />
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5">
        {SalesData &&
          SalesData.map((data) => {
            return (
              <div key={data.id} className={`bg-gray-600 p-4 rounded-md`}>
                <div>{data.icon}</div>
                {/* <img src={data.icon} alt="" /> */}
                <div className="mt-2">
                  <p className="text-[15px] font-semibold text-white/80 pb-1">
                    {data.count}
                  </p>
                  <h1 className="text-white/80 text-[10px] md:text-[12px] font-medium">
                    {data.title}
                  </h1>
                  <p
                    style={{ color: data.color }}
                    className={`text-[8px] md:text-[10px] font-medium`}
                  >
                    {data.des}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

const SalesChart = () => {
  return (
    <div className=" p-4  bg-gray-700">
      <ContentHeader title="Level" className='text-center md:text-left' />
      <div className="w-full h-[120px]">
        {/* <img className="w-full h-full" src={Bars} alt="" /> */}
        <BarChart />
        {/* <ChartGraph /> */}
      </div>
      <div className="flex justify-center w-full gap-20 lg:gap-0 items-center pt-2 mt-2">
        <button className="flex items-center lg:justify-center gap-2 text-grayText text-[10px] font-medium lg:border-r border-grayText/30 lg:w-full">
          <span className="h-2 w-2 rounded-full bg-secondary"></span>Volume
        </button>
        <button className="flex items-center lg:justify-center gap-2 text-grayText text-[10px] font-medium lg:w-full">
          <span className="h-2 w-2 rounded-full bg-grayText"></span>Service
        </button>
      </div>
    </div>
  );
};
const TodaySales = () => {
  return (
    <div  className='w-full'>
      <div className="flex flex-col md:flex-row  gap-6 m-4">
        <div className='flex-[1.5]'>
        <SalesDetails />
        </div>
        <div>
        <SalesChart />
        </div>
     
      

      </div>
      {/* <WrapperDiv>
        <div className="flex-[1.3] lg:flex-[1.5] bg-primary2 rounded-md">
         
        </div>
        <div className="flex-[0.7] lg:flex-[0.5] bg-primary2 rounded-md">
          
        </div>
      </WrapperDiv> */}
    </div>
   
  );
};
export default TodaySales
