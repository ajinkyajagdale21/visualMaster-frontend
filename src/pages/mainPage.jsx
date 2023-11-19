import { useEffect } from 'react'
import { getGraphData, getInitialGraphData } from '../services/api'
import { useState } from 'react'

import { DateRangePicker } from '../components/dateRangePicker'
import { calculateSum } from '../utils/sumValueUtil'
import { Button, Select} from 'antd';
import { BarChartComponent } from '../components/barChart'
import Cookies from 'js-cookie'

export const MainPage = () => {

    const [graphDataSet,setGraphDataSet]= useState([])
    const [dateRangeSelected,setDateRangeSelected]= useState(Cookies.get("dateRange")? Cookies.get("dateRange") :[])
    const [age,setAge]=useState(Cookies.get("age")?Cookies.get("age"):"")
    const [gender,setGender]=useState(Cookies.get("gender")?Cookies.get("gender"):"")
  
    useEffect(()=>{
     const getData=async()=>{
       try{ 
       const res= await getInitialGraphData()
       setGraphDataSet(calculateSum(res.data))
       }
       catch(err){
        console.error(err);
       }
      }
     
     getData()
    },[])
    
    useEffect(()=>{
      Cookies.set("age",age)
      Cookies.set("gender",gender)
      Cookies.set("dateRange",dateRangeSelected)
    },[dateRangeSelected,age,gender])
  
    const handleAgeChange = (value) => {
      setAge(value)
    };
  
    const handleGenderChange=(value)=>{
      setGender(value)
    }
    
    const filterDataForCall=async()=>{
     try{
      const res = await getGraphData(dateRangeSelected,age,gender)
      console.log(res);
      setGraphDataSet(calculateSum(res.data))
     }
     catch(err){
      console.error(err)
     }
     }
  

  return (
    <div>

<h1>VisualMaster</h1>
     <DateRangePicker setDateRangeSelected={setDateRangeSelected}/>
     <Select
      defaultValue={Cookies.get("age")?Cookies.get("age"):"Select Age"}
      placeholder="Select Age"
      style={{
        width: 120,
      }}
      onChange={handleAgeChange}
      options={[
        {
          value: '15-25',
          label: '15-25',
        },
        {
          value: '>25',
          label: '>25',
        },
      ]}
    />
     <Select
     defaultValue={Cookies.get("gender")?Cookies.get("gender"):""}
      placeholder="Select Gender"
      style={{
        width: 160,
      }}
      onChange={handleGenderChange}
      options={[
        {
          value: 'Male',
          label: 'Male',
        },
        {
          value: 'Female',
          label: 'Female',
        },
      ]}
    />
    <Button onClick={filterDataForCall}>Filter</Button>
    
    <BarChartComponent graphDataSet={graphDataSet}/>
     


    </div>
  )
}
